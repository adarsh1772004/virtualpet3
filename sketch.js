var dogImg1;
var dogImg2;
var dog, database;
var foodS
var milkImg
var gardenImg
var washroomImg
var foodstockImg
var livingroomImg
var feedbutton
var refilbutton
function preload()
{
 dogImg1=loadImage("images/dogImg.png")
 dogImg2=loadImage("images/dogImg1.png")
 gardenImg=loadImage("images/Garden.png")
 washroomImg=loadImage("images/Wash Room.png")
 livingroomImg=loadImage("images/Living Room.png")
 foodstockImg=loadImage("images/Food Stock.png")
 
}

function setup() {
  createCanvas(600, 600);
  database=firebase.database()
  
 
  
  var foodCount=database.ref("Food/count")
  foodCount.on("value",read,showEror)
feedbutton=createButton("feed")
feedbutton.position(350,300)
refilbutton=createButton("refil")
refilbutton.position(400,300)
  
  
 
}


function draw() {
  background(foodstockImg)
  if(foodS!=undefined)
 text ("remainingFood : "+foodS,250, 30)
 
  feedbutton.mousePressed(function(){
    updateFood(1)
  })
  
  refilbutton.mousePressed(function(){
    updateFood(-50)
  })
 

 

}
function read(data){
foodS=data.val()
console.log(foodS)
}
function showEror(){
  console.log("cannot read the data")
}
function updateFood(x){
 
 database.ref("Food").set({
    "count":foodS-x
  })
}
function display(){
  var i
  var x=20
  for(i=1;i<=foodS;i=i+1)
  {
    image (milkImg,x,50,10,10)
    x=x+10
  }
}
