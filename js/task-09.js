function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const textColorRef = document.querySelector('.color');
const backgorundRef = document.querySelector('.widget');

function buttonChangeColorHandler () {
  const colorSwitch = getRandomHexColor();
  backgorundRef.style.backgroundColor = colorSwitch;
  textColorRef.textContent = colorSwitch;
}

btnRef.addEventListener('click', buttonChangeColorHandler);