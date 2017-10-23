let rotationTable = Array.from(new Array(2512), (x, i) => (i * 0.25) + 0.25);
console.log(rotationTable);
let rotation1 = 0.01;
let rotation2 = 0.01;
let rotation3 = 0.01;
let i = 0;
let j = 0;
let k = 0;
let rotationIncrement1 = 1;
let rotationIncrement2 = 1;
let rotationIncrement3 = 1;

//make a stupid pseudo-gong
const gong1 = new Tone.Synth().toMaster()
const gong2 = new Tone.Synth().toMaster()
const gong3 = new Tone.Synth().toMaster()

// grab the roation speed input slider
const speed1 = document.querySelector("#rotationSpeed1")
const speed2 = document.querySelector("#rotationSpeed2")
const speed3 = document.querySelector("#rotationSpeed3")

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

function gongLine(){
  context1.beginPath();
  context1.moveTo(500, 0);
  context1.lineTo(200, 0);
  context1.lineWidth = 1;
  context1.stroke();
}


function init() {
  canvas1 = document.getElementById("canvas1");
  context1 = canvas1.getContext("2d");
  context1.clearRect(0, 0, context1.width, context1.height);
  context1.fillStyle = "lightblue";
  gongLine();

  canvas2 = document.getElementById("canvas2");
  context2 = canvas1.getContext("2d");
  context2.clearRect(0, 0, context2.width, context2.height);
  context2.fillStyle = "red";

  canvas3 = document.getElementById("canvas3");
  context3 = canvas3.getContext("2d");
  context3.clearRect(0, 0, context3.width, context3.height);
  context3.fillStyle = "green";

  // drawPolys();
  window.requestAnimationFrame(drawState1);
};


function drawLine(point1, point2){
  context.beginPath();
  context.moveTo(point1.x, point1.y);
  context.lineTo(point2.x, point2.y);
  context.lineWidth = 1;
  context.stroke();
}

function drawState1() {
  // reset transforms before clearing, I don't get this, I stole it from MDN and it works
  context1.setTransform(1, 0, 0, 1, 0, 0);
  context1.clearRect(0, 0, canvas1.width, canvas1.height);
  // translate - this moves the canvas around to the center
  context1.translate(300, 300);
  // draw gongLine BEFORE rotation but AFTER setTransform
  gongLine();
  context1.rotate(rotation);
  // draw the shapes after the rotation begins
  drawTriangle(context1)
  let gongTime1 = Math.floor(rotationTable.length / 3)
  // increment rotation and pull new frame
  rotation1 = -((rotationTable[i] * 0.01).toFixed(3));

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
      gong1.triggerAttackRelease('C4', '8n')
      console.log("gong gong big old bong")
    }
  window.requestAnimationFrame(drawState1)
}
