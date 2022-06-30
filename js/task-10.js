function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputRef = document.querySelector('input');
const boxesRef =document.querySelector('#boxes');


boxesRef.style.display = 'flex';
boxesRef.style.flexWrap = 'wrap';


function createBoxes(amount) {
amount = inputRef.value;

for (let i = 1; i <= inputRef.value; i+= 1) {
  let startLength = 30 + i * 10;
  const divCreate = document.createElement('div');
  divCreate.style.width = `${startLength}px`;
  divCreate.style.height = `${startLength}px`;
  divCreate.style.margin = '15px';
  divCreate.style.outline ='1px solid black';
  divCreate.style.backgroundColor = getRandomHexColor();
  
  boxesRef.append(divCreate);
}

return boxesRef;
};


function destroyBoxes() {
  boxesRef.innerHTML = '';
}

createBtn.addEventListener('click',createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);