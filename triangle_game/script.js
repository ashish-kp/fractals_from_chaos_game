can = document.getElementById("canvas");
can.width = 4000;
can.height = 4000;
ctx = can.getContext('2d');

var point1 = [2000, 200]; //2000, 400
  var point2 = [3800, 3800]; //400, 3600
  var point3 = [200, 3800]; //3600, 3600
  var point4 = [3800, 200];
  var point5 = [2, 3];

var points = [point1, point2, point3]; 
  
function draw() {
  
  ctx.strokeStyle = "red";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(point1[0], point1[1], 10, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(point2[0], point2[1], 10, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(point3[0], point3[1], 10, 0, 2 * Math.PI);
  ctx.stroke();
  var iterations = 500000;
  
  var start_point = [200, 200];
  ctx.beginPath();
  ctx.arc(start_point[0], start_point[1], 1, 0, 2 * Math.PI);
  ctx.stroke();
  while (iterations > 0) {   
    var x1 = start_point[0];
    var y1 = start_point[1];
    //var goto = choose_rand3();
    var goto = points[Math.floor(Math.random() * points.length)];
    var x2 = goto[0];
    var y2 = goto[1];
    var moveto1 = Math.abs(x1 + x2) * 0.5;
    var moveto2 = Math.abs(y1 + y2) * 0.5;
    ctx.beginPath();
    ctx.arc(moveto1, moveto2, 1, 0, Math.PI * 2);
    ctx.stroke();
    start_point = [moveto1, moveto2];
    iterations--;
  }
}

function choose_rand3() {
  choices = [point1, point2, point3];
  value = Math.random();
  if (value < (1 / 3)) 
    res = choices[0];
  else if (value < (2 / 3) && value < (2 / 3))
    res = choices[1];
  else
    res = choices[2];
  return res;
}

function pent() {
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(point1[0], point1[1], 10, 100, 100);
  ctx.stroke();
}
draw();