console.log('Number of categories:', categories.children.length);

console.log('Category:',categories.querySelector('.item').firstElementChild.textContent);
console.log('Elements:', categories.querySelector('.item').lastElementChild.children.length);

console.log('Category:',categories.querySelector('.item').nextElementSibling.firstElementChild.textContent);
console.log('Elements:', categories.querySelector('.item').nextElementSibling.lastElementChild.children.length);

console.log('Category:',categories.lastElementChild.firstElementChild.textContent);
console.log('Elements:', categories.lastElementChild.querySelector('ul').children.length);