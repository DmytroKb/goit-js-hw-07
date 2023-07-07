import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', handlerClick)
function createGallery(arr) { 
   return arr.map((item) => 
        `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`).join('');   
}
galleryList.innerHTML = createGallery(galleryItems); 
function handlerClick(evt) { 
    evt.preventDefault(); 
    if (evt.target.classList.value !== 'gallery__image') {  
        return;
    }
  const instance = basicLightbox.create( 
    `<img src="${evt.target.dataset.source}" width="800" height="600">`,      
  );
  instance.show(document.addEventListener('keydown', onEscClose)); 
  function onEscClose(evt) { 
    if (evt.key.toLocaleLowerCase() === 'escape') { 
      instance.close(document.removeEventListener('keydown', onEscClose)); 
  }
}
};