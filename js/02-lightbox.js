import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector('.gallery') 



function createGallery(arr) { 
   return arr.map((item) => 
        `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`).join('');   
}

galleryList.innerHTML = createGallery(galleryItems); 

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});