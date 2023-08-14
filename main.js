var img = "";

function setup(){
    canvas= createCanvas(600, 400);
    canvas.position(360, 190);

}

function preload(){
    img = loadImage("nj.jpg");
}

function draw(){
    image(img, 0, 0, 600, 400);

    fill("black");
    text ("Minji", 100, 175);
    noFill();
    stroke ("white");
    rect(20, 10, 150, 350);

    fill("pink");
    text ("Hanni", 175, 175);
    noFill();
    stroke ("pink");
    rect(170, 10, 100, 350 );

    fill("yellow");
    text ("Danielle", 300, 175);
    noFill();
    stroke ("yellow");
    rect(270, 10, 100 , 350);

    fill("purple");
    text ("Hyein", 400, 175);
    noFill();
    stroke ("purple");
    rect(370, 10, 100 , 350);

    fill("white");
    text ("Hanni", 480, 175);
    noFill();
    stroke ("white");
    rect(470, 10, 100 , 350);
}