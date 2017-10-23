function drawTriangle(context){
  let triangleMallet1 = new Mallet();
  triangleMallet1.x = 240;
  triangleMallet1.y = 0;


  let triangleMallet2 = new Mallet();
  triangleMallet2.x = -125;
  triangleMallet2.y = 210;


  let triangleMallet3 = new Mallet();
  triangleMallet3.x = -125;
  triangleMallet3.y = -210;


  // draw the mallets
  context.beginPath();
  context.arc(triangleMallet1.x, triangleMallet1.y, triangleMallet1.r, 0, 2 * Math.PI, false);
  context.stroke();
  context.fill();

  context.beginPath();
  context.arc(triangleMallet2.x, triangleMallet2.y, triangleMallet2.r, 0, 2 * Math.PI, false);
  context.stroke();
  context.fill();

  context.beginPath();
  context.arc(triangleMallet3.x, triangleMallet3.y, triangleMallet3.r, 0, 2 * Math.PI, false);
  context.stroke();
  context.fill();

  singleLine(context, triangleMallet1, triangleMallet2);
  singleLine(context, triangleMallet2, triangleMallet3);
  singleLine(context, triangleMallet3, triangleMallet1);

}
