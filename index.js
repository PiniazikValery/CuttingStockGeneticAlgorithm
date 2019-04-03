const express = require('express');

const Rect = require('./genetic_algorithm/rect');

const Stock = require('./genetic_algorithm/stock');

const app = express();

app.get('/', (req, res) => {
  const stock = new Stock(
    [
      new Rect(300, 300),
      new Rect(600, 20),
      new Rect(700, 10),
      new Rect(400, 25),
    ],
    1000,
    1000,
  );
  stock.randomlySetAllBoxes();
  res.send(`<html>
  <body>
  
  <canvas id="myCanvas" width="1100" height="1100"
  style="border:1px solid #c3c3c3;">
  Your browser does not support the canvas element.
  </canvas>
  
  <script>
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(${stock.boxes[0].x},${stock.boxes[0].y},300,300);
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#37ca35";
  ctx.fillRect(${stock.boxes[1].x},${stock.boxes[1].y},600,20);
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#353aca";
  ctx.fillRect(${stock.boxes[2].x},${stock.boxes[2].y},700,10);
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#baca35";
  ctx.fillRect(${stock.boxes[3].x},${stock.boxes[3].y},400,25);
  </script>
  
  </body>
  </html>`);
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});
