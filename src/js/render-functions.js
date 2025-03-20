const galleryEl = document.querySelector(".gallery");


export default function renderGallery (picsArray) {
    const galleryMarkup = picsArray
      .map(({largeImageURL, webformatURL, tags, likes, views, comments, downloads}) => `<li class="gallery-item"><a class="gallery-link" href="${largeImageURL}"><img class="gallery-image" src="${webformatURL}" alt="${tags}"/></a><ul class="img-info-list">
            <li class="img-info-item">
              <h3 class="img-info-item-header">Likes</h3>
              <p class="img-info-item-value">${likes}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Views</h3>
              <p class="img-info-item-value">${views}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Comments</h3>
              <p class="img-info-item-value">${comments}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Downloads</h3>
              <p class="img-info-item-value">${downloads}</p>
            </li>
          </ul></li>`)
        .join("");
    
    galleryEl.insertAdjacentHTML("beforeend", galleryMarkup); 
};

export function clearGallery() {
    galleryEl.innerHTML = "";
};