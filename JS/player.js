class Player{

constructor(){

    this.index=null;
    this.score=0;
    this.distance=0;
    this.name=null;

}

getCount(){
    var playerCountRef=database.ref("PlayerCount")
    playerCountRef.on("value",(data)=>{
        playerCount=data.val();
    })
    
}

updateCount(count){
        database.ref('/').update({
            'PlayerCount' : count
        })
}

update(){
    var playerIndex="Players/Player"+this.index
    database.ref(playerIndex).set({

    
       name :  this.name=null,
       score: this.score=0,
       distance : this.distance=0
    })
}

static getPlayerInfo(){
 var  playerInfoRef = database.ref("Players")
    playerInfoRef.on("value",(data) =>{
            playerInfo=data.val();
    })

}


}