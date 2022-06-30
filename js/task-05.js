const inputRef = document.querySelector('#name-input');
const spamRef = document.querySelector('#name-output');

const replaceValue = function () {
  if (inputRef.value === '') {
    spamRef.textContent = 'Anonymous';
    return;
  }
  spamRef.textContent = inputRef.value;
}

inputRef.addEventListener('input', replaceValue);