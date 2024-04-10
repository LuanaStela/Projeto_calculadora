const botaoNumero = document.querySelectorAll('.num');
const botaoOperacao = document.querySelectorAll('.op');
const botaoRes = document.querySelector('.res');
const botaoApagarTudo = document.querySelectorAll('.apTudo');
const display = document.querySelector('.display');
const botaoIgual = document.getElementById('bigual');

let sinal = false;
let decimal = false;

botaoNumero.forEach((element) => {
  element.addEventListener('click', (event) => {
    sinal = false;

    if (event.target.innerHTML == ',') {
      if (!decimal) {
        decimal = true;
        if (display.innerHTML == '0') {
          display.innerHTML = '0,';
        } else {
          display.innerHTML += event.target.innerHTML;
        }
      }
    } else {
      if (display.innerHTML == '0') {
        display.innerHTML = '';
      }
      display.innerHTML += event.target.innerHTML;
    }
  });
});

botaoOperacao.forEach((element) => {
  element.addEventListener('click', (event) => {
    if (!sinal) {
      sinal = true;
      if (display.innerHTML == '0') {
        display.innerHTML = '';
      }
      if (event.target.innerHTML == 'x') {
        display.innerHTML += '*';
      } else {
        display.innerHTML += event.target.innerHTML;
      }
    }
  });
});
botaoApagarTudo.forEach((element) => {
  element.addEventListener('click', (event) => {
    sinal = false;
    decimal = false;
    display.innerHTML = '0';
  });
});


botaoIgual.addEventListener('click', (event) => {
    sinal = false;
    decimal = false;
    const res = eval(display.innerHTML)
    display.innerHTML = res;
  });