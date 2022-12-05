//Costants
const COLOR_BG = 'black';
const COLOR_CUBE = 'yellow';
const SPED_X = 0.05;
const SPED_Y = 0.15;
const SPED_Z = 0.10;

const POINT3D = function(x, y, z) {this.x = x; this.y = y; this.z = z;};

//set canvas and context
let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
let ctx = canvas.getContext('2d');

//dimension
let h = document.documentElement.clientHeight;
let w = document.documentElement.clientWidth;
canvas.height = h;
canvas.width = w;

//colours and lines
ctx.fillStyle = COLOR_BG;
ctx.strokeStyle = COLOR_CUBE;
ctx.lineWidth = w / 100;
ctx.lineCap = 'round';

//cube parameters
let cx = w / 2;
let cy = h / 2;
let cz = 0;
let size = h / 4;

//set up the animation loop
let timeDelta, timeLast = 0;
requestAnimationFrame(loop);

//function

function loop(timeNow){
	timeDelta = timeNow - timeLast;
	timeLast = timeNow;

	//background
	ctx.fillRect(0, 0, w, h);

	//call the next frame
	requestAnimationFrame(loop);
}



