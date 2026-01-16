// Calculadora en la interfaz

let result = "0";
let num1 = "0";
let num2 = "0";
let operation;
const operators = ["+", "−", "÷", "×", "%"];

//Pantalla de resultado
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
        clickAC();
      } else if (buttonClicked == "DEL") {
        clickDEL();
      } else if (Number(buttonClicked)) {
        clickNumbers();
      } else if (!result.includes(".") && buttonClicked == ".") {
        clickPoint();
      } else if (buttonClicked == "=") {
        operate();
      } else if (operators.includes(buttonClicked)) {
        clickOperators();
      }
    }

    clickButtons();
    renderCalculatorResult();
  });
});

//Funciones de los botones

// Reset
function clickAC() {
  num1 = "0";
  result = num1;
}

// Borrar
function clickDEL() {
  if (result == "0") {
    result = "0";
  } else if (result.length > 1) {
    result = result.slice(0, result.length - 1);
  } else {
    result = "0";
  }
}

// Clicar numeros
function clickNumbers() {
  if (result == "0") {
    num1 = buttonClicked;
    result = num1;
  } else if (!operation) {
    num1 += buttonClicked;
    result = num1;
  } else if (num2 == "0") {
    num2 = buttonClicked;
    result = num1 + operation + num2;
  } else {
    num2 += buttonClicked;
    result = num1 + operation + num2;
  }
}

// Clicar "."
function clickPoint() {
  if (num2 == "0") {
    num1 += ".";
    result = num1;
  } else {
    num2 += ".";
    result = num2;
  }
}

// Operar
function finalizeOperation() {
  result = num1;
  num2 = "0";
  operation = "";
}

function operate() {
  if (operation == "+") {
    num1 = String(Number(num1) + Number(num2));
    finalizeOperation();
  } else if (operation == "−") {
    num1 = String(Number(num1) - Number(num2));
    finalizeOperation();
  } else if (operation == "%") {
    num1 = String(Number(num1) % Number(num2));
    finalizeOperation();
  } else if (operation == "÷") {
    if (num2 === "0") {
      result = "Error";
      return;
    } else {
      num1 = String(Number(num1) / Number(num2));
      finalizeOperation();
    }
  } else if (operation == "×") {
    num1 = String(Number(num1) * Number(num2));
    finalizeOperation();
  }
}

// Clicar operaciones
function clickOperators() {
  if (num2 == "0") {
    operation = buttonClicked;
    result = num1 + operation;
  } else {
    operate();
    operation = buttonClicked;
    num2 = "0";
    result = num1 + operation;
  }
}
