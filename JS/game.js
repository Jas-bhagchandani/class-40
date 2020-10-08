class Game{
constructor(){

}

getState(){
    var getStateRef=database.ref("gameState");
    getStateRef.on("value", function(data){
        gameState=data.val();

    })


}

update(state){
database.ref("/").update({
    gameState:state
})
}

async start(){
 if(gameState===0){
    player= new Player();
    var playerCountRef = await database.ref("playerCount").once("value");
    if(playerCountRef.exists()){
        playerCount=playerCountRef.val();
        player.getCount();
    }
    

     form= new Form();
     form.display();

     
 }  
 car1=createSprite(100,200);
 car1.addImage("car1", car1_image);
 car2=createSprite(300,200);
 car2.addImage("car2", car2_image);
 car3=createSprite(500,200);
 car3.addImage("car3", car3_image);
 car4=createSprite(700,200);
 car4.addImage("car4", car4_image);
 cars=[car1,car2,car3,car4];

 
}

play(){
 form.hide();

 

Player.getPlayerInfo();
player.getRank();
if(allPlayers!==undefined){
    background("brown");
    image(track1_image, 0, -displayHeight*4, displayWidth, displayHeight*5);
    //index of the array
    var index=0;
    //x and y position of the cars
    var x=150;
    var y;

 for(var plr in allPlayers){
   index=index+1
   x=x+200;
   y=displayHeight-allPlayers[plr].distance; 
   cars[index-1].x=x;
   cars[index-1].y=y;
   if(index===player.index){
       cars[index-1].shapeColor="red";
       camera.position.x=displayWidth/2;
       camera.position.y=cars[index-1].y;
       stroke(12);
       fill("red");
       ellipse(x,y,70,70);
   }
   
 }


}

if(keyIsDown(UP_ARROW)&& player.index!==null){
    player.distance=player.distance+50;
    player.update();
    carSound.play();
}
//console.log(player.distance);
if(player.distance>=3550){
    gameState=2;
    player.rank=player.rank+1;
    player.updateRank(player.rank);
    textSize(20);
    fill("white");
    text("your rank is "+ player.rank, displayWidth/2, y-220);
    

}
drawSprites();

}



}