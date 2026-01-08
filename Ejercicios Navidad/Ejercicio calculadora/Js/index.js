// Calculadora en la interfaz

let result = "0";
let num1 = "0";
let num2 = "0";
let operation;
const operators = ["+", "−", "÷", "×"];
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

// Teclas
function renderCalculatorKeys() {
  const keys = document.querySelector("#keys");
  keys.innerHTML = "";

  calculatorKeys.forEach(function (key, index) {
    const htmlAddKeys = `<button class="key">${key}</button>`;

    keys.innerHTML += htmlAddKeys;
  });
}

renderCalculatorKeys();

//Resultado
function renderCalculatorResult() {
  const resultInterface = document.querySelector("#result");
  resultInterface.innerHTML = "";

  const htmlAddResult = `<span>${result}</span>`;

  resultInterface.innerHTML = htmlAddResult;
}

renderCalculatorResult();

// Pulsar botones

const buttons = document.querySelectorAll(".key");

let buttonClicked;

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    buttonClicked = event.target.textContent;
    console.log(`Has pulsado ${buttonClicked}`);

    function clickButtons() {
        if (buttonClicked == "AC") {
            clickAC()
        }
        else if (buttonClicked=="DEL") {
            clickDEL()
        }
        else if (!isNaN(Number(buttonClicked))) {
            clickNumbers()
        }
        else if (!result.includes(".") && buttonClicked == ".") {
            clickPoint()
        }
        else if (!result.includes("%") && buttonClicked == "%") {
            clickPercentatge
        }
        else if (buttonClicked == "=" || !num2 == 0 && operation) {
            operate()
        }
    }

      

      else if (buttonClicked == "=") {
        
      }

      // Clicar operaciones
      else if (operators.includes(buttonClicked)) {
        if (num2 == "0") {
            operation = buttonClicked;
        }
        else {

        }
      }
    }

    operations();
    renderCalculatorResult();
  });
});

// voy pulsando numero entonces el resultado es el num1 y el num2 es 0
// cuando pulso una operacion se guarda en la operacion y el resultado sigue siendo el num1 y num2 es 0
//si la operacion NO esta vacia los numeros que vaya escribiendo se iran guardando en numero 2
// cuando pulse el igual el resultado sera num1 (operacion) num2 y num2 pasara a estar en 0 otra vez


//Funciones de los botones 

    // Reset
    function clickAC () {
    num1 = 0
    result = num1
    }

    // Borrar
    function clickDEL () {
    if (result == "0") {
        result = "0";
    } else if (result.length > 1) {
        result = result.slice(0, result.length - 1);
    } else {
        result = "0";
    }
    }

    // Clicar numeros
    function clickNumbers () {
    if (result == "0") {
        num1 = buttonClicked;
        result = num1;
    } else if (!operation) {
        num1 += buttonClicked;
        result = num1;
    } else if (num2 == "0") {
        num2 = buttonClicked;
        result = num2;
    } else {
        num2 += buttonClicked;
        result = num2;
    }
    }

    // Clicar "."
    function clickPoint () {
    if (num2 == 0) {
        num1 += ".";
        result = num1;
    } else {
        num2 += ".";
        result = num2;
    }
    }

    // Clicar "%"
    function clickPercentatge () {
            if (num2 == "0") {
            num1 += "%";
            result = num1;
            } else {
            num2 += "%";
            result = num2;
            }
        }

    // Operar
      function operate () {
        if (operation == "+") {
          num1 = Number(num1) + Number(num2);
          result = num1;
          num2 = 0;
          operation = "";
        } else if (operation == "−") {
          num1 = Number(num1) - Number(num2);
          result = num1;
          num2 = 0;
          operation = "";
        } else if (operation == "÷") {
          num1 = Number(num1) / Number(num2);
          result = num1;
          num2 = 0;
          operation = "";
        } else if (operation == "×") {
          num1 = Number(num1) * Number(num2);
          result = num1;
          num2 = 0;
          operation = "";
        }
      }