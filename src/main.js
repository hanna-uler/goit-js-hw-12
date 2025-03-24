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
const loadMoreBtnEl = document.getElementById("load-more-btn");

formEl.addEventListener("submit", onSubmit);
loadMoreBtnEl.addEventListener("click", onLoadMore)

let pageNum = 1;
let queryWords = "";
const PAGE_LIMIT = 15;

function onSubmit(event) {
    event.preventDefault();
    clearGallery();
    loadMoreBtnEl.classList.add("visually-hidden");
    queryWords = event.currentTarget.searchText.value.trim("");
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
        loaderEl.classList.remove("visually-hidden");
        pageNum = 1;
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
                    renderGallery(picsArray);
                    slGallery.refresh();
                    if (response.totalHits >= PAGE_LIMIT) {
                        pageNum += 1;
                        loadMoreBtnEl.classList.remove("visually-hidden");
                    } 
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
 
function onLoadMore(event) {
    getPics(queryWords, pageNum)
        .then(response => {
            loaderEl.classList.remove("visually-hidden");
            const picsArray = response.hits;
            const totalPics = response.totalHits;
            const totalPages = getTotalPages(totalPics, PAGE_LIMIT);
            renderGallery(picsArray);
            slGallery.refresh();
            console.log(pageNum);
            // to check as it's the last page:
            // if (pageNum >= 3) {
            if (pageNum >= totalPages) {
                    loadMoreBtnEl.classList.add("visually-hidden");
                    return iziToast.info({
                        theme: "light",
                        message: "All the pictures have been loaded.",
                        backgroundColor: "#6c8cff",
                        closeOnClick: true,
                        position: "bottomRight",
                        timeout: 5000,
                    })
            } else {
                loadMoreBtnEl.classList.remove("visually-hidden");
                pageNum += 1;
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
}

function getTotalPages(totalPics, PAGE_LIMIT) {
    console.log(Math.ceil(totalPics / PAGE_LIMIT));
    const totalPages = Math.ceil(totalPics / PAGE_LIMIT);
    return totalPages;

}