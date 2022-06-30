const barControl = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const suffix ='px';
textRef.style.fontSize = barControl.value + suffix;

const textTransform = function() {
  console.log(barControl.value + suffix);
  textRef.style.fontSize = `${barControl.value}${suffix}`;
};

barControl.addEventListener('input', textTransform);