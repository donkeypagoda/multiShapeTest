function Mallet() {
  this.r = 20;
  this.x = 0;
  this.y = 0;
};


function drawCircle(context){
  let mallet1 = new Mallet();
  mallet1.x = 240;
  mallet1.y = 0;
  mallets.push(mallet1)

  context.beginPath();
  context.arc(0, 0, 240, 0, Math.PI * 2, false);
  context.lineWidth = 1;
  context.stroke();
  // mallet
  context.beginPath();
  context.arc(mallet1.x, mallet1.y, mallet1.r, 0, 2 * Math.PI, false);
  context.stroke();
  context.fill();
}
