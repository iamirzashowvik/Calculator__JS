let result;
let currentResult = 0;
let x;
let logentries = [];

function writeToLog(operator, inital, current, result) {
    const logentry = {
        operation: operator,
        prevResult: inital,
        inputNumber: current,
        result: result,
      };
      logentries.push(logentry);
      console.log(logentries);
}
function add() {
  x = currentResult + parseInt(userInput.value);

  result = `${currentResult}+${parseInt(userInput.value)}`;
  outputResult(x, result);
  writeToLog('ADD',currentResult,parseInt(userInput.value),x);

}

addBtn.addEventListener("click", add);

let currentResult2 = 0;
function sub() {
  x = currentResult2 - parseInt(userInput.value);
  result = `${currentResult2}-${parseInt(userInput.value)}`;
  outputResult(x, result);
  writeToLog('Subtraction',currentResult,parseInt(userInput.value),x);
}

subtractBtn.addEventListener("click", sub);

let currentResult3 = 1;
function mul() {
  x = currentResult3 * parseInt(userInput.value);
  result = `${currentResult3}*${parseInt(userInput.value)}`;
  outputResult(x, result);
  writeToLog('MULTIPLY',currentResult3,parseInt(userInput.value),x);
}

multiplyBtn.addEventListener("click", mul);

let currentResult4 = 1;
function div() {
  x = currentResult4 / parseInt(userInput.value);
  result = `${currentResult}/${parseInt(userInput.value)}`;
  outputResult(x, result);
  writeToLog('DIV',currentResult4,parseInt(userInput.value),x);
}

divideBtn.addEventListener("click", div);
