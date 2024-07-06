import{a as l,S as $,P as j}from"./vendor-d1d8eb77.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=c(e);fetch(e.href,a)}})();const _={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await l.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await l.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await l.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await l.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(c){throw c}},products:async function(t={}){try{const c={params:t};return(await l.get(this._baseURL+this._productsURL,c)).data}catch(c){throw c}},subscribe:async function(t){try{const c={email:t};return await l.post(this._baseURL+this._subscriptionURL,c)}catch(c){throw c}},order:async function(t){try{return(await l.post(this._baseURL+this._orderURL,t)).data}catch(c){throw c}}},v=document.getElementById("category");async function L(){await _.categories().then(s=>{v.insertAdjacentHTML("afterbegin",w(s)),new $({select:"#category",settings:{showSearch:!1,openPosition:"down",placeholderText:"Categories"}})}).catch(s=>console.log(s))}function w(s){return s.map(t=>`<option value="${t}">${t}</option>`).join("")}async function k({perPage:s,totalPages:t,page:c}){const r={totalItems:t*s,itemsPerPage:s,visiblePages:5,page:c,centerAlign:!0};await new j("pagination",r)}const d="/food-boutique/assets/icons-67d75302.svg",u={mainCard:function(t){return t.map(({category:r,img:e,name:a,popularity:i,price:n,size:p,_id:o,is10PercentOff:f})=>`
                <li class="card__item js-object" id="${o}" data-productId="${o}">
                  <div class="card__wrap">
                    <div class="card__image-wrap">
                      <img src="${e}" alt="${a}" class="card__image" />
                    </div>
                    <h2 class="card__title">${a}</h2>
                    <div class="card__description">
                      <p class="card__text">
                        Category: <span class="card__accent">${r}</span>
                      </p>
                      <p class="card__text">Size: <span class="card__accent">${p}</span></p>
                      <p class="card__text">
                        Popularity: <span class="card__accent">${i}</span>
                      </p>
                    </div>
                    <div class="card__order">
                      <p class="curd__price">$${n}</p>
                      <button
                        id="${o}"
                        class="card__btn js-btn-buy js-object"
                        data-jsname="buy${o}"
                        type="button"
                      >
                        <svg class="card__icon js-btn">
                          <use class="js-btn" href="${d}#discount-cart"></use>
                        </svg>
                      </button>
                      <button
                        id="${o}"
                        class="card__btn js-btn-check js-object"
                        data-jsname="check${o}"
                        type="button"
                      >
                        <svg class="card__icon card__icon--checked js-btn">
                          <use class="js-btn" href="${d}#check-mark-icon"></use>
                        </svg>
                      </button>
                       
                    </div>
                  </div>
                </li>
                `).join("")},popularCard:function(t){return t.map(({_id:r,img:e,name:a,category:i,size:n,popularity:p})=>` 
        <li class ="card__item" data-productid="${r}" >
            <div id ="${r}" class="card">
                  <div class="card__image-wrap">
                        <img class = "card__image" src="${e}" alt="${a}" loading="lazy" />
                  </div>
                
                <div class="card__description">
                        <h3 class="card__title">${a}</h3>      
                        <p class="card__text card__description-category">
                            Category: <span class="card__accent"> ${i}</span>
                        </p>
                        <div class="card__description-info">
                            <p class="card__text">
                                Size: <span class="card__accent"> ${n}</span>
                            </p>
                            <p class="card__text">
                                Popularity: <span class="card__accent"> ${p}</span>
                            </p>
                        </div>
                   </div>
                    <button
                        id="${r}"
                        class="card__btn js-btn-buy js-object"
                        data-jsname="buy${r}"
                        type="button"
                      >
                        <svg class="card__icon">
                          <use class="js-btn" href="${d}#discount-cart"></use>
                        </svg>
                      </button>
                      <button
                        id="${r}"
                        class="card__btn js-btn-check js-object"
                        data-jsname="check${r}"
                        type="button"
                      >
                        <svg class="card__icon card__icon--checked js-btn">
                          <use class="js-btn" href="${d}#check-mark-icon"></use>
                        </svg>
                      </button>
                        </div> 
                   </li>`).join("")},dicountCard:function(t){t.length<2&&t.length;const r=[];let e=Math.floor(Math.random()*t.length),a=e-1;return r.push(t[e],t[a]),r.map(({_id:n,img:p,name:o,price:f})=>`
                                <li class="card__item" data-productId="${n}">
                                  <div id="${n}" class="card">
                                    <div class="card__image-wrap">
                                      <img
                                        class="card__image"
                                        src="${p}"
                                        alt="${o}"
                                        data-productId="${n}"
                                        loading="lazy"
                                      />
                                    </div>

                                    <div class="card__description" data-productId="${n}">
                                      <h3 class="card__description-title">${o}</h3>
                                      <div class="card__order" data-productId="${n}">
                                        <span class="discount-price" data-productId="${n}"> $${f} </span>
                                        <button
                                          id="${n}"
                                          class="card__btn js-btn-buy js-object"
                                          data-jsname="buy${n}"
                                          type="button"
                                        >
                                          <svg class="card__icon">
                                            <use class="js-btn" href="${d}#discount-cart"></use>
                                          </svg>
                                        </button>
                                        <button
                                          id="${n}"
                                          class="card__btn js-btn-check js-object"
                                          data-jsname="check${n}"
                                          type="button"
                                        >
                                          <svg class="card__icon card__icon--checked js-btn">
                                            <use class="js-btn" href="${d}#check-mark-icon"></use>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
            `).join("")},checkBtn:function(t){return t.map(c=>{const r=document.querySelector(`[data-jsname=check${c._id}]`);r&&(r.style.display="none")})}},U=document.querySelector(".filter__card-list"),g=document.querySelector(".filter__full"),m=document.querySelector(".filter__empty");let h=6;async function R(s){screen.width>=768&&(h=8),screen.width>=1440&&(h=9),await _.products({limit:h,params:s}).then(t=>(t||(g.style.display="none",m.style.display="block"),g.style.display="block",m.style.display="none",U.innerHTML=u.mainCard(t.results),u.checkBtn(t.results),k(t))).catch(t=>console.log(t))}const S=document.querySelector(".popular__list"),y=document.querySelector(".popular");async function C(){await _.popular().then(s=>{s||(y.style.display="none"),y.style.display="block",S.innerHTML=u.popularCard(s),u.checkBtn(s)}).catch(s=>(console.log(s),y.style.display="none"))}const P=document.querySelector(".discount__list"),b=document.querySelector(".discount");async function q(){await _.discount().then(s=>{s||(b.style.display="none"),b.style.display="block",P.innerHTML=u.dicountCard(s),u.checkBtn(s)}).catch(s=>(console.log(s),b.style.display="none"))}L();R();C();q();
//# sourceMappingURL=index-10154ae7.js.map
