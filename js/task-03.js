const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector("ul");
  galleryRef.style.display = 'flex';
  galleryRef.style.flexWrap = 'wrap';

const imgRefs = images.map(({ url, alt }) => {
  return `<li>
    <img class="img" src=${url} alt=${alt}>
  </li>`;
});

  galleryRef.insertAdjacentHTML('beforeend', imgRefs.join(''));

  const liRef = [...galleryRef.children];

  liRef.forEach(li => {
    li.style.listStyleType = 'none';
    li.style.width ='calc((100% - 90px) / 3)';
    li.style.margin = '15px';
  });

  const imgsRef = document.querySelectorAll('.img');

  imgsRef.forEach(img => {
    img.style.width = '100%';
    img.style.height = '100%';
  })