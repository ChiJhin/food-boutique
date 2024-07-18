import{a as d,S as L,P as j}from"./vendor-d1d8eb77.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();const p={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await d.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await d.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await d.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await d.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(e){throw e}},products:async function(t={}){try{const e={params:t};return(await d.get(this._baseURL+this._productsURL,e)).data}catch(e){throw e}},subscribe:async function(t){try{const e={email:t},c=await d.post(this._baseURL+this._subscriptionURL,e);return console.log(c),c}catch(e){throw e}},order:async function(t){try{return(await d.post(this._baseURL+this._orderURL,t)).data}catch(e){throw e}}},E=document.getElementById("category");async function S(){await p.categories().then(s=>{E.insertAdjacentHTML("beforeend",U(s)),new L({select:"#category",settings:{showSearch:!1,openPosition:"down",placeholderText:"Categories"}})}).catch(s=>console.log(s))}function U(s){return s.map(t=>`<option value="${t}">${t}</option>`).join("")}async function R({perPage:s,totalPages:t,page:e}){const c={totalItems:t*s,itemsPerPage:s,visiblePages:5,page:e,centerAlign:!0};(await new j("pagination",c)).on("beforeMove",function(a){const n=a.page;w(n)})}const l="/food-boutique/assets/icons-67d75302.svg",u={mainCard:function(t){return t.map(({category:c,img:o,name:a,popularity:n,price:r,size:_,_id:i,is10PercentOff:f})=>`
                <li class="card__item js-object" id="${i}" data-productId="${i}">
                  <div class="card__wrap">
                    <div class="card__image-wrap">

                      <img src="${o}" alt="${a}" class="card__image" loading="lazy"/>

                    </div>
                    <h2 class="card__title">${a}</h2>
                    <div class="card__description">
                      <p class="card__text">
                        Category: <span class="card__accent">${c}</span>
                      </p>
                      <p class="card__text">Size: <span class="card__accent">${_}</span></p>
                      <p class="card__text">
                        Popularity: <span class="card__accent">${n}</span>
                      </p>
                    </div>
                    <div class="card__order">

                      <p class="card__price">$${r}</p>

                      <button
                        id="${i}"
                        class="card__btn js-btn-buy js-object"
                        data-jsname="buy${i}"
                        type="button"
                      >
                        <svg class="card__icon js-btn">
                          <use class="js-btn" href="${l}#discount-cart"></use>
                        </svg>
                      </button>
                      <button
                        id="${i}"
                        class="card__btn js-btn-check js-object"
                        data-jsname="check${i}"
                        type="button"
                      >
                        <svg class="card__icon card__icon--checked js-btn">
                          <use class="js-btn" href="${l}#check-mark-icon"></use>
                        </svg>
                      </button>
                       
                    </div>
                  </div>
                </li>
                `).join("")},popularCard:function(t){return t.map(({_id:c,img:o,name:a,category:n,size:r,popularity:_})=>` 
        <li class ="card__item" data-productid="${c}" >
            <div id ="${c}" class="card">
                  <div class="card__image-wrap">
                        <img class = "card__image" src="${o}" alt="${a}" loading="lazy" />
                  </div>
                
                <div class="card__description">
                        <h3 class="card__title">${a}</h3>      
                        <p class="card__text card__description-category">
                            Category: <span class="card__accent"> ${n}</span>
                        </p>
                        <div class="card__description-info">
                            <p class="card__text">
                                Size: <span class="card__accent"> ${r}</span>
                            </p>
                            <p class="card__text">
                                Popularity: <span class="card__accent"> ${_}</span>
                            </p>
                        </div>
                   </div>
                    <button
                        id="${c}"
                        class="card__btn js-btn-buy js-object"
                        data-jsname="buy${c}"
                        type="button"
                      >
                        <svg class="card__icon">
                          <use class="js-btn" href="${l}#discount-cart"></use>
                        </svg>
                      </button>
                      <button
                        id="${c}"
                        class="card__btn js-btn-check js-object"
                        data-jsname="check${c}"
                        type="button"
                      >
                        <svg class="card__icon card__icon--checked js-btn">
                          <use class="js-btn" href="${l}#check-mark-icon"></use>
                        </svg>
                      </button>
                        </div> 
                   </li>`).join("")},dicountCard:function(t){t.length<2&&t.length;const c=[];let o=Math.floor(Math.random()*t.length),a=o-1;return c.push(t[o],t[a]),c.map(({_id:r,img:_,name:i,price:f})=>`
                                <li class="card__item" data-productId="${r}">
                                  <div id="${r}" class="card">
                                    <div class="card__image-wrap">
                                      <img
                                        class="card__image"
                                        src="${_}"
                                        alt="${i}"
                                        data-productId="${r}"
                                        loading="lazy"
                                      />
                                    </div>

                                    <div class="card__description" data-productId="${r}">
                                      <h3 class="card__description-title">${i}</h3>
                                      <div class="card__order" data-productId="${r}">
                                        <span class="discount-price" data-productId="${r}"> $${f} </span>
                                        <button
                                          id="${r}"
                                          class="card__btn js-btn-buy js-object"
                                          data-jsname="buy${r}"
                                          type="button"
                                        >
                                          <svg class="card__icon">
                                            <use class="js-btn" href="${l}#discount-cart"></use>
                                          </svg>
                                        </button>
                                        <button
                                          id="${r}"
                                          class="card__btn js-btn-check js-object"
                                          data-jsname="check${r}"
                                          type="button"
                                        >
                                          <svg class="card__icon card__icon--checked js-btn">
                                            <use class="js-btn" href="${l}#check-mark-icon"></use>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
            `).join("")},checkBtn:function(t){return t.map(e=>{const c=document.querySelector(`[data-jsname=check${e._id}]`);c&&(c.style.display="none")})}},C=document.querySelector(".filter__card-list"),g=document.querySelector(".filter__full"),v=document.querySelector(".filter__empty");let h=6;async function w(s,t){screen.width>=768&&(h=8),screen.width>=1440&&(h=9),await p.products({limit:h,page:s,params:t}).then(e=>(e||(g.style.display="none",v.style.display="block"),g.style.display="block",v.style.display="none",C.innerHTML=u.mainCard(e.results),u.checkBtn(e.results),R(e))).catch(e=>console.log(e))}const q=document.querySelector(".popular__list"),m=document.querySelector(".popular");async function M(){await p.popular().then(s=>{s||(m.style.display="none"),m.style.display="block",q.innerHTML=u.popularCard(s),u.checkBtn(s)}).catch(s=>(console.log(s),m.style.display="none"))}const P=document.querySelector(".discount__list"),y=document.querySelector(".discount");async function x(){await p.discount().then(s=>{s||(y.style.display="none"),y.style.display="block",P.innerHTML=u.dicountCard(s),u.checkBtn(s)}).catch(s=>(console.log(s),y.style.display="none"))}const b={_closeModalBtn:document.querySelector(".js-close-subscribe"),_backdrop:document.querySelector(".js-backdrop-subscribe"),_modal:document.querySelector(".modal__subscribe"),ESC_KEY_CODE:"Escape",open:function(){window.addEventListener("keydown",this.esc.bind(this)),this._closeModalBtn.addEventListener("click",this.close.bind(this)),this._backdrop.addEventListener("click",this.backdrop.bind(this)),document.body.classList.add("show-modal-subscribe")},close:function(){window.removeEventListener("keydown",this.esc.bind(this)),this._closeModalBtn.removeEventListener("click",this.close.bind(this)),this._backdrop.removeEventListener("click",this.backdrop.bind(this)),document.body.classList.remove("show-modal-subscribe")},backdrop:function(t){t.currentTarget===t.target&&this.close()},esc:function(t){t.code===this.ESC_KEY_CODE&&this.close()}},k=document.querySelector(".footer__form");async function B(s){s.preventDefault();const t=s.target.elements.email.value;await p.subscribe(t).then(e=>{b._modal.innerHTML=`
      
        
          <div class="modal__title--wrap">
          <p class="modal__title">
            Thanks for subscribing for
            <span class="modal__accent-text">new</span>
            products
          </p>
        </div>
        <div class="modal__description--wrap">
          <p class="modal__description">
            We promise you organic and high-quality products that will meet your
            expectations. Please stay with us and we promise you many pleasant
            surprises.
          </p>
        </div>
        <img
        class="modal__food-basket"
        src="./img/Rectangle 2.png"
        alt="Кошик з фруктамі"
      />
      
            `,b.open(),k.reset()}).catch(e=>{b._modal.innerHTML=`
     
        
      <div class="modal__title--wrap">
        <p class="modal__title">
          This
          <span class="modal__accent-text">email address </span>
          has already been entered
        </p>
      </div>
      <div class="modal__description--wrap">
        <p class="modal__description">
          You have already subscribed to our new products. Watch for offers at
          the mailing address.
        </p>
      </div>
      `,b.open()})}const $={_closeModalBtn:document.querySelector(".js-close-order"),_backdrop:document.querySelector(".js-backdrop-order"),_modal:document.querySelector(".modal__order"),ESC_KEY_CODE:"Escape",open:function(){window.addEventListener("keydown",this.esc.bind(this)),this._closeModalBtn.addEventListener("click",this.close.bind(this)),this._backdrop.addEventListener("click",this.backdrop.bind(this)),document.body.classList.add("show-modal-order")},close:function(){window.removeEventListener("keydown",this.esc.bind(this)),this._closeModalBtn.removeEventListener("click",this.close.bind(this)),this._backdrop.removeEventListener("click",this.backdrop.bind(this)),document.body.classList.remove("show-modal-order")},backdrop:function(t){t.currentTarget===t.target&&this.close()},esc:function(t){t.code===this.ESC_KEY_CODE&&this.close()}};async function T(s){await p.product(s).then(t=>{$._modal.innerHTML=`
              <div class="order__main">
                <div class="order__image-wrap">
                  <img
                    src="${t.img}"
                    alt="${t.name}"
                    class="order__image"
                    loading="lazy"
                  />
                </div>
                <div class='order__aside'>
                  <div class="order__info">
                    <h2 class="order__info-title">${t.name}</h2>
                    <div class="order__params">
                      <div class="order__params-top">
                        <p class="order__info-text">
                          Category:
                          <span class="order__accent">${t.category}</span>
                        </p>
                        <p class="order__info-text">
                          Size: <span class="order__accent">${t.size}</span>
                        </p>
                      </div>
                      <p class="order__info-text">
                        Popularity:
                        <span class="order__accent">${t.popularity}</span>
                      </p>
                    </div>
                  </div>
                  <p class="order__description">${t.desc}</p>
                </div>
              </div>
              <div class="order__bottom">
                <p class="order__price">$${t.price}</p>
                <button
                  id="${t._id}"
                  class="order__btn order__btn--add js-btn-buy js-object"
                  data-jsname="buy${t._id}"
                  type="button"
                >
                  <span class="order__add">Add to</span>
                  <svg class="order__icon js-btn">
                    <use class="js-btn" href="${l}#discount-cart"></use>
                  </svg>
                </button>
              </div>
            `,$.open()}).catch(t=>{console.log(t)})}function I(){document.querySelector("main").addEventListener("click",t=>{const e=t.target.closest(".card__item");e&&T(e.dataset.productid)})}S();w();M();x();k.addEventListener("submit",B);I();
//# sourceMappingURL=index-70d556b6.js.map
