const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
// let efeitoMinutos = document.getElementByClassName('efeito-m');

const relogio = setInterval(function time() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // if (h < 10){
    //     h = '0' + h;
    // }
    // if (m < 10){
    //     m = '0' + m;
    // }
    // if (s < 10){
    //     s = '0' + s;
    // }

    horas.textContent = h;
    minutos.textContent = m;
    segundos.textContent = s;

    // if (segundos)

});























