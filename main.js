var difference = 0;
var rightWristX = 0;
var leftWristX = 0;
function setup() {
 video = createCapture(VIDEO);
 video.size(550, 500);

 canvas = createCanvas(550, 550);
 canvas.position(560,150);

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log("poseNet is initialized");
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.nose.x;
difference = floor(leftWristX - rightWristX);

console.log("leftWristx =" + leftWristX +" rightWristX ="+ rightWristX +" difference = " + difference);
}
}
function draw(){
background('#6C91C2');
document.getElementById("font_size").innerHTML = "width and height of the text will be ="+difference+"px"
textSize(difference);
fill('#90093');
text('Isaac', difference, difference);
}