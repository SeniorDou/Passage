
let idInterval1, idInterval2;

function classic() {
  idInterval1 = setInterval(green, 4000);
  idInterval2 = setInterval(red, 6000);
}

function appel() {
  clearInterval(idInterval1);
  clearInterval(idInterval2);
  setTimeout(green, 1000);
  setTimeout(red, 5000);
  setTimeout(classic, 6000);
}

function green(){
  let element = document.getElementById("red");
  element.classList.replace("red","green");
}


function red(){
  let element = document.getElementById("red");
  element.classList.replace("green","red");
}



