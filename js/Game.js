class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }else{
        playerCount = 0;
      }
      form = new Form()
      form.display(playerCount);
    }
    carro1 = createSprite(100,200);
    carro1.addImage(carro1img);
    carro1.scale = 0.05;

    carro2 = createSprite(300,200);
    carro2.addImage(carro2img);
    carro2.scale = 0.11;

    carro3 = createSprite(500,200);
    carro3.addImage(carro3img);
    carro3.scale = 0.12;

    carro4 = createSprite(700,200);
    carro4.addImage(carro4img);
    carro4.scale = 0.1;

    carros = [carro1,carro2,carro3,carro4]
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start",120,80)
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(rgb(205,135,255));
      image(backgroundImg,0,-1000,1500,1500);
      var display_position = 130;
      var index = 0;
      var x = 175;
      var y;
      for(var plr in allPlayers){
        index = index+1;
        x = x + 200 ;
        y = displayHeight - allPlayers[plr].distance
        carros[index - 1].x = x;
        carros[index - 1].y = y;
        if(index === player.index){
          stroke(10)
          fill("lightblue");
          ellipse(x,y,60,60);
          carros[index-1].shapeColor = "blue";
          camera.position.x = displayWidth/2;
          camera.position.y = carros[index - 1].y;
        }
        

      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(player.distance>4500){
      gameState = 2;
    }
    drawSprites();
  }
  end(){
    console.log("terminou o jogo");
  }
}