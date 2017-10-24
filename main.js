let rotationTable = Array.from(new Array(2512), (x, i) => (i * 0.25) + 0.25);
// console.log(rotationTable);
let rotation1 = 0.01;
let rotation2 = 0.01;
let rotation3 = 0.01;
let i = 0;
let j = 0;
let k = 0;
let rotationIncrement1 = 1;
let rotationIncrement2 = 15;
let rotationIncrement3 = 7;

//make a stupid pseudo-gong
const gong1 = new Tone.Synth().toMaster()
const gong2 = new Tone.Synth().toMaster()
const gong3 = new Tone.Synth().toMaster()

// grab the roation speed input slider
const speed1 = document.querySelector("#rotationSpeed1")
const speed2 = document.querySelector("#rotationSpeed2")
const speed3 = document.querySelector("#rotationSpeed3")

function Mallet() {
  this.r = 20;
  this.x = 0;
  this.y = 0;
};

// handler for speed (need for speed)
speed1.oninput = () => {
  rotationIncrement1 = parseInt(speed1.value);
};
speed2.oninput = () => {
  rotationIncrement2 = parseInt(speed2.value);
};
speed3.oninput = () => {
  rotationIncrement3 = parseInt(speed3.value);
};

function gongLine(context){
  context.beginPath();
  context.moveTo(500, 0);
  context.lineTo(200, 0);
  context.lineWidth = 2;
  context.stroke();
}

let canvas1 = document.getElementById("canvas1");
let context1 = canvas1.getContext("2d");
context1.fillStyle = "yellow";

let canvas2 = document.getElementById("canvas2");
let context2 = canvas2.getContext("2d");
context2.fillStyle = "red";

let canvas3 = document.getElementById("canvas3");
let context3 = canvas3.getContext("2d");
context3.fillStyle = "green";


function init() {
  context1.setTransform(1, 0, 0, 1, 0, 0);
  context1.clearRect(0, 0, context1.width, context1.height);
  context1.translate(350, 350);
  gongLine(context1);

  context2.setTransform(1, 0, 0, 1, 0, 0);
  context2.clearRect(0, 0, context2.width, context2.height);
  context2.translate(350, 350);

  context3.setTransform(1, 0, 0, 1, 0, 0);
  context3.clearRect(0, 0, context3.width, context3.height);
  context3.translate(350, 350);

  // drawState();
  window.requestAnimationFrame(drawState);
};


function drawState() {
  // reset transforms before clearing, I don't get this, I stole it from MDN and it works
  context1.setTransform(1, 0, 0, 1, 0, 0);
  context1.clearRect(0, 0, canvas1.width, canvas1.height);
  // translate - this moves the canvas around to the center
  context1.translate(350, 350);
  // draw gongLine BEFORE rotation but AFTER setTransform
  gongLine(context1);

  context2.setTransform(1, 0, 0, 1, 0, 0);
  context2.clearRect(0, 0, canvas2.width, canvas2.height);
  context2.translate(350, 350);

  context3.setTransform(1, 0, 0, 1, 0, 0);
  context3.clearRect(0, 0, canvas3.width, canvas3.height);
  context3.translate(350, 350);

  context1.rotate(rotation1);
  // draw the shapes after the rotation begins
  drawTriangle(context1)


  let gongTime1 = Math.floor(rotationTable.length / 3)
  // increment rotation and pull new frame
  rotation1 = -((rotationTable[i] * 0.01).toFixed(3));

  // the below is all a hack to get the gong to right for three mallets and will have to be re-worked
  if ( i > gongTime1 - rotationIncrement1 && i < gongTime1 + rotationIncrement1){
    gong1.triggerAttackRelease('E3', '8n')
    console.log("triangle")
    i += rotationIncrement1;
  }
  else if ( i > 2 * gongTime1 - rotationIncrement1 && i < 2 * gongTime1 + rotationIncrement1){
    gong1.triggerAttackRelease('C3', '8n')
    console.log("triangle");
    i += rotationIncrement1;
  }

  else if (i < rotationTable.length - (rotationIncrement1 +1)){
    i += rotationIncrement1;
  }
  else {
      i = 0;
      // trigger mallet strike
      gong1.triggerAttackRelease('G2', '8n');
      console.log("triangle");
    }

  context2.rotate(rotation2);
  drawCircle(context2);

  rotation2 = -((rotationTable[j] * 0.01).toFixed(3));
  if (j < rotationTable.length - 1){
    j += rotationIncrement2
  }
  else {
    j = 0;
    gong2.triggerAttackRelease('C2', '4n')
    console.log("circle")
  }

  context3.rotate(rotation3);
  drawLine(context3);

  rotation3 = -((rotationTable[k] * 0.01).toFixed(3));
  let gongTime3 = Math.floor(rotationTable.length / 2)
  if ( k > gongTime3 - rotationIncrement3 && k < gongTime3 + rotationIncrement3){
    gong3.triggerAttackRelease('C5', '8n')
    console.log("line")
    k += rotationIncrement3;
  }
  else if (k < rotationTable.length - (rotationIncrement3 + 1)){
    k += rotationIncrement3;
  }
  else {
      k = 0;
      gong3.triggerAttackRelease('E3', '8n')
      console.log("line")
    }

  window.requestAnimationFrame(drawState);
}
