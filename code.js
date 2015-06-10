

document.onkeydown = hit;
document.ondragstart = grab; 
document.ondragend = drop;

var moveable_obj = document.getElementById("moveableImg");
var x_pos = 0;
var y_pos = 0;
var tall = 600;
var wide = 600;
var mX = 0;
var mY = 0;
var sX = 0;
var sY = 0;


function grab(event) { 
   mX = event.clientX;
   mY = event.clientY;
}

function drop(event) {
    sX = event.clientX;
    sY = event.clientY;
    var Xplus = sX - mX;
    var Yplus = sY - mY;
    x_pos = x_pos + Xplus;
    y_pos = y_pos + Yplus;

    updateImagePos();

}

function updateImagePos() {
    moveable_obj.style.left = x_pos;
    moveable_obj.style.top = y_pos;
}


function hit(event) {
    var x = event.keyCode;
    if(x == 39){
        x_pos = x_pos + 10;
    }

    if(x == 37){
        x_pos = x_pos - 10;
    }

    if(x == 38){
        y_pos = y_pos - 10;
    }

    if(x == 40){
        y_pos = y_pos + 10;
    }

    updateImagePos();
    
}



function shrink(){
	var I = document.getElementById("img");
    tall = tall - 100;
    I.style.height= tall;
    wide = wide - 100;
    I.style.width= wide;
}



function enlarge(){
	var I = document.getElementById("img");
    tall = tall + 100;
    I.style.height= tall;
	wide = wide + 100;
    I.style.width= wide;
}



