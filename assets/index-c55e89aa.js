import{a as l,S as w,P as j}from"./vendor-d1d8eb77.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const i of c)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(c){const i={};return c.integrity&&(i.integrity=c.integrity),c.referrerpolicy&&(i.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?i.credentials="include":c.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(c){if(c.ep)return;c.ep=!0;const i=s(c);fetch(c.href,i)}})();class v{constructor(){const t=document.querySelectorAll(".js-object");for(let s=0;s<t.length;s++)"dataset"in t[s]&&"jsname"in t[s].dataset&&(this[t[s].dataset.jsname]=t[s])}refresh(){for(let s in this)s in this&&delete this[s];const t=document.querySelectorAll(".js-object");for(let s=0;s<t.length;s++)"dataset"in t[s]&&"jsname"in t[s].dataset&&(this[t[s].dataset.jsname]=t[s])}}const h={_filterID:"filter-food_boutique",_cartID:"cart-food_boutique",_save:function(t,s){try{const o=JSON.stringify(s);localStorage.setItem(t,o)}catch(o){throw o}},_load:function(t){try{const s=localStorage.getItem(t);return s===null?{}:JSON.parse(s)}catch(s){throw s}},_delete:function(t){try{localStorage.removeItem(t)}catch(s){throw s}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t)},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}},I=new v;console.log(I.batman);h.saveFilter({keyA:"A"});console.log("test: ",h.loadFilter());h.saveFilter({KeyB:"B"});console.log("test: ",h.loadFilter());const b={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await l.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await l.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await l.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await l.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(s){throw s}},products:async function(t={}){try{const s={params:t};return(await l.get(this._baseURL+this._productsURL,s)).data}catch(s){throw s}},subscribe:async function(t){try{const s={email:t};return await l.post(this._baseURL+this._subscriptionURL,s)}catch(s){throw s}},order:async function(t){try{return(await l.post(this._baseURL+this._orderURL,t)).data}catch(s){throw s}}},L=document.getElementById("category");async function U(){await b.categories().then(e=>{console.log(e),L.insertAdjacentHTML("afterbegin",R(e)),new w({select:"#category",settings:{showSearch:!1,openPosition:"down",placeholderText:"Categories"}})}).catch(e=>console.log(e))}function R(e){return e.map(t=>`<option value="${t}">${t}</option>`).join("")}async function S({perPage:e,totalPages:t,page:s}){const o={totalItems:t*e,itemsPerPage:e,visiblePages:5,page:s,centerAlign:!0};console.log(o),await new j("pagination",o)}const u="/food-boutique/assets/icons-b225282e.svg#discount-cart",p="/food-boutique/assets/icons-b225282e.svg#discount-checked",$={mainCatd:function(t){return t.map(({category:s,img:o,name:c,popularity:i,price:n,size:d,_id:r,is10PercentOff:a})=>a?`
                <li class="product_card-item js-object" id=${r} data-productId="${r}" >
                     <div class="product_card-wrapper">
                      <div class="card-img-wrapper"><img src="${o}" alt="${c}" class="product_card-image"></div>
                      <h2 class="product_card-name">${c}</h2>
                      <div class="product_card-info">
                          <p class="info-text">
                              Category:<span class="info-span">${s}</span>
                          </p>
                          <p class="info-text">
                              Size:<span class="info-span">${d}</span>
                          </p>
                          <p class="info-text">
                              Popularity:<span class="info-span">${i}</span>
                          </p>
                      </div>
                      <div class="product_card-bottom">
                      <p class="product-curd-price">$${n}</p>
                       <button id="${r}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${r}"  type="button">
                                  <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                                      <use class="js-btn" href="${u}"></use>
                                  </svg>
                              </button>
                              <div id="${r}" class="check js-object" data-jsname="check1${r}" >
                              <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                                      <use href="${p}"></use>
                                  </svg></div>
                      </div>
                      </div>
                  </li>
                `:`
      <li class="product_card-item js-object" id=${r} data-productId="${r}" >
    
           <div class="product_card-wrapper">
            <div class="card-img-wrapper"><img src="${o}" alt="${c}" class="product_card-image"></div>
            <h2 class="product_card-name">${c}</h2>
            <div class="product_card-info">
                <p class="info-text">
                    Category:<span class="info-span">${s}</span>
                </p>
                <p class="info-text">
                    Size:<span class="info-span">${d}</span>
                </p>
                <p class="info-text">
                    Popularity:<span class="info-span">${i}</span>
                </p>
            </div>
            <div class="product_card-bottom">
            <p class="product-curd-price">$${n}</p>
            
            <button id="${r}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${r}"  type="button">
                        <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                            <use class="js-btn" href="${u}"></use>
                        </svg>
                    </button>
                    <div id="${r}" class="check js-object" data-jsname="check1${r}" >
                    <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                            <use href="${p}"></use>
                        </svg></div>
            </div>
            </div>
        </li>`).join("")},popularCard:function(t){return t.map(({_id:s,img:o,name:c,category:i,size:n,popularity:d})=>` 
        <li class ="popular__item" data-productid="${s}" >
            <div id ="${s}" class="card">
                  <div class="card__img-wrap">
                        <img class = "card__img" src="${o}" alt="${c}" loading="lazy" />
                  </div>
                
                <div class="card__description">
                        <h3 class="card__description-title">${c}</h3>      
                        <p class="card__description-text card__description-category">
                            Category:<span class="card__description-accent"> ${i}</span>
                        </p>
                        <div class="card__description-info">
                            <p class="card__description-text">
                                Size:<span class="card__description-accent"> ${n}</span>
                            </p>
                            <p class="card__description-text">
                                Popularity:<span class="card__description-accent"> ${d}</span>
                            </p>
                        </div>
                   </div>
                   <button id="${s}" class="card__btn js-btn js-object" data-jsname="btn1${s}"  type="button">
                        <svg class="card__icon js-btn "  >
                           
                            <use class="js-btn" href="${u}"></use>
                        </svg>
                    </button>
                    <button id="${s}" class="card__btn js-object js-btn" data-jsname="check${s}" >
                    <svg  class="card__icon js-btn">
                            <use href="${p}"></use>
                        </svg></button>
                        </div> 
                   </li>    
                      
    `).join("")},dicountCard:async function(){const s=new v;s.discountList.innerHTML="";const o=await fetchAPI.discount(),c=[];let i=0;for(o.length<2?i=o.length:i=2;i>0;i--){let a=Math.floor(Math.random()*o.length);c.push(o[a]),o.splice(a,1)}let n=localStorageApi.loadCart();const d=[];"products"in n&&(n=n.products,n.forEach(a=>d.push(a.productId)));const r=[];c.forEach(a=>{let y=u;d.includes(a._id)&&(y=p),r.push(`
            <li class="discount-list-item discount-show" data-productId="${a._id}">
                <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${a._id}">
                  <use href="${discountIcon}" class="discount-show"  data-productId="${a._id}"></use>
                </svg>
                <div class="discount-image-box discount-show"  data-productId="${a._id}">
                  <img
                    class="discount-image discount-show"
                    src="${a.img}"
                    width="114"
                    height="114"
                    alt="${a.name}"
                    data-productId="${a._id}"
                  />
                </div>
                <div class="discount-description discount-show"  data-productId="${a._id}">
                  <p class="discount-title discount-show"  data-productId="${a._id}">${a.name}</p>
                  <div class="discount-description-price discount-show"  data-productId="${a._id}">
                    <span class="discount-price discount-show"  data-productId="${a._id}">$${a.price}</span>
                    <button type="button" class="discount-icon-box discount-buy" data-productId="${a._id}">
                      <svg width="18" height="18" class="discount-cart discount-buy" data-productId="${a._id}">
                        <use href="${y}" class="js-object discount-buy" data-jsname="discountIcon${a._id}" data-productId="${a._id}"></use>
                      </svg>
                    </button>
                  </div>
                </div>
             </li>
            `)})}},f=document.querySelector(".filter__card-list"),m=document.querySelector(".filter__empty");let g=6;async function C(e){screen.width>=768&&(g=8),screen.width>=1440&&(g=9),await b.products({limit:g,params:e}).then(t=>(console.log(t),t||(f.style.display="none",m.style.display="block"),f.style.display="flex",m.style.display="none",f.innerHTML=$.mainCatd(t.results),S(t))).catch(t=>console.log(t))}const _=document.querySelector(".popular__list");async function x(){await b.popular().then(e=>(e||(_.style.display="none"),_.style.display="flex",_.innerHTML=$.popularCard(e),console.log(e),e)).catch(e=>console.log(e))}U();C();x();
//# sourceMappingURL=index-c55e89aa.js.map
