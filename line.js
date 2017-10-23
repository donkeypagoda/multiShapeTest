function drawLine(context){
  let lineMallet1 = new Mallet();
  lineMallet1.x = 240;
  lineMallet1.y = 0;

  let lineMallet2 = new Mallet();
  lineMallet2.x = -240;
  lineMallet2.y = 0;


  // mallet
  context.beginPath();
  context.arc(lineMallet1.x, lineMallet1.y, lineMallet1.r, 0, 2 * Math.PI, false);
  context.stroke();
  context.fill();

  context.beginPath();
  context.arc(lineMallet2.x, lineMallet2.y, lineMallet2.r, 0, 2 * Math.PI, false);
  context.stroke();
  context.fill();

  singleLine(context, lineMallet1, lineMallet2);
}
