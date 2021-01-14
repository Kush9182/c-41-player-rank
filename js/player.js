class Player{
     constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
        this.rank=null;
     }
     getCount(){
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount=data.val();
        })     
     }
     updateCount(count){
        database.ref('/').update({
            playerCount: count
        });    
     }
     update(){
         var playerIndex="players/player"+this.index
         database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        }) 
     }
     static getPlayerInfo(){
         var playerInfoRef=database.ref('players');
         playerInfoRef.on("value",(data)=>{
            allPlayers=data.val();
         })
     }
     getendcars(){
        //smaller version of line 9 and 10
        database.ref('endcars').on("value",(data)=>{
           this.rank=data.val();
        })
     }
     static updateCars(rank){
        database.ref('/').update({
           endcars: rank
        })
     }
}
// => means function