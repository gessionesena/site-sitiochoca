/*Script pra rolar a página para cima*/

var btn = document.querySelector('#como-funciona');
btn.addEventListener('click', rolarPagina);


function rolarPagina(){
    window.scrollTo(0, 650);
}