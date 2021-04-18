let canvas = document.createElement('div');
document.body.appendChild(canvas);
canvas.classList.add('canvas');
let height = 0;
let pixels;

document.getElementById('clear').addEventListener('click', clearCanvas);

getHeight();
drawCanvas();
createPixelArray();
addListeners();

function addListeners() {
  pixels.forEach(div => div.addEventListener('mouseover', () => {
    div.classList.add('filled');
  }));
}

function createPixelArray(){
  pixels = Array.from(document.querySelectorAll('.pixel'));
}

function getHeight(){
  do {
    height = prompt("How many squares per side? (0-100)");
  }while (isNaN(height) || height < 0 || height > 100);
}

function drawCanvas(){
  canvas.style.gridTemplateColumns = `repeat(${height}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${height}, 1fr)`;
  for (i = 0; i < height*height; i++) {
    let div = document.createElement('div');
    div.classList.add('pixel');

    canvas.appendChild(div);
  }
}

function removeDivs(){
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
}

function clearCanvas() {
  pixels.forEach(div => div.classList.remove('filled'));
  removeDivs();
  getHeight();
  drawCanvas();
  createPixelArray();
  addListeners();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
