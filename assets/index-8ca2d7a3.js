import{a as n,S as $,P as L}from"./vendor-d1d8eb77.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=e(r);fetch(r.href,c)}})();const u={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await n.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await n.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await n.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await n.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(e){throw e}},products:async function(t={}){try{const e={params:t};return(await n.get(this._baseURL+this._productsURL,e)).data}catch(e){throw e}},subscribe:async function(t){try{const e={email:t};return await n.post(this._baseURL+this._subscriptionURL,e)}catch(e){throw e}},order:async function(t){try{return(await n.post(this._baseURL+this._orderURL,t)).data}catch(e){throw e}}},w=document.getElementById("category");async function j(){await u.categories().then(s=>{console.log(s),w.insertAdjacentHTML("afterbegin",U(s)),new $({select:"#category",settings:{showSearch:!1,openPosition:"down",placeholderText:"Categories"}})}).catch(s=>console.log(s))}function U(s){return s.map(t=>`<option value="${t}">${t}</option>`).join("")}async function R({perPage:s,totalPages:t,page:e}){const a={totalItems:t*s,itemsPerPage:s,visiblePages:5,page:e,centerAlign:!0};console.log(a),await new L("pagination",a)}const p="/food-boutique/assets/icons-b225282e.svg",y={mainCatd:function(t){return t.map(({category:e,img:a,name:r,popularity:c,price:o,size:l,_id:i,is10PercentOff:m})=>`
                <li class="card__item js-object" id="${i}" data-productId="${i}">
                  <div class="card__wrap">
                    <div class="card__image-wrap">
                      <img src="${a}" alt="${r}" class="card__image" />
                    </div>
                    <h2 class="card__title">${r}</h2>
                    <div class="card__description">
                      <p class="card__text">
                        Category:<span class="card__accent">${e}</span>
                      </p>
                      <p class="card__text">Size:<span class="card__accent">${l}</span></p>
                      <p class="card__text">
                        Popularity:<span class="card__accent">${c}</span>
                      </p>
                    </div>
                    <div class="card__order">
                      <p class="curd__price">$${o}</p>
                      <button
                        id="${i}"
                        class="card__btn js-object"
                        data-jsname="btn1${i}"
                        type="button"
                      >
                        <svg class="card__btn-icon js-btn">
                          <use class="js-btn" href="${p}#discount-cart"></use>
                        </svg>
                      </button>
                       
                    </div>
                  </div>
                </li>
                `).join("")},popularCard:function(t){return t.map(({_id:e,img:a,name:r,category:c,size:o,popularity:l})=>` 
        <li class ="popular__item" data-productid="${e}" >
            <div id ="${e}" class="card">
                  <div class="card__image-wrap">
                        <img class = "card__image" src="${a}" alt="${r}" loading="lazy" />
                  </div>
                
                <div class="card__description">
                        <h3 class="card__description-title">${r}</h3>      
                        <p class="card__description-text card__description-category">
                            Category:<span class="card__description-accent"> ${c}</span>
                        </p>
                        <div class="card__description-info">
                            <p class="card__description-text">
                                Size:<span class="card__description-accent"> ${o}</span>
                            </p>
                            <p class="card__description-text">
                                Popularity:<span class="card__description-accent"> ${l}</span>
                            </p>
                        </div>
                   </div>
                    <button
                        id="${e}"
                        class="card__btn  js-object"
                        data-jsname="btn1${e}"
                        type="button"
                      >
                        <svg class="card__btn-icon">
                          <use class="js-btn" href="${p}#discount-cart"></use>
                        </svg>
                      </button>
                      
                        </div> 
                   </li>`).join("")},dicountCard:function(t){t.length<2&&t.length;const a=[];let r=Math.floor(Math.random()*t.length),c=r-1;return a.push(t[r],t[c]),a.map(({_id:o,img:l,name:i,price:m})=>`
                                <li class="discount__item" data-productId="${o}">
                                  <div id="${o}" class="card">
                                    <div class="card__image-wrap">
                                      <img
                                        class="card__img"
                                        src="${l}"
                                        alt="${i}"
                                        data-productId="${o}"
                                        loading="lazy"
                                      />
                                    </div>

                                    <div class="card__description" data-productId="${o}">
                                      <h3 class="card__description-title">${i}</h3>
                                      <div class="card__price" data-productId="${o}">
                                        <span class="discount-price" data-productId="${o}"> $${m} </span>
                                        <button
                                          id="${o}"
                                          class="card__btn js-object"
                                          data-jsname="btn1${o}"
                                          type="button"
                                        >
                                          <svg class="card__btn-icon">
                                            <use class="js-btn" href="${p}#discount-cart"></use>
                                          </svg>
                                        </button>
                                        
                                      </div>
                                    </div>
                                  </div>
                                </li>
            `).join("")}},_=document.querySelector(".filter__card-list"),b=document.querySelector(".filter__empty");let f=6;async function I(s){screen.width>=768&&(f=8),screen.width>=1440&&(f=9),await u.products({limit:f,params:s}).then(t=>(t||(_.style.display="none",b.style.display="block"),_.style.display="flex",b.style.display="none",_.innerHTML=y.mainCatd(t.results),R(t))).catch(t=>console.log(t))}const h=document.querySelector(".popular__list");async function S(){await u.popular().then(s=>(s||(h.style.display="none"),h.style.display="flex",h.innerHTML=y.popularCard(s),s)).catch(s=>console.log(s))}const g=document.querySelector(".discount__list");async function C(){await u.discount().then(s=>(s||(g.style.display="none"),g.style.display="flex",g.innerHTML=y.dicountCard(s),s)).catch(s=>console.log(s))}const d={_filterID:"filter-food_boutique",_cartID:"cart-food_boutique",_save:function(t,e){try{const a=JSON.stringify(e);localStorage.setItem(t,a)}catch(a){throw a}},_load:function(t){try{const e=localStorage.getItem(t);return e===null?{}:JSON.parse(e)}catch(e){throw e}},_delete:function(t){try{localStorage.removeItem(t)}catch(e){throw e}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t)},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}};console.log("test: ",d.loadFilter());d.saveFilter({keyA:"A"});console.log("test: ",d.loadFilter());d.saveFilter({KeyB:"B"});console.log("test: ",d.loadFilter());class P{constructor(){const t=document.querySelectorAll(".js-object");for(let e=0;e<t.length;e++)"dataset"in t[e]&&"jsname"in t[e].dataset&&(this[t[e].dataset.jsname]=t[e])}refresh(){for(let e in this)e in this&&delete this[e];const t=document.querySelectorAll(".js-object");for(let e=0;e<t.length;e++)"dataset"in t[e]&&"jsname"in t[e].dataset&&(this[t[e].dataset.jsname]=t[e])}}j();I();S();C();const v=new P;setTimeout(()=>{v.refresh(),console.log(Object.keys(v))},"1000");
//# sourceMappingURL=index-8ca2d7a3.js.map
