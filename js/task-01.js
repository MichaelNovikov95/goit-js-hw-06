// console.log('Number of categories:', categories.children.length);

// console.log('Category:',categories.querySelector('.item').firstElementChild.textContent);
// console.log('Elements:', categories.querySelector('.item').lastElementChild.children.length);

// console.log('Category:',categories.querySelector('.item').nextElementSibling.firstElementChild.textContent);
// console.log('Elements:', categories.querySelector('.item').nextElementSibling.lastElementChild.children.length);

// console.log('Category:',categories.lastElementChild.firstElementChild.textContent);
// console.log('Elements:', categories.lastElementChild.querySelector('ul').children.length);

const allItemRefs = document.querySelectorAll('.item');

allItemRefs.forEach(item => {
  console.log('Category:',item.firstElementChild.textContent);
  console.log('Element:',item.querySelector('ul').children.length);
})
