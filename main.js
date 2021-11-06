canvas=document.getElementById("myCanvas")
ctx=canvas.getContext('2d')
nasamarsimage=["https://upload.wikimedia.org/wikipedia/commons/7/7e/Phoenix_mission_patterned_ground%2C_Mars.jpg",
"mars.jpg",
"https://previews.123rf.com/images/docer2000/docer20001510/docer2000151000024/47190396-ground-of-mars-crater-texture-surface-uneven-and-grained.jpg",
"http://planetary-science.org/wp-content/uploads/2014/12/Ladon-basin-in-full-color.jpg"]
var randomnumber=Math.floor(Math.random()*4)
console.log(randomnumber)
roverwidth=100
roverheight=100
bgimage=nasamarsimage[randomnumber]
roverimage="rover.png"
roverx=10
rovery=10
function add(){
background_imgTag = new Image();    
background_imgTag.onload=uploadbackground
background_imgTag.src=bgimage
rover_imgTag = new Image();    
rover_imgTag.onload=uploadrover
rover_imgTag.src=roverimage
}
function uploadbackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
ctx.drawImage(rover_imgTag, roverx, rovery, roverwidth, roverheight);
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
keyPressed=e.keyCode;console.log(keyPressed)
if (keyPressed=='38') {
    up()
    console.log("up")
}
if (keyPressed=='40') {
    down()
    console.log("down")
}
if (keyPressed=='37') {
    left()
    console.log("left")
}
if (keyPressed=='39') {
    right()
    console.log("right")
}
}
function up(){
    if (rovery>0) {
        rovery=rovery-10
        uploadbackground()
        uploadrover()
    }
}
function down(){
    if (rovery<600) {
        rovery=rovery+10
        uploadbackground()
        uploadrover()
    }
}
function left(){
    if (roverx>0) {
        roverx=roverx-10
        uploadbackground()
        uploadrover()
    }
}
function right(){
    if (roverx<800) {
        roverx=roverx+10
        uploadbackground()
        uploadrover()
    }
}