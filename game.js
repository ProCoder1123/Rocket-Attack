// Suzdavame promenlivi
let myX, myY, rocketX=[], rocketY=[];
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    for(var ip=0; ip<10; ip=ip + 1) {
        if(randomInteger(10)<9){
  /*
    rocketX[0] = 0;
    rocketY[0] = 100;
    rocketX[1] = 0;
    rocketY[1] = randomInteger(600);
    rocketX[2] = 0;
    rocketY[2] = randomInteger(600);*/
    rocketY[ip] = ip*50;
    rocketX[ip]=0;
        }
    }
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myX = myX + (mouseX - myX) / 10;
    myY = myY + (mouseY - myY) / 10;

    for(var ip=0; ip<10; ip=ip + 1) {
        rocketX[ip] = rocketX[ip] + 2;
    }
    for(var ip=0; ip<10; ip=ip + 1) {
        // nothing here for now

    }
    
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);
    for(var ip=0; ip<10; ip=ip+1){
        drawImage(rocket[0], rocketX[ip], rocketY[ip], 35, 60);
    }
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    
}


