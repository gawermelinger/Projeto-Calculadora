let flagFinish = 0;
const operators = ["+", "-", "x", "÷"];
function checkLastDigit(currentValue, valueList) {
  currentValue = valueList.includes(currentValue.slice(-1))
    ? currentValue.slice(0, -1)
    : currentValue;
  return currentValue;
}
function clearDisplay() {
  let display = document.querySelector("span");
  display.innerText = "";
  flagFinish = 0;
}
function checkLength(input, maxLength) {
  return input.length > maxLength ? input.slice(0, -1) : input;
}

const keyNumber = document.querySelectorAll(".number");
keyNumber.forEach((keyNumber) => {
  keyNumber.addEventListener("click", () => {
    flagFinish === 1 ? clearDisplay() : false;
    let display = document.querySelector("span");
    const currentValue = checkLength(display.innerText, 8);
    display.innerText = currentValue + keyNumber.value;
  });
});

const keyOperator = document.querySelectorAll(".operator");
keyOperator.forEach((keyOperator) => {
  keyOperator.addEventListener("click", () => {
    flagFinish = 0;
    let display = document.querySelector("span");
    if (display.innerText === "") {
      display.innerText = "0" + keyOperator.value;
    } else {
      let currentValue = checkLastDigit(display.innerText, operators);
      currentValue = checkLength(currentValue, 8);
      display.innerText = currentValue + keyOperator.value;
    }
  });
});

const keyDot = document.getElementById("dot");
keyDot.addEventListener("click", () => {
  flagFinish === 1 ? clearDisplay() : false;
  let display = document.querySelector("span");
  if (display.innerText === "") {
    display.innerText = "0" + keyDot.value;
  } else {
    let currentValue = checkLastDigit(display.innerText, ".");
    currentValue = checkLength(currentValue, 8);
    display.innerText = currentValue + keyDot.value;
  }
});

const keyEqual = document.getElementById("equal");
keyEqual.addEventListener("click", () => {
  let display = document.querySelector("span");
  let operation = display.innerText;
  if (operation === "") {
    operation = "0";
  }
  operation = checkLastDigit(operation, operators);
  operation = operation.replace("x", "*").replace("÷", "/");
  result = eval(operation);
  display.innerText =
    Math.round((result + Number.EPSILON) * 10000000) / 10000000;
  flagFinish = 1;
});

const btnClear = document.getElementById("btn-clear");
btnClear.addEventListener("click", () => {
  clearDisplay();
});
