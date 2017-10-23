let mallets = [];
function Mallet() {
  this.r = 20;
  this.x = 0;
  this.y = 0;
};

function drawTriangle(context){
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
