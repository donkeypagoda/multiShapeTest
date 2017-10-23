function singleLine(context, point1, point2){
  context.beginPath();
  context.moveTo(point1.x, point1.y);
  context.lineTo(point2.x, point2.y);
  context.lineWidth = 1;
  context.stroke();
}
