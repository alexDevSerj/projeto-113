camera = document.getElementById("camera");
      
Webcam.attach( camera );      

Webcam.set({
    width:210,
    height:300,
    image_format : 'png',
    png_quality:90
  });

function setup(){
    createCanvas(800,800)
}

function draw(){
    background(0,0,128)
    circle(200,200,50)
    fill(255,0,0)
    rect( 225,  190, 200, 20)
    circle(430,200,50)
    rect( 420,  225, 20, 200)
    circle(430,425,50)
    rect( 225,  415, 200, 20)
    circle(200,425,50)
    rect( 190,  225, 20, 200)
}
 