import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import getPics from "./js/pixabay-api";
import renderGallery from "./js/render-functions";
import { clearGallery } from "./js/render-functions";


const formEl = document.querySelector(".form");
const loaderEl = document.querySelector(".loader")
const galleryEl = document.querySelector(".gallery");
const loadMoreBtnEl = document.getElementById("load-more-btn");

formEl.addEventListener("submit", onSubmit);
loadMoreBtnEl.addEventListener("click", onLoadMore)

let pageNum = 1;
let queryWords = "";
const PAGE_LIMIT = 15;

async function onSubmit(event) {
    event.preventDefault();
    clearGallery();
    loadMoreBtnEl.classList.add("visually-hidden");

    const form = event.currentTarget;
    const { searchText } = form.elements;
    queryWords = searchText.value.trim("");

    if (queryWords === "") {
        return iziToast.error({
            theme: 'dark',
            message: "Please, fill out the search field.",
            backgroundColor: '#EF4040',
            messageSize: 16,
            closeOnClick: true,
            position: 'topRight',
            timeout: 3000,
        })
    } else {
        loaderEl.classList.remove("visually-hidden");
        pageNum = 1;
        try {
            const { hits, totalHits } = await getPics(queryWords, pageNum);
            const picsArray = hits;
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
                // slGallery.refresh();
                if (totalHits > PAGE_LIMIT) {
                    loadMoreBtnEl.classList.remove("visually-hidden");
                } 
            }
        } catch(error) {
            console.log(error);
            return iziToast.error({
                theme: "dark",
                title: "Error!",
                message: "Sorry, something went wrong.",
                backgroundColor: "#EF4040",
                messageSize: 16,
                closeOnClick: true,
                position: "topRight",
                timeout: 3000,
            })
        } finally {
            loaderEl.classList.add("visually-hidden");
            form.reset();
        };
    }    
};
 
async function onLoadMore(event) {
    pageNum += 1;
    loadMoreBtnEl.classList.add("visually-hidden");
    loaderEl.classList.remove("visually-hidden");
    try {
        const { hits, totalHits } = await getPics(queryWords, pageNum);
        const picsArray = hits;
        const totalPages = Math.ceil(totalHits / PAGE_LIMIT);
        renderGallery(picsArray);
        scroll();
        // to check the last page:
        if (pageNum >= 3) {
        // if (pageNum >= totalPages) {
            return iziToast.info({
                theme: "dark",
                message: "We're sorry, but you've reached the end of the search results.",
                backgroundColor: "#6c8cff",
                messageColor: "#fff",
                messageSize: 16,
                closeOnClick: true,
                position: "bottomRight",
                timeout: 5000,
            })
        } else {
            loadMoreBtnEl.classList.remove("visually-hidden");
        }
    } catch(error) {
        console.log(error);
        return iziToast.error({
            theme: "dark",
            title: "Error!",
            message: "Sorry, something went wrong.",
            backgroundColor: "#EF4040",
            messageSize: 16,
            closeOnClick: true,
            position: "topRight",
            timeout: 3000,
        })
    } finally {
            loaderEl.classList.add("visually-hidden");
    }
};

function scroll() {
        const picCard = galleryEl.querySelector(".gallery-item");
        const scrollLength = (picCard.getBoundingClientRect().height) * 2;
        window.scrollBy({
        top: scrollLength,
        behavior: "smooth",
        });
}