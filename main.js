let rotationTable = Array.from(new Array(2512), (x, i) => (i * 0.25) + 0.25);
console.log(rotationTable);
let rotation = 0.01;
let i = 0;
let rotationIncrement = 1;
let mallets = [];

//make a stupid pseudo-gong
const gong = new Tone.Synth().toMaster()

// grab the roation speed input slider
const speed = document.querySelector("#rotationSpeed")

// handler for speed (need for speed)
speed.oninput = () => {
  rotationIncrement = parseInt(speed.value);
};

function Mallet() {
  this.r = 20;
  this.x = 240
  this.y = 0;
};


function init() {
  canvas = document.getElementById("testCanvas");
  context = canvas.getContext("2d");
  context.clearRect(0, 0, context.width, context.height);
  context.fillStyle = "lightblue";

  // drawPolys();
  gongLine();
  window.requestAnimationFrame(drawPolys);
};

function gongLine(){
  context.beginPath();
  context.moveTo(500, 0);
  context.lineTo(200, 0);
  context.lineWidth = 1;
  context.stroke();
}

function drawLine(point1, point2){
  context.beginPath();
  context.moveTo(point1.x, point1.y);
  context.lineTo(point2.x, point2.y);
  context.lineWidth = 1;
  context.stroke();
}

function drawPolys() {
  // reset transforms before clearing, I don't get this, I stole it from MDN and it works
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, canvas.width, canvas.height);
  // translate - this moves the canvas around to the center
  context.translate(300, 300);
  let mallet1 = new Mallet();
  mallets.push(mallet1)

  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  // adding a second mallet, need to breakout architecture soon

  // adding two new mallets for triangle, the above should be used for the single point
  let mallet2 = new Mallet();
  mallet2.x = -125;
  mallet2.y = 210;
  mallets.push(mallet2)

  let mallet3 = new Mallet();
  mallet3.x = -125;
  mallet3.y = -210;
  mallets.push(mallet3)
  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


  // draw gongLine BEFORE rotation but AFTER setTransform
  gongLine();
  context.rotate(rotation);
  // draw the lines after the rotation begins
  drawLine(mallet1, mallet2);
  drawLine(mallet2, mallet3);
  drawLine(mallet3, mallet1);

  // circle path, this will have to be re-worked for other shapes, obvs
  context.beginPath();
  context.arc(0, 0, 240, 0, Math.PI * 2, false);
  context.lineWidth = 1;
  context.stroke();



  // draw the mallet
  context.beginPath();
  context.arc(mallet1.x, mallet1.y, mallet1.r, 0, 2 * Math.PI, false);
  context.stroke();
  context.fill();


  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  // this is the post first sucess test point, after this a new repo breakout, with new architecture will probably be neccessary
  // create and draw more mallets
  context.beginPath();
  context.arc(mallet2.x, mallet2.y, mallet2.r, 0, 2 * Math.PI, false);
  context.stroke();
  context.fill();

  context.beginPath();
  context.arc(mallet3.x, mallet3.y, mallet3.r, 0, 2 * Math.PI, false);
  context.stroke();
  context.fill();

  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  // this will figure out how often to bang a gong
  // this needs to be modular for the number of gongs
  let gongTime = Math.floor(rotationTable.length / 3)
  // console.log(gongTime);

  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

  // increment rotation and pull new frame
  rotation = -((rotationTable[i] * 0.01).toFixed(3));

  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  // the below is all a hack to get the gong to right for three mallets and will have to be re-worked
  if ( i > gongTime - rotationIncrement && i < gongTime + rotationIncrement){
    gong.triggerAttackRelease('C4', '8n')
    console.log("gong gong big old bong")
    i += rotationIncrement;
  }
  else if ( i > 2 * gongTime - rotationIncrement && i < 2 * gongTime + rotationIncrement){
    gong.triggerAttackRelease('C4', '8n')
    console.log("gong gong big old bong")
    i += rotationIncrement;
  }

  else if (i < rotationTable.length - (rotationIncrement +1)){
    i += rotationIncrement;
  }
  else {
      i = 0;
      // trigger mallet strike
      gong.triggerAttackRelease('C4', '8n')
      console.log("gong gong big old bong")
    }


  window.requestAnimationFrame(drawPolys)

}
