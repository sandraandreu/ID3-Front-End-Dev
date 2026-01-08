// Calculadora en la interfaz

const calculatorKeys = [
  "AC",
  "DEL",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "−",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

let result = 0;

function renderCalculator() {
  // Teclas
  const keys = document.querySelector("#keys");
  keys.innerHTML = "";

  calculatorKeys.forEach(function (key, index) {
    const htmlAddKeys = `<button class="key">${key}</button>`;

    keys.innerHTML += htmlAddKeys;
  });

  //Resultado
  const resultInterface = document.querySelector("#result");
  resultInterface.innerHTML = "";

  const htmlAddResult = `<span>${result}</span>`;

  resultInterface.innerHTML = htmlAddResult;
}

renderCalculator();
