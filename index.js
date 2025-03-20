import{a as n,i as a,S as m}from"./assets/vendor-BBPOLzfb.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function d(i){return n.defaults.baseURL="https://pixabay.com",n.get("/api/",{params:{key:"31908643-2178b12526c513c1beb381d6b",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const u=document.querySelector(".gallery");function f(i){const o=i.map(r=>`<li class="gallery-item"><a class="gallery-link" href="${r.largeImageURL}"><img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}"/></a><ul class="img-info-list">
            <li class="img-info-item">
              <h3 class="img-info-item-header">Likes</h3>
              <p class="img-info-item-value">${r.likes}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Views</h3>
              <p class="img-info-item-value">${r.views}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Comments</h3>
              <p class="img-info-item-value">${r.comments}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Downloads</h3>
              <p class="img-info-item-value">${r.downloads}</p>
            </li>
          </ul></li>`).join("");u.insertAdjacentHTML("beforeend",o)}function g(){u.innerHTML=""}const h=document.querySelector(".form"),c=document.querySelector(".loader");document.querySelector(".gallery");h.addEventListener("submit",p);function p(i){i.preventDefault();const o=i.currentTarget.searchText.value.trim("");if(o==="")return a.error({theme:"dark",message:"Please, fill out the search field.",backgroundColor:"#EF4040",closeOnClick:!0,position:"topRight",timeout:3e3});g(),c.classList.remove("visually-hidden"),d(o).then(r=>{const s=r.data.hits;if(s.length===0)return a.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",closeOnClick:!0,position:"topRight",timeout:3e3});f(s),b.refresh()}).catch(r=>a.error({theme:"dark",title:"Error!",message:"Sorry, something went wrong.",backgroundColor:"#EF4040",closeOnClick:!0,position:"topRight",timeout:3e3})).finally(()=>{c.classList.add("visually-hidden")}),i.currentTarget.searchText.value=""}const y={captionDelay:250,captionsData:"alt"};let b=new m(".gallery a",y);
//# sourceMappingURL=index.js.map
