var narizx=0
var narizy=0

function setup(){
    canvas=createCanvas(600,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video,pronto)
    poseNet.on('pose',gotResult)
}
function but(){
save("foto.png")
}
function draw(){
image(video,0,0,600,300)

}
function pronto(){
console.log('pronto')

}
function gotResult(result){
if(result.length > 0){
narizx=result[0].pose.nose.narizx
narizy=result[0].pose.nose.narizy

console.log('narizx')
console.log('narizy')

}


}