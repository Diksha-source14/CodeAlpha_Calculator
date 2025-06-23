let display = document.getElementById('display');
let input = '';

function updateDisplay() {
  display.innerText = input || '0';
}

function append(char) {
  if (input === 'Error') input = '';
  input += char;
  updateDisplay();
}

function clearDisplay() {
  input = '';
  updateDisplay();
}

function backspace() {
  input = input.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    input = eval(input).toString();
  } catch {
    input = 'Error';
  }
  updateDisplay();
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  if (e.key.match(/[0-9+\-*/.]/)) {
    append(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    backspace();
  } else if (e.key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
