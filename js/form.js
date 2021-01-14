class Form{
    constructor(){
        this.input=createInput("Name");
        this.button=createButton('Play');
        this.greetings=createElement('h3');
        this.title=createElement('h2');
        this.reset=createButton('Reset');
    }

    hide1(){
        this.greetings.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    
    display(){
        
        this.title.html("Car Racing!!!!!");
        this.title.position(displayWidth/2-40,0);
        
        this.input.position(displayWidth/2-40,displayHeight/2-50);
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.reset.position(displayWidth-100,30);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

         
            this.greetings.html("hello " + player.name);
            this.greetings.position(displayWidth/2-20,displayHeight/4);
            })

        this.reset.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
        })    
    }
}