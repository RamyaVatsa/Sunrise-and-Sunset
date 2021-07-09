const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour ;
var bg ;

function preload() {
     getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    
    
    // add condition to check if any background image is there to add
      if(backgroundImg){
          background(backgroundImg)
      }
      
   stroke("blue");
   strokeWeight(15);
   textSize(25);
   if (hour<12) {
       text("Time : "+hour + "AM",680,30)
   }else{
    text("Time : "+hour%12 + "PM",150,60)
   }
   Engine.update(engine);
    // write code to display time in correct format here
    
    }    
    async function getBackgroundImg() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var date = responseJSON.datetime;
     hour = date.slice(11, 13);
    console.log(hour)


    if(hour>=04 && hour<=06){
        bg = "Images/sunrise1.png"
    } else if (hour>=06 && hour<=08) {
        bg = "Images/sunrise2.png"
    }
    else if (hour>=08 && hour<=10) {
        bg = "Images/sunrise3.png"
    }
    else if (hour>=10 && hour<=12) {
        bg = "Images/sunrise4.png"
    }
    else if (hour>=12 && hour<=14) {
        bg = "Images/sunrise5.png"
    }
    else if (hour>=14 && hour<=16) {
        bg = "Images/sunrise6.png"
    }
    else if (hour>=16 && hour<=18) {
        bg = "Images/sunset7.png"
    }
    else if (hour>=18 && hour<=20) {
        bg = "Images/sunset8.png"
    }
    else if (hour>=20 && hour<=22) {
        bg = "Images/sunset9.png"
    }
    else if (hour>=22 && hour<=00) {
        bg = "Images/sunset10.png"
    }
    else if (hour>=00 && hour<=02) {
        bg = "Images/sunset11.png"
    }
    else if (hour>=02 && hour<=04) {
        bg = "Images/sunset12.png"
    }
    backgroundImg=loadImage(bg)
}