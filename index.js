import{a as n,i as a,S as g}from"./assets/vendor-B-D547pe.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function f(o,r){n.defaults.baseURL="https://pixabay.com";const i=await n.get("/api/",{params:{key:"31908643-2178b12526c513c1beb381d6b",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}});return console.log(i.data),console.log(i.data.totalHits),i.data}const u=document.querySelector(".gallery");function p(o){const r=o.map(({largeImageURL:i,webformatURL:l,tags:e,likes:t,views:s,comments:m,downloads:d})=>`<li class="gallery-item"><a class="gallery-link" href="${i}"><img class="gallery-image" src="${l}" alt="${e}"/></a><ul class="img-info-list">
            <li class="img-info-item">
              <h3 class="img-info-item-header">Likes</h3>
              <p class="img-info-item-value">${t}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Views</h3>
              <p class="img-info-item-value">${s}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Comments</h3>
              <p class="img-info-item-value">${m}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Downloads</h3>
              <p class="img-info-item-value">${d}</p>
            </li>
          </ul></li>`).join("");u.insertAdjacentHTML("beforeend",r)}function h(){u.innerHTML=""}const y=document.querySelector(".form"),c=document.querySelector(".loader");document.querySelector(".gallery");document.getElementById("load-more-btn");y.addEventListener("submit",b);function b(o){o.preventDefault();let r=1;const i=o.currentTarget.searchText.value.trim("");if(i==="")return a.error({theme:"dark",message:"Please, fill out the search field.",backgroundColor:"#EF4040",closeOnClick:!0,position:"topRight",timeout:3e3});h(),c.classList.remove("visually-hidden"),f(i,r).then(l=>{const e=l.hits;if(e.length===0)return a.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",closeOnClick:!0,position:"topRight",timeout:3e3});r+=1,p(e),v.refresh()}).catch(l=>(console.log(l),a.error({theme:"dark",title:"Error!",message:"Sorry, something went wrong.",backgroundColor:"#EF4040",closeOnClick:!0,position:"topRight",timeout:3e3}))).finally(()=>{c.classList.add("visually-hidden")}),o.currentTarget.searchText.value=""}const L={captionDelay:250,captionsData:"alt"};let v=new g(".gallery a",L);
//# sourceMappingURL=index.js.map
