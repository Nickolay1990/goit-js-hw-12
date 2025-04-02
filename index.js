import{S as L,a as b,i as M}from"./assets/vendor-mj6yH6lW.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const o={galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),showMoreButton:document.querySelector("[data-showMoreButton]"),form:document.querySelector(".form")},v=new L(".gallery a",{navText:["<",">"],captionsData:"alt",captionDelay:"250"});function f(e){const a=e.map(({webformatURL:c,largeImageURL:l,tags:t,likes:r,views:n,comments:g,downloads:w})=>`
                <li class="card">
                    <a href="${l}">
                        <img src="${c}" alt="${t}" class="card-pic"/>
                        <ul class="inner-list">
                            <li class="inner-item">
                                <span class="bold">Likes</span>${r}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Views</span>${n}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Comments</span>${g}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Downloads</span>${w}
                            </li>
                        </ul>
                    </a>
                </li>`).join("");o.galleryList.insertAdjacentHTML("beforeend",a),v.refresh()}function D(){o.galleryList.innerHTML=""}function p(){o.loader.style.display="block"}function d(){o.loader.style.display="none"}function $(){o.showMoreButton.classList.remove("visually-hidden")}function h(){o.showMoreButton.classList.add("visually-hidden")}const u={key:"49539312-1d6717d33bfa63c1c4ab44e48",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};async function m(e,a){return u.q=e,u.page=a,(await b({url:`https://pixabay.com/api/?${new URLSearchParams(u)}`})).data}function i(e,a){M.show({message:`${e}`,messageColor:"#ffffff",messageSize:"16px",backgroundColor:`#${a}`,iconUrl:"./Group.png",position:"topRight",width:"300px"})}const s={page:1,searchData:""};o.form.addEventListener("submit",S);o.showMoreButton.addEventListener("click",q);function S(e){if(e.preventDefault(),s.searchData=this.elements["search-text"].value.trim(),E(),!s.searchData){i("Enter correct data, please","f6f932");return}B()}async function B(){p();try{const e=await m(s.searchData,s.page);O(e.totalHits),f(e.hits),y(e)}catch(e){if(e.message==="no item")return;i(`${e.message}`,"e83b08")}finally{d()}}async function q(){h(),p(),s.page++;try{const e=await m(s.searchData,s.page);f(e.hits),y(e),x()}catch(e){i(`${e.message}`,"e83b08")}finally{d()}}function x(){const e=o.galleryList.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function E(){h(),D(),s.page=1,o.form.reset()}function O(e){if(!e)throw i("Sorry, there are no images matching your search query. Please try again!","c08e2b"),d(),new Error("no item")}function y(e){if(Math.ceil(e.totalHits/u.per_page)===s.page){i("We're sorry, but you've reached the end of search results.","0e9c79");return}$()}
//# sourceMappingURL=index.js.map
