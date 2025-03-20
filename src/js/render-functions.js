const galleryEl = document.querySelector(".gallery");


export default function renderGallery (picsArray) {
    const galleryMarkup = picsArray
        .map(image => `<li class="gallery-item"><a class="gallery-link" href="${image.largeImageURL}"><img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}"/></a><ul class="img-info-list">
            <li class="img-info-item">
              <h3 class="img-info-item-header">Likes</h3>
              <p class="img-info-item-value">${image.likes}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Views</h3>
              <p class="img-info-item-value">${image.views}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Comments</h3>
              <p class="img-info-item-value">${image.comments}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Downloads</h3>
              <p class="img-info-item-value">${image.downloads}</p>
            </li>
          </ul></li>`)
        .join("");
    
    galleryEl.insertAdjacentHTML("beforeend", galleryMarkup); 
};

export function clearGallery() {
    galleryEl.innerHTML = "";
};