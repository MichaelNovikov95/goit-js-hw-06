const inputField = document.querySelector('#validation-input');
const styleRef = document.querySelector('style');

const checkedLength = function () {
  console.log(inputField.value);
  if (inputField.value.length === 0) {
    inputField.classList = ' ';
    return;
  } if (inputField.value.length > 0 && inputField.value.length < inputField.dataset.length){
    inputField.classList.add('invalid');
    return;
  } else if (inputField.value.length >= inputField.dataset.length) {
    inputField.classList.replace('invalid','valid');
    return;
  } 
}


inputField.addEventListener('blur', checkedLength);