import{S as d,a as m,i as h}from"./assets/vendor-CZCqCKWq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function y(t){const e=t.map(({webformatURL:n,largeImageURL:i,tags:r,likes:o,views:s,comments:f,downloads:p})=>`
                <li class="card">
                    <a href="${i}">
                        <img src="${n}" alt="${r}" class="card-pic"/>
                        <ul class="inner-list">
                            <li class="inner-item">
                                <span class="bold">Likes</span>${o}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Views</span>${s}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Comments</span>${f}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Downloads</span>${p}
                            </li>
                        </ul>
                    </a>
                </li>`).join("");l(e)}function l(t=""){const e=document.querySelector(".gallery");e.innerHTML=t,t&&g()}function g(){new d(".gallery a",{navText:["<",">"],captionsData:"alt",captionDelay:"250"}).refresh()}function c(t){const e=document.querySelector(".loader");e.style.display=t}function b(t){m({url:"https://pixabay.com/api/",params:{key:"49539312-1d6717d33bfa63c1c4ab44e48",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>L(e.data.hits)).catch(e=>{a(e.message,"ef4040")}).finally(()=>{c("none")})}function L(t){if(!t.length){a("Sorry, there are no images matching your search query. Please try again!","c08e2b");return}y(t)}function a(t,e){h.show({title:`${t}`,titleColor:"#ffffff",titleSize:"16px",backgroundColor:`#${e}`,iconUrl:"./Group.png",position:"topRight",width:"300px"})}const u=document.querySelector(".form");u.addEventListener("submit",$);function $(t){t.preventDefault();const e=this.elements["search-text"].value.trim();if(!e){u.reset(),a("Enter correct data, please","f6f932");return}l(),c("block"),b(e)}
//# sourceMappingURL=index.js.map
