let mallets = [];
function Mallet() {
  this.r = 20;
  this.x = 0;
  this.y = 0;
};


function addTriangle(context){
  let mallet1 = new Mallet();
  mallet1.x = 240;
  mallet1.y = 0;
  mallets.push(mallet1)

  let mallet2 = new Mallet();
  mallet2.x = -125;
  mallet2.y = 210;
  mallets.push(mallet2)

  let mallet3 = new Mallet();
  mallet3.x = -125;
  mallet3.y = -210;
  mallets.push(mallet3);

  // draw the mallets
  context.beginPath();
  context.arc(mallet1.x, mallet1.y, mallet1.r, 0, 2 * Math.PI, false);
  context.stroke();
  context.fill();

  context.beginPath();
  context.arc(mallet2.x, mallet2.y, mallet2.r, 0, 2 * Math.PI, false);
  context.stroke();
  context.fill();

  context.beginPath();
  context.arc(mallet3.x, mallet3.y, mallet3.r, 0, 2 * Math.PI, false);
  context.stroke();
  context.fill();

  drawLine(mallet1, mallet2);
  drawLine(mallet2, mallet3);
  drawLine(mallet3, mallet1);

}


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
