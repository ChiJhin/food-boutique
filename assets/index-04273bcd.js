import{a as l,S as w,P as j}from"./vendor-d1d8eb77.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();class v{constructor(){const t=document.querySelectorAll(".js-object");for(let s=0;s<t.length;s++)"dataset"in t[s]&&"jsname"in t[s].dataset&&(this[t[s].dataset.jsname]=t[s])}refresh(){for(let s in this)s in this&&delete this[s];const t=document.querySelectorAll(".js-object");for(let s=0;s<t.length;s++)"dataset"in t[s]&&"jsname"in t[s].dataset&&(this[t[s].dataset.jsname]=t[s])}}const h={_filterID:"filter-food_boutique",_cartID:"cart-food_boutique",_save:function(t,s){try{const c=JSON.stringify(s);localStorage.setItem(t,c)}catch(c){throw c}},_load:function(t){try{const s=localStorage.getItem(t);return s===null?{}:JSON.parse(s)}catch(s){throw s}},_delete:function(t){try{localStorage.removeItem(t)}catch(s){throw s}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t)},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}},I=new v;console.log(I.batman);h.saveFilter({keyA:"A"});console.log("test: ",h.loadFilter());h.saveFilter({KeyB:"B"});console.log("test: ",h.loadFilter());const $={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await l.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await l.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await l.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await l.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(s){throw s}},products:async function(t={}){try{const s={params:t};return(await l.get(this._baseURL+this._productsURL,s)).data}catch(s){throw s}},subscribe:async function(t){try{const s={email:t};return await l.post(this._baseURL+this._subscriptionURL,s)}catch(s){throw s}},order:async function(t){try{return(await l.post(this._baseURL+this._orderURL,t)).data}catch(s){throw s}}},_=document.getElementById("category");console.log(_);async function L(){await $.categories().then(e=>{console.log(e),_.insertAdjacentHTML("afterbegin",U(e)),new w({select:"#category",settings:{showSearch:!1,openPosition:"down",placeholderText:"Categories"}})}).catch(e=>console.log(e))}function U(e){return e.map(t=>`<option value="${t}">${t}</option>`).join("")}async function R({perPage:e,totalPages:t,page:s}){const c={totalItems:t*e,itemsPerPage:e,visiblePages:5,page:s,centerAlign:!0};console.log(c),await new j("pagination",c)}const u="/food-boutique/assets/icons-e39e3f57.svg#discount-cart",p="/food-boutique/assets/icons-e39e3f57.svg#discount-checked",y={mainCatd:function(t){return t.map(({category:s,img:c,name:o,popularity:i,price:r,size:d,_id:n,is10PercentOff:a})=>a?`
                <li class="product_card-item js-object" id=${n} data-productId="${n}" >
                     <div class="product_card-wrapper">
                      <div class="card-img-wrapper"><img src="${c}" alt="${o}" class="product_card-image"></div>
                      <h2 class="product_card-name">${o}</h2>
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
                      <p class="product-curd-price">$${r}</p>
                       <button id="${n}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${n}"  type="button">
                                  <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                                      <use class="js-btn" href="${u}"></use>
                                  </svg>
                              </button>
                              <div id="${n}" class="check js-object" data-jsname="check1${n}" >
                              <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                                      <use href="${p}"></use>
                                  </svg></div>
                      </div>
                      </div>
                  </li>
                `:`
      <li class="product_card-item js-object" id=${n} data-productId="${n}" >
    
           <div class="product_card-wrapper">
            <div class="card-img-wrapper"><img src="${c}" alt="${o}" class="product_card-image"></div>
            <h2 class="product_card-name">${o}</h2>
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
            <p class="product-curd-price">$${r}</p>
            
            <button id="${n}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${n}"  type="button">
                        <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                            <use class="js-btn" href="${u}"></use>
                        </svg>
                    </button>
                    <div id="${n}" class="check js-object" data-jsname="check1${n}" >
                    <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                            <use href="${p}"></use>
                        </svg></div>
            </div>
            </div>
        </li>`).join("")},popularCard:function(t){return t.map(({_id:s,img:c,name:o,category:i,size:r,popularity:d})=>` 
        <li class ="cards-item" data-productid="${s}" >
            <div id ="${s}" class="photo-card">
                        <img class = "cards__image" src="${c}" alt="${o}" loading="lazy" />
                     
                </div> 
                <div class=" discount-show">
                        <h3 class="info-title">${o}</h3>      
                        <p class="info-text">
                            Category:<span class="info-span">${i}</span>
                        </p>
                        <wraper class="info-wraper">
                            <p class="info-text">
                                Size:<span class="info-span">${r}</span>
                            </p>
                            <p class="info-text">
                                Popularity:<span class="info-span">${d}</span>
                            </p>
                        </wraper>
                   </div>
                   <button id="${s}" class="popular-products-btn js-btn discount-buy js-object" data-jsname="btn1${s}"  type="button">
                        <svg class="basket-icon-svg js-btn "   width="12" height="12">
                            <use class="js-btn" href="${u}"></use>
                        </svg>
                    </button>
                    <div id="${s}" class="check-btn js-object js-btn" data-jsname="check${s}" >
                    <svg  class="check-icon-svg  discount-buy  js-btn" width="12" height="12">
                            <use href="${p}"></use>
                        </svg></div>
                   </li>    
                      
    `).join("")},dicountCard:async function(){const s=new v;s.discountList.innerHTML="";const c=await fetchAPI.discount(),o=[];let i=0;for(c.length<2?i=c.length:i=2;i>0;i--){let a=Math.floor(Math.random()*c.length);o.push(c[a]),c.splice(a,1)}let r=localStorageApi.loadCart();const d=[];"products"in r&&(r=r.products,r.forEach(a=>d.push(a.productId)));const n=[];o.forEach(a=>{let b=u;d.includes(a._id)&&(b=p),n.push(`
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
                        <use href="${b}" class="js-object discount-buy" data-jsname="discountIcon${a._id}" data-productId="${a._id}"></use>
                      </svg>
                    </button>
                  </div>
                </div>
             </li>
            `)})}},f=document.querySelector(".filter__card-list"),m=document.querySelector(".filter__empty");let g=6;async function C(e){screen.width>=768&&(g=8),screen.width>=1440&&(g=9),await $.products({limit:g,params:e}).then(t=>(console.log(t),console.log(t.results),t||(f.style.display="none",m.style.display="block"),f.style.display="block",m.style.display="none",console.log(y.mainCatd(t.results)),f.innerHTML=y.mainCatd(t.results),R(t))).catch(t=>console.log(t))}L();C();
//# sourceMappingURL=index-04273bcd.js.map
