var canvas;
var music;
var w1,w2,w3,w4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
w1=createSprite(100,590,190,20)
w1.shapeColor="blue";
w2=createSprite(500,590,190,20)
w2.shapeColor="orange";
w3=createSprite(300,590,190,20)
w3.shapeColor="red";
w4=createSprite(700,590,190,20)
w4.shapeColor="green";

    //create 4 different surfaces

    box=createSprite(random(20,750,))
    box.shapeColor="white";
    box.scale=0.35;
    box.velocityY= 5;
    box.velocityX= 5;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite
    

createEdgeSprites();
  
    box.bounceOff(w1);
    box.bounceOff(w2);
    box.bounceOff(w3);
    box.bounceOff(w4);

 

if(w1.isTouching(box)&& box.bounceOff(w1)){
    box.shapeColor ="blue";
}

if(w2.isTouching(box)&& box.bounceOff(w2)){
    box.shapeColor= "orange";
}

if(w3.isTouching(box)&& box.bounceOff(w3)){
    box.shapeColor= "red";
}

if(w4.isTouching(box)&& box.bounceOff(w4)){
    box.shapeColor= "green";
}
 
    //add condition to check if box touching surface and make it bo
    drawSprites();
}
