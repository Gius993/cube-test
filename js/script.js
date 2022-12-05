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



