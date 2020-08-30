var dog, happyDog, database, foodS, foodStock;

function preload(){
  dog = loadImage("images/doglmg.png");
  happyDog = loadImage("images/doglmg1.png");
}

function setup() {
	createCanvas(500,500);
  database=firebase.database();
  foodStock=database.ref("food");
  foodStock.on("value",readStock);
}


function draw() {  
 background(46, 139, 87);
  drawSprites();
  

}

function keyPressed(){
  if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
  }
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
   x=x-1;
  }

  database.ref('/').update({
    food:x
  })
}