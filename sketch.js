//add instructions page
let length = 40;
const PANEL_HEIGHT = 300;
const PANEL_WIDTH = 200;
let state;
const STATE_GAME_OVER_PLAY_AGAIN = 1;
let animationFrame;
let score10;

let x,y;
let r,g,b;
let score = 0;
let images=[];
var boxes=[];
let font;
let lives = ['♥','♥','♥','♥','♥','♥','♥','♥','♥','♥'];
function preload(){
    font = loadFont('fonts/press-start-2p/PressStart2P.ttf');
    docker = loadImage('docker.png');
    images[0] = loadImage('img1.jpg');
    images[1] = loadImage('img2.jpg');
    images[2] = loadImage('img3.jpg');
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    textFont(font);
    x = random(PANEL_WIDTH);
    y = PANEL_HEIGHT - random(PANEL_HEIGHT-100);
    r = random(255);
    g = random(100,255);
    b = random(100,255); 
    // container = new Container(3);
}
function draw(){
    background(15,15,15);
    fill(r,g,b);
    noStroke();
    rect(x,y,length*2,length*2);
    fill(255);
    text("Score : " +score, 20,30);
    textSize(10);
    text("Lives : " +lives, 20, 60);
    image(docker, mouseX,mouseY, 40,40);  

    // if(score10 == 1){
    //     console.log('10');
    //     container.show();
    //     container.update();
    // }

    if (state === STATE_GAME_OVER_PLAY_AGAIN){
        background(0);
        fill(255);
        textSize(15);
        text('GAME OVER', windowWidth/2 - 80,windowHeight/2 - 150);
        text('SCORE: ' + score, windowWidth/2 - 80,windowHeight/2 - 110);

    }
    if (animationFrame == 0) {
        var i = float(random(0,images.length));
        text('PLAY AGAIN', windowWidth/2 - 80,windowHeight/2-60);
        image(images[0],windowWidth/2 - 80,windowHeight/2-50,150,150);
    }
}

function newContainer(){
    x = random(PANEL_WIDTH);
    y = PANEL_HEIGHT-  random(PANEL_HEIGHT-100);
    r = random(100,255);
    g = random(100,255);
    b = random(100,255);
}
function mousePressed(){
    let d = dist(mouseX,mouseY,x,y);
    if(d<2*length){
        score++;
        if(score == 10){
            score10 = 1;
            length /= 2;
        }else{
            score10 = 0; 
        }
        if(score == 20){
            setInterval(newContainer,800);
        }
    }
    if(d>2*length){
        lives.pop();
        if(lives.length<=0){
            //add aww snap window
            // location.reload();
            state = STATE_GAME_OVER_PLAY_AGAIN;
            animationFrame = 0;
        }
    }
}
setInterval(newContainer,1000);