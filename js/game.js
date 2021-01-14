class Game{ 
    constructor(){

    }
    getState(){
        var GameRef=database.ref('gameState');
        GameRef.on("value",function(data){
            gameState=data.val();
        } )
    }
    update(state){
        database.ref('/').update({
            gameState: state
        })
    }
    start(){
        if(gameState===0){
            player= new Player();
            player.getCount();
            form= new Form();
            form.display();
        }
    car1=createSprite(100,200);
    car1.addImage(car1IMG);
    car2=createSprite(300,200); 
    car2.addImage(car2IMG);
    car3=createSprite(500,200);
    car3.addImage(car3IMG); 
    car4=createSprite(700,200);
    car4.addImage(car4IMG);   
    cars=[car1,car2,car3,car4];  
    }
    
    play(){
        form.hide1();
        //textSize(30);
        //text("Game Start",100,100);
        Player.getPlayerInfo();
        player.getendcars();

        if(allPlayers !== undefined){
            var index=0;
            var x=200;
            var y;          
            
            //var displayPosition=130;

            for(var plr in allPlayers){
                background(rgb(200,130,10))
                image(trackIMG,0,-displayHeight*4,displayWidth,displayHeight*5);
                
                index+=1;
                x+=220;
                y=displayHeight-allPlayers[plr].distance;
                
                cars[index-1].x=x;
                cars[index-1].y=y;
                                
                if(index === player.index){
                    fill("white");
                    ellipse(x,y,100,100); 
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y;
                }   
                //displayPosition=displayPosition+20;
                //text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,displayPosition);
            }
        }
        
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance+=50;
            player.update();
        }
        if(player.distance>4200){
            gameState=2;
            player.rank+=1;
            Player.updateCars(player.rank);
        }
        console.log(player.distance)
        drawSprites();
    }
    end(){
        console.log(player.rank);
        console.log("game end")
    }
}
// !== means not equals to