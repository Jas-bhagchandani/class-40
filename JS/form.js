class Form{
constructor(){
    this.input=createInput("name");
    this.button=createButton("Play");
    this.greeting=createElement("H3");
    this.reset=createButton("reset");
}

display(){
 var title= createElement("H2", "Car Racing Game");
 title.position(displayWidth/2-100, 0);
 
this.input.position(displayWidth/2-40,displayHeight/2-80);

this.button.position(displayWidth/2+50,displayHeight/2);
this.reset.position(displayWidth-80, 30);

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name=this.input.value();
    playerCount=playerCount+1;
    player.index=playerCount;
    player.update();
    player.updateCount(playerCount);
    this.greeting.html("hello"+player.name);
    this.greeting.position(displayWidth/2-40,displayHeight/4);

})

this.reset.mousePressed(()=>{
 player.updateCount(0);
 game.update(0);
 player.updateRank(0);
})


}

hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
}


}