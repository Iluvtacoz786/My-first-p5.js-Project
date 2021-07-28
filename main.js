function preload(){}
function setup(){
    canvas=createCanvas(450,400)
    video=createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video,0,0,450,400)
  stroke("pink")
  strokeWeight(7)
    line(30, 30, 30, 370);
    line(420, 30, 420, 370);
    line(30, 370, 420, 370);
    line(30, 30, 420, 30);

}