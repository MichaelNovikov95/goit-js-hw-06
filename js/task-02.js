const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listOfIngridients = ingredients.map((element) => {
  const liRef = document.createElement('li');
  liRef.classList.add('item');
  liRef.textContent = element;

  return liRef;
});

document.querySelector('#ingredients').append(...listOfIngridients);