import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;

export default async function getPics(queryWords, pageNum) {
    axios.defaults.baseURL = "https://pixabay.com";
    const pictures = await axios.get("/api/", {
        params: {
            key: API_KEY,
            q: queryWords,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page: pageNum,
            per_page: 15,
        }
    })
    return pictures.data;
};


