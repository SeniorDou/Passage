
let idInterval1, idInterval2 , idIntervalTri1, idIntervalTri2, idIntervalTri3;
let quequunappui = false;


function classic() {
  idInterval1 = setInterval(red, 6000);
  idInterval2 = setInterval(green, 10000);
}

function classic2() {
  idIntervalTri1 = setInterval(greentri, 6000);
  idIntervalTri2 = setInterval(orangetri, 9000);
  idIntervalTri3 = setInterval(redtri, 10000);
}

function appel() {
  if (document.getElementById("tricolor").className === "green" && !quequunappui){
    quequunappui = true;
    clearInterval(idInterval1);
    clearInterval(idInterval2);
    setTimeout(green, 1000);
    setTimeout(red, 5000);
    setTimeout(classic, 6000);
    quequunappui = false;
    }
}

function appel2() {
  if (document.getElementById("tricolor").className === "green" && !quequunappui){
    quequunappui = true;
    clearInterval(idIntervalTri1);
    clearInterval(idIntervalTri2);
    clearInterval(idIntervalTri3);
    setTimeout(orangetri, 0001);
    setTimeout(redtri,1000);
    setTimeout(greentri, 5000);
    setTimeout(classic2, 6000);
    quequunappui = false;
    }
}

function green(){
  let element = document.getElementById("red");
  element.classList.replace("red","green");
}

function red(){
  let element = document.getElementById("red");
  element.classList.replace("green","red");
}

function greentri(){
  let element = document.getElementById("tricolor");
  element.classList.replace("red","green");
}

function orangetri(){
  let element = document.getElementById("tricolor");
  element.classList.replace("green","orange");
}

function redtri(){
  let element = document.getElementById("tricolor");
  element.classList.replace("orange","red");
}

/*function changerCouleur(balise, source, cible){
  let element = document.getElementById(balise);
  element.classList.replace(source,cible);
}*/
