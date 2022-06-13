/*Script do botão-levar para página de contato*/

var btn_reserva = document.querySelector('#botao-reserva');
btn_reserva.addEventListener('click', fzrReserva);

function fzrReserva(){
    window.open('contato.html', target='_self')
}



/*Script pra rolar a página para cima na página inicial*/

var rolarPg = document.querySelector('#como-funciona');
rolarPg.addEventListener('click', rolarPagina);


function rolarPagina(){
    window.scrollTo(0, 650);
}

