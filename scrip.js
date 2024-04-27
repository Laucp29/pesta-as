function handlerEvents(){

    let botonUno = document.getElementById('boton1');
    let botonDos = document.getElementById('boton2');
    let botonTres = document.getElementById('boton3');


    botonUno.addEventListener('click', handlerClicks);
    botonDos.addEventListener('click', handlerClicks);
    botonTres.addEventListener('click', handlerClicks);
}
function handlerClicks(e){
    let boton = e.target;
    let divs =  document.getElementsByClassName('contenedor__texto');

    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = 'none';
    }
    let todosBotones = document.getElementsByClassName('boton__link');
    let numero;

    for (let i = 0; i < todosBotones.length; i++) {
       if (boton == todosBotones[i]){
        numero = i ;
    }
    }

    divs[numero].style.display = 'block';
}


window.onload = handlerEvents;