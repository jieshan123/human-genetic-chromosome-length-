let i=1;
let currIdx = 0;

function setup(){
  createCanvas(512, 512);
  // load in array of strings from text file
  words = loadStrings("words.txt");
  chromoData=loadStrings("Length.txt");
}
  
function draw(){
  background(255);
  textSize(32);
text(words[i], width/2, 450);
  i=i+1;
  frameRate(5);
fill(0, 102, 153);
  drawLine();
  
  // new position
  translate(width/4, width/4);
  
  // styling
  textAlign(CENTER);
  textSize(24);
  noFill();
  stroke(0);
  strokeWeight(1);
  
  
 // translate(0,0,256,256);
  // draw our outline
  rect(0, 0, 256, 256);
  fill(0);
  
  rect(115,35,10,21.18*chromoData[currIdx]);
  //draw rect left EXE
 //textAlign(CENTER);
  rect(130,35,10,21.18*chromoData[currIdx]);
  
  
  currIdx++;
  //visualizeWord(words[currIdx]);
}
function drawLine(){
  strokeWeight(2);
  line(150, 250, 360, 250);
  
  //text(words[currIdx], 128,  height - 188);
  

   //only animate every 10 frames, so it's not too fast
  if(frameCount % 10 == 0){
    currIdx++;
  }
  
  // reset the current index once it exceeds words in array
  if(currIdx >= words.length ){
    currIdx = 0;
  }
}


function visualizeWord(word){
  // number of letters
  // ascii value of current letters
 // let r = word.length * 16;
  fill(0);
  noStroke();


  strokeWeight(6);

  }