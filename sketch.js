// let body = document.getElementById('body');


let img1 = document.getElementById('img1');
let btn1 = document.getElementById('btn1');



let img2 = document.getElementById('img2');
let btn2 = document.getElementById('btn2');


let backcoco = ['BackCoco0.svg',
'BackCoco1.svg',
'BackCoco2.svg',
'BackCoco3.svg',
'BackCoco4.svg',
'BackCoco5.svg',
'BackCoco6.svg',
'BackCoco7.svg',
'BackCoco8.svg',
'BackCoco9.svg',
'BackCoco10.svg',
'BackCoco11.svg',
'BackCoco12.svg',
'BackCoco13.svg',
'BackCoco14.svg',
'BackCoco15.svg',];
let numBackcoco = 16;
let c = ''


let interval;
function preload () {
 
  loadImage("Assets/BackCocoSvg/BackCoco1.svg")
  for (let i = 1; i < numBackcoco; i++){
    backcoco[i]= loadImage("Assets/BackCocoSvg/BackCoco"+ i + ".svg");
  }

  
}
function drawImage(i){

  
   background(0,43,16);
 imageMode(CENTER);
  image(backcoco[i],300/2, 640/2, 300, 635);
 

}
function setup(){
  
  c = createCanvas(300, 640);
  c.parent("img1");

   background(0,43,16);
  
  btn1.addEventListener('touchstart',() => {
    interval = setInterval(function() {
      drawImage(Math.ceil(random(numBackcoco)))
    }, 100);
  })

  btn1.addEventListener('mousedown',() => {
    interval = setInterval(function() {
      drawImage(Math.ceil(random(numBackcoco)))
    }, 100);
  })
  
  btn1.addEventListener('touchend', function() {
      if(interval) {
        clearInterval(interval);
        interval = null;
        }
  })

  btn1.addEventListener('mouseup', function() {
    if(interval) {
      clearInterval(interval);
      interval = null;
      }
})


}

function sketch_img2(p) {

 


 let frontcoco = ['FrontCoco0.svg',
'FrontCoco1.svg',
'FrontCoco2.svg',
'FrontCoco3.svg',
'FrontCoco4.svg',
'FrontCoco5.svg',
'FrontCoco6.svg',
'FrontCoco7.svg',
'FrontCoco8.svg',
'FrontCoco9.svg',
'FrontCoco10.svg',
'FrontCoco11.svg',
'FrontCoco12.svg',
'FrontCoco13.svg',
'FrontCoco14.svg',
'FrontCoco15.svg',];
let numFrontcoco = 13;
let c2 = ''


let interval2;

p.preload = function(){

  p.loadImage("Assets/FrontCocoSvg/FrontCoco1.svg")
  for (let i = 1; i < numFrontcoco; i++){
    frontcoco[i]= p.loadImage("Assets/FrontCocoSvg/FrontCoco"+ i + ".svg");
  }
}

p.drawImage2 =function(i){


  p.background(0,43,16);
  p.imageMode(CENTER);
   p.image(frontcoco[i],300/2, 645/2, 297.54, 622.124);

}

  p.setup = function () {
    c2 = p.createCanvas(300, 640);
  c2.parent("img2");

   p.background(0,43,16);
  
  btn2.addEventListener('touchstart',() => {
    interval2 = setInterval(function() {
      p.drawImage2(Math.ceil(p.random(numFrontcoco)))
    }, 100);
  })

  btn2.addEventListener('mousedown',() => {
    interval2 = setInterval(function() {
      p.drawImage2(Math.ceil(p.random(numFrontcoco)))
    }, 100);
  })
  
  
  btn2.addEventListener('touchend', function() {
      if(interval2) {
        clearInterval(interval2);
        interval2 = null;
        }
  })

  btn2.addEventListener('mouseup', function() {
    if(interval2) {
      clearInterval(interval2);
      interval2 = null;
      }
})
  }
  
}

new p5(sketch_img2, 'img2')

