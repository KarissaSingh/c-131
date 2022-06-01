img="";
status="";

function preload(){
    img = loadImage('dog_cat.jpg');
    }

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    Od=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object" ;
}

function draw() {
    image(img,0,0,640,420);
    fill("#64adf5");
    text("Dog",45,75);
    noFill();
    stroke("#64adf5");
    rect(30,60,450,350);

    fill("#ffde0a");
    text("Cat",320,120);
    noFill();
    stroke("#ffde0a");
    rect(300,70,260,350);
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    Od.detect(img.gotResult);
}

function gotResult(error,result) {

    if (error){
        console.error(error);
    }

    else {
        console.log(result);
    }
}
