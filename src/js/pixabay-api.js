import axios from 'axios';

export default async function getPics(queryWords, pageNum) {
    axios.defaults.baseURL = "https://pixabay.com";
    const pictures = await axios.get("/api/", {
        params: {
            key: "31908643-2178b12526c513c1beb381d6b",
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


