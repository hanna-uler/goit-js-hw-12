import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import getPics from "./js/pixabay-api";
import renderGallery from "./js/render-functions";
import { clearGallery } from "./js/render-functions";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const formEl = document.querySelector(".form");
const loaderEl = document.querySelector(".loader")
const galleryEl = document.querySelector(".gallery");
const nextBtnEl = document.getElementById("load-more-btn");

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    let pageNum = 1;
    const queryWords = event.currentTarget.searchText.value.trim("");
    if (queryWords === "") {
        return iziToast.error({
            theme: 'dark',
            message: "Please, fill out the search field.",
            backgroundColor: '#EF4040',
            closeOnClick: true,
            position: 'topRight',
            timeout: 3000,
        })
    } else {
        clearGallery();
        loaderEl.classList.remove("visually-hidden");
        getPics(queryWords, pageNum)
            .then(response => {
                const picsArray = response.hits;
                if (picsArray.length === 0) {
                    return iziToast.error({
                        theme: "dark",
                        message: "Sorry, there are no images matching your search query. Please try again!",
                        backgroundColor: "#EF4040",
                        closeOnClick: true,
                        position: "topRight",
                        timeout: 3000,
                    })
                } else {
                    pageNum += 1;
                    renderGallery(picsArray);
                    slGallery.refresh();
                }
            })
            .catch(error => {
                console.log(error);
                
                return iziToast.error({
                    theme: "dark",
                    title: "Error!",
                    message: "Sorry, something went wrong.",
                    backgroundColor: "#EF4040",
                    closeOnClick: true,
                    position: "topRight",
                    timeout: 3000,
                    })
            })
            .finally(() => {
            loaderEl.classList.add("visually-hidden");
        });
        event.currentTarget.searchText.value = "";
    }
    
};

const slGalleryOptions = {
  captionDelay: 250,
  captionsData: "alt",
};
let slGallery = new SimpleLightbox('.gallery a', slGalleryOptions);
