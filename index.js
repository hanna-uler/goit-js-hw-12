import{a as n,i as a,S as f}from"./assets/vendor-B-D547pe.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function p(o,i){n.defaults.baseURL="https://pixabay.com";const r=await n.get("/api/",{params:{key:"31908643-2178b12526c513c1beb381d6b",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:15}});return console.log(r.data),console.log(r.data.totalHits),r.data}const m=document.querySelector(".gallery");function h(o){const i=o.map(({largeImageURL:r,webformatURL:s,tags:e,likes:t,views:l,comments:g,downloads:d})=>`<li class="gallery-item"><a class="gallery-link" href="${r}"><img class="gallery-image" src="${s}" alt="${e}"/></a><ul class="img-info-list">
            <li class="img-info-item">
              <h3 class="img-info-item-header">Likes</h3>
              <p class="img-info-item-value">${t}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Views</h3>
              <p class="img-info-item-value">${l}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Comments</h3>
              <p class="img-info-item-value">${g}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Downloads</h3>
              <p class="img-info-item-value">${d}</p>
            </li>
          </ul></li>`).join("");m.insertAdjacentHTML("beforeend",i)}function y(){m.innerHTML=""}const b=document.querySelector(".form"),c=document.querySelector(".loader");document.querySelector(".gallery");let u=1;b.addEventListener("submit",L);function L(o){o.preventDefault();const i=o.currentTarget.searchText.value.trim("");if(i==="")return a.error({theme:"dark",message:"Please, fill out the search field.",backgroundColor:"#EF4040",closeOnClick:!0,position:"topRight",timeout:3e3});y(),c.classList.remove("visually-hidden"),p(i,u).then(r=>{const s=r.hits;if(s.length===0)return a.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",closeOnClick:!0,position:"topRight",timeout:3e3});u+=1,h(s),O.refresh()}).catch(r=>(console.log(r),a.error({theme:"dark",title:"Error!",message:"Sorry, something went wrong.",backgroundColor:"#EF4040",closeOnClick:!0,position:"topRight",timeout:3e3}))).finally(()=>{c.classList.add("visually-hidden")}),o.currentTarget.searchText.value=""}const v={captionDelay:250,captionsData:"alt"};let O=new f(".gallery a",v);
//# sourceMappingURL=index.js.map
