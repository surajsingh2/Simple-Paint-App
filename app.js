window.addEventListener("load", init , false);
function init () {
       canvas = document.getElementById('canvas'),
          ctx = canvas.getContext('2d'),
     //clearcanvas = document.getElementById("clearcanvas"),
      //ctx.canvas.height = document.getElement;
      //ctx.canvas.Width = window.innerWidth;
      wh = 0 ;
      ht = 0 ;
      lw = 0 ;
      rect = {};
      drag = false ;
     
   clearcanvas = document.getElementById("clcanvas");
   canvas.addEventListener('mousedown', mouseDown, false);
   canvas.addEventListener('mouseup', mouseUp, false);
   canvas.addEventListener('mousemove', mouseMove, false);
   clearcanvas.addEventListener("click", erasecanvas, false);
   console.log(canvas.height+" | "+canvas.width);
}
 
function erasecanvas() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   console.log("Erased");
}

function copy() {
  var imgData = ctx.getImageData(rect.startX, rect.startY, rect.w, rect.h);
  ctx.putImageData(imgData, rect.startX, rect.startY);
}
function mouseDown(event) {
   mX = event.clientX - ctx.canvas.offsetLeft,
   mY = event.clientY - ctx.canvas.offsetTop;
   rect.startX = mX;
   rect.startY = mY;
      drag = true;
      cNew = getNewColor();
      
      
 }
 
 function mouseMove(event) {
  if (!drag)  
    return;
  else {
    //console.log(mouseX+" "+mouseY);
    wh = (event.clientX - ctx.canvas.offsetLeft) - mX;
    ht = (event.clientY - ctx.canvas.offsetTop) - mY;
    rect.w = wh;
    rect.h = ht;
    lw = 5;
    
   // ctx.clearRect(0,0,canvas.width,canvas.height);
   //ctx.beginPath();
    //draw();
    
   // ctx.closePath();
    
    
  }
}

//function eraserect () {
  //ctx.clearRect(rect.startX, rect.startY, rect.w, rect.h);
//}
function changedrag() {
  drag = false;
}
 function mouseUp() {
   drag = false;
   wh = (event.clientX - ctx.canvas.offsetLeft) - mX;
    ht = (event.clientY - ctx.canvas.offsetTop) - mY;
    rect.w = wh;
    rect.h = ht;
   
    draw();
  
    //ctx.closePath();
    changedrag();
   // cloneCanvas();
   //ctx.fillStyle = getNewColor();
   //ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);
   
 }
 
 /*function cloneCanvas(canvas) {

    //create a new canvas
    var newCanvas = document.createElement('canvas');
    var context = newCanvas.getContext('2d');

    //set dimensions
    newCanvas.width = canvas.width;
    newCanvas.height = canvas.height;

    //apply the old canvas to the new one
    context.drawImage(canvas, 0, 0);

    //return the new canvas
    return newCanvas;
    console.log("new canvas");
}
 */
 function draw() {
   ctx.beginPath();
   ctx.lineWidth = lw;
   ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
   ctx.fillStyle = cNew;
   ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);
   ctx.closePath();
   
   
 }
  
 function getNewColor() {
   var symbols,color;
   symbols = "0123456789ABCDEF";

   color = "#";
   for(var i =0;i<6;i++){
      color +=symbols[Math.floor(Math.random() * 16)];
   }
   return color;
}
