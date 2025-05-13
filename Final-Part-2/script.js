var car = document.getElementById("car");
var sun = document.getElementById("sun");
var moon = document.getElementById('moon');
var sceneOverlay = document.getElementById('scene_overlay')


var carRight = 0;
var maxRight = 2000;

var sunTop =100;
var maxTop = 650;
var sunOpacity = 1;

var moonBottom =0;
var maxMoon = 400;
var moonOpacity = 0;

var sceneOverlayHeight = 0
var maxSceneOverlayHeight = 80
var sceneOverlayOpacity = 0;

var moveInterval;

function sceneColor(){
    if(sceneOverlayHeight >= maxSceneOverlayHeight){
        return;
    }
    sceneOverlayHeight += 8
    sceneOverlay.style.height = sceneOverlayHeight + "vh";

    sceneOverlayOpacity += 0.1
    sceneOverlay.style.opacity = sceneOverlayOpacity
}

function moonMove(){
    if(moonBottom >= maxMoon){
        return;
    }

    moonBottom += 30;
    moon.style.bottom = moonBottom + "px";

    moonOpacity += 0.06;
    moon.style.opacity = moonOpacity;
}


function sunMove(){
    if(sunTop >= maxTop){
        return; 
    }

    sunTop += 30;
    sun.style.top = sunTop + "px"

    sunOpacity -= 0.06
    sun.style.opacity = sunOpacity;
}

function move(){
   if(carRight >= maxRight){
        return;
   }
   carRight += 100;
   car.style.right = carRight + "px";

}
function start(){
    carRight = 0;
    car.style.right = carRight + "px";

    sunTop = 100;
    sun.style.top = sunTop + "px";

    sunOpacity = 1;
    sun.style.opacity = sunOpacity;

    moonBottom = 0;
    moon.style.bottom = moonBottom + "px"

    moonOpacity = 0;
    moon.style.opacity = moonOpacity;

    sceneOverlayHeight =0
    sceneOverlay.style.height = sceneOverlayHeight + "vh"

    sceneOverlayOpacity = 0;
    sceneOverlay.style.opacity = sceneOverlayOpacity;


    setInterval(move, 400)
    setInterval(sunMove, 500)
    setInterval(moonMove, 600)
    setInterval(sceneColor, 600)
}

