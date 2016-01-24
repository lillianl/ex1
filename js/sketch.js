console.log("hello reading from js"); 

var img;
var pencil; 
var book; 
var me; 
var idea; 

function preload() {
img = loadImage("./images/bannerfull.png");
pencil =  loadImage("./images/pencil.png"); 
book = loadImage ("./images/book.png"); 
me = loadImage ("./images/me.png"); 
idea = loadImage ("./images/idea.png"); 
}

function setup(){
	var myCanvas=createCanvas(800,250);
	//link to id mySketch from header tag
    myCanvas.parent('mySketch');
}

	function draw(){
 image(img, 0, 0);
   if (mouseX < 200 && mouseY < 250) {
    image(pencil,0,0); 
  } else if (mouseX < 400 && mouseY < 250) {
    image(book,0,0); 
  } else if (mouseX < 600 && mouseY < 250) {
    image(me,0,0); 
  } else if (mouseX < 800 && mouseY < 250) {    
    image(idea,0,0); 
  }
}

