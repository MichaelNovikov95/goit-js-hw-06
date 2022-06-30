const incrBtn = document.querySelector('[data-action = increment]');
const decrBtn = document.querySelector('[data-action = decrement]');
const valueRef = document.querySelector('#value');

let counterValue = {
  total : 0,
}

const icrease = function ({}) {
  valueRef.textContent = counterValue.total += 1;
}

const decrease = function () {
  valueRef.textContent = counterValue.total -= 1;
}


incrBtn.addEventListener('click', icrease);
decrBtn.addEventListener('click', decrease);
