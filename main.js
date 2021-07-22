function preload(){
}
function setup(){
    canvas = createCanvas(680, 520);
    canvas.position(390, 300);
    video = createCapture(VIDEO);
    video.hide()
}
function draw(){
    image(video, 40, 40, 600, 440);

    fill(0, 128, 0);
    stroke(0, 128, 0);

    rect(40, 20, 600, 20);

    rect(640, 20, 20, 480);

    rect(40, 480, 600, 20);

    rect(20, 20, 20, 480);

    fill(255, 0, 102);
    stroke(255, 0, 102);

    translate(70, 70);

    for( i = 0; i < 10; i++){
        ellipse(0, 30, 20, 80);
        rotate(PI/5);
    }

    fill(255, 255, 255);
    stroke(255, 255, 255);

    circle(0, 0, 20);
}
function Snapshot() {
    save('selfie');
}