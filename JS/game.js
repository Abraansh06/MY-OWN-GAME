class Game{



constructor(){

}
getState() {
    var GameStateRef = database.ref('GameState');
    GameStateRef.on("value", function (data) {
        GameState = data.val();
    })

}

update(state) {
    database.ref('/').update({
        GameState: state
    });
}
async start() {
  
    if (GameState === 0) {
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if (playerCountRef.exists()) {
            playerCount = playerCountRef.val();
            player.getCount();
        }
        form = new Form()
        form.display();
      
    }
player1 = createSprite(200,500);
//player1.addImage("player1",player_img);

player2 = createSprite(800,500);
//player2.addImage("player2", player_img);
players=[player1,player2];


}



play(){

    form.hide();

                Player.getPlayerInfo();
                 image(bg, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                     fill("yellow");
                     textSize(25);
                       
                     if(index === player.index){
                         
                       
                        text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
}

}
end(){

     console.log("Game Ended");
     
}

}
