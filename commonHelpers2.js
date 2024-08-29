var st=Object.defineProperty;var nt=(e,t,o)=>t in e?st(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var $=(e,t,o)=>(nt(e,typeof t!="symbol"?t+"":t,o),o);import{S as l,F as f,C as r,u as b,i as u}from"./assets/icons-aa3fcac5.js";import{l as ct,b as it}from"./assets/vendor-3d670edc.js";at();function at(){document.querySelectorAll(".food-letter").forEach((t,o)=>{setTimeout(()=>{t.style.animation="none",t.offsetHeight,t.style.animation=null},o*100)})}const y=l.FILTER_KEY,x=[{name:"A to Z",key:"byABC",value:!0},{name:"Z to A",key:"byABC",value:!1},{name:"Least Expensive",key:"byPrice",value:!0},{name:"Most Expensive",key:"byPrice",value:!1},{name:"Least Popular",key:"byPopularity",value:!0},{name:"Most Popular",key:"byPopularity",value:!1},{name:"Show All",key:void 0,value:void 0}],rt=x[0],M={keyword:void 0,category:void 0,sortBy:rt,page:1,limit:9},dt=5;class d{static get(){return l.get(y)??M}static getValueByKey(t){return d.get()[t]}static async getCategories(){let t=l.get(l.CATEGORIES_KEY);if(!t)try{t=await f.getCategories(),t=t.filter(o=>!o.includes(" ")),l.set(l.CATEGORIES_KEY,t)}catch(o){console.error("FoodBotiqueApi.getCategories error",o)}return t??[]}static getSortList(){return x}static async getDiscountedProducts(t=2){let o=l.getWithExpiry(l.DISCOUNTED_PRODUCTS_KEY);if(!o)try{o=await f.getDiscountedProducts(),l.setWithExpiry(l.DISCOUNTED_PRODUCTS_KEY,o)}catch(n){console.error("FoodBotiqueApi.getDiscountedProducts error",n)}return o.sort(()=>Math.random()-.5).slice(0,t)??[]}static async getPopularProducts(t=5){let o=l.getWithExpiry(l.POPULAR_PRODUCTS_KEY);if(!o)try{o=await f.getPopularProducts(dt),l.setWithExpiry(l.POPULAR_PRODUCTS_KEY,o)}catch(n){console.error("FoodBotiqueApi.getPopularProducts error",n)}return o.slice(0,t)??[]}static setKeyword(t){const o=d.get();l.set(y,{...o,keyword:t,page:1})}static setCategory(t){const o=d.get();l.set(y,{...o,category:t,page:1})}static setPage(t){const o=d.get();l.set(y,{...o,page:t})}static setLimit(t){const o=d.get();l.set(y,{...o,limit:t,page:1})}static setSortBy(t,o){const n=d.get();console.log(t,o),l.set(y,{...n,page:1,sortBy:x.find(s=>s.key===t&&s.value===JSON.parse(o))})}static reset(){l.set(y,M)}}class S{constructor(t=null){$(this,"loader");$(this,"container");this.createLoader(),this.container=t}createLoader(){const t=document.createElement("div");t.classList.add("loader"),this.loader=document.createElement("div"),this.loader.classList.add("loader-container"),this.loader.appendChild(t)}show(){this.container.style.position="relative",this.container.appendChild(this.loader)}remove(){this.loader.remove()}}const j=document.querySelector(".discount-container"),R=new S(j);function lt(){R.show(),d.getDiscountedProducts().then(e=>{const t=document.querySelector(".discount-list");t&&t.remove();const o=e.map(ut),n=document.createElement("ul");n.className="discount-list",o.map(s=>{const c=s.dataset.productId,a=!!r.getProduct(c);s.querySelector(".discount-button-icon-cart").style.display=a?"none":"block",s.querySelector(".discount-button-icon-check").style.display=a?"block":"none",n.appendChild(s)}),j.appendChild(n),n.addEventListener("click",({target:s})=>{const c=s.closest("LI"),a=s.closest("BUTTON");if((c==null?void 0:c.nodeName)!=="LI")return;const i=c.dataset.productId;if((a==null?void 0:a.nodeName)!=="BUTTON"){N(i);return}(a==null?void 0:a.nodeName)==="BUTTON"&&(!!r.getProduct(i)?r.delete(i):r.add(e.find(_=>_._id===i)),b(),k(i),P(i),L(i))})}).finally(()=>R.remove())}function k(e){const t=document.querySelector(`.discount-item[data-product-id="${e}"]`);if(!t)return;const o=!!r.getProduct(e);t.querySelector(".discount-button-icon-cart").style.display=o?"none":"block",t.querySelector(".discount-button-icon-check").style.display=o?"block":"none"}function ut({_id:e,img:t,name:o,price:n}){const s=document.createElement("li");return s.className="discount-item",s.dataset.productId=e,s.innerHTML=`
    <div class="discount-photo-container">
        <img
           class="discount-img"
           src="${t}"
           alt="${o}"
           width="114"
           height="114"
           loading="lazy"
        />
        <svg class="discount-icon" width="32" height="32">
            <use href="${u}#icon-discount"></use>
        </svg>
   </div>
   <div class="discount-info-container">
        <h3 class="discount-product-name">${o}</h3>
        <p class="discount-product-price">$${n.toFixed(2)}</p>
        <button type="button" class="discount-btn" aria-label="discount product">
            <svg class="discount-button-icon-cart" width="18" height="18">
                <use href="${u}#icon-shopping-cart"></use>
            </svg>
            <svg class="discount-button-icon-check" width="18" height="18">
                 <use href="${u}#icon-check"></use>
            </svg>
        </button>
    </div>
 `,s}const G=document.querySelector(".popular-products-container"),H=new S(G);function Z(){H.show();let e=5;window.innerWidth<1440&&(e=2),window.innerWidth<768&&(e=5),d.getPopularProducts(e).then(t=>{const o=document.querySelector(".popular-products-list");o&&o.remove();const n=t.map(pt),s=document.createElement("ul");s.className="popular-products-list",n.map(c=>{const a=c.dataset.productId,i=!!r.getProduct(a);c.querySelector(".basket-button").style.display=i?"none":"block",c.querySelector(".basket-button-icon-check").style.display=i?"block":"none",s.appendChild(c)}),G.appendChild(s),s.addEventListener("click",({target:c})=>{const a=c.closest("LI"),i=c.closest("BUTTON");if((a==null?void 0:a.nodeName)!=="LI")return;const p=a.dataset.productId;if((i==null?void 0:i.nodeName)!=="BUTTON"){N(p);return}(i==null?void 0:i.nodeName)==="BUTTON"&&(!!r.getProduct(p)?r.delete(p):r.add(t.find(E=>E._id===p)),b(),k(p),P(p),L(p))})}).finally(()=>H.remove())}function L(e){const t=document.querySelector(`.popular-products-item[data-product-id="${e}"]`);if(!t)return;const o=!!r.getProduct(e);t.querySelector(".basket-button").style.display=o?"none":"block",t.querySelector(".basket-button-icon-check").style.display=o?"block":"none"}function pt({_id:e,img:t,name:o,is10PercentOff:n,category:s,size:c,popularity:a}){const i=document.createElement("li");return i.className="popular-products-item",i.dataset.productId=e,i.innerHTML=`
    <div class="popular-products-img-container">
      <img class="popular-products-img" src="${t}" alt="${o}" width="56" height="56" loading="lazy"/>
      <svg class="popular-products-discount-icon" width="20" height="20"
      style="${n?"":"display:none"}">
        <use href="${u}#icon-discount"></use>
      </svg>
    </div>

    <div class="popular-products-description-thumb">
      <h3 class="popular-products-name">${o}</h3>
      <button class="basket-button" type="button" aria-label="basket shopping">
        <svg class="popular-products-cart-icon" width="12" height="12">
          <use href="${u}#icon-shopping-cart"></use>
        </svg>
      </button>
      <button class="basket-button-icon-check" aria-label="basket check">
        <svg class="popular-products-icon-check" width="12" height="12">
          <use href="${u}#icon-check"></use>
        </svg>
      </button> 

      <div class="popular-products-description-container">
        <p class="popular-products-description">
          Category:
          <span class="popular-description">
            ${s.replaceAll("_"," ")}
          </span>
        </p>

        <p class="popular-products-description">
          Size:
          <span class="popular-description">${c}</span>
        </p>

        <p class="popular-products-description">
          Popularity:
          <span class="popular-description">${a}</span>
        </p>
      </div>
    </div>
  `,i}const g=document.querySelector(".modal-background"),I=document.querySelector(".modal"),W=new S(I);async function N(e){try{g.classList.remove("is-hidden"),document.body.classList.add("is-modal-open"),I.innerHTML=`
      <button type="button" class="modal-close-btn" aria-label="modal close">
        <svg class="modal-icon-close" width="22" height="22">
          <use href="${u}#icon-x-close"></use>
        </svg>
      </button>
    `,W.show();const t=await f.getProduct(e);I.insertAdjacentHTML("beforeend",mt(t));const o=r.getProduct(e);J(!!o),document.querySelector(".modal-btn").addEventListener("click",()=>C(t)),document.querySelector(".modal-close-btn").addEventListener("click",w),g.addEventListener("click",Q),document.addEventListener("keydown",X);const n=document.querySelector(".quantity");n.textContent=(o==null?void 0:o.amount)??1,document.querySelector('button[data-action="decrement"]').addEventListener("click",()=>{const s=n.textContent-1;n.textContent=s,s<1?(n.textContent=1,r.getProduct(e)&&C(t)):r.update(t,s)}),document.querySelector('button[data-action="increment"]').addEventListener("click",()=>{const s=Number(n.textContent)+1;n.textContent=s,r.getProduct(e)?r.update(t,s):C(t)})}catch(t){console.error("Error fetching product data:",t.message)}finally{W.remove()}}function mt({img:e,name:t,category:o,size:n,popularity:s,desc:c,price:a}){return`
    <div class="modal-container">
      <div>
        <div class="modal-img">
          <img
            src="${e}"
            alt="${t}"
          />
        </div>
      </div>
      <div class="modal-product-info">
        <h2 class="modal-title">${t}</h2>
        <div class="modal-details">
          <div>
            <span class="modal-subtitle">Category:</span>
            <span class="modal-subtitle-info">
              ${o.replaceAll("_"," ")}
            </span>
          </div>
          <div>
            <span class="modal-subtitle">Size:</span>
            <span class="modal-subtitle-info">${n}</span>
          </div>
          <div>
            <span class="modal-subtitle">Popularity:</span>
            <span class="modal-subtitle-info">${s}</span>
          </div>
        </div>
        <p class="modal-about-product">${c}</p>
      </div>
    </div>
    <div class="modal-price-container">
      <p class="modal-price-product">
        <span>$</span><span class="modal-price">${a}</span>
      </p>
      <div class="quantity-and-add">
        <div class="quantity-in-modal">
          <button type="button" class="minus-btn" data-action="decrement" aria-label="minus quantity product">
            <svg class="minus-btn-icon">
              <use href="${u}#icon-minus"></use>
            </svg>
          </button>

          <span class="quantity">1</span>

          <button type="button" class="plus-btn" data-action="increment" aria-label="plus quantity product">
            <svg class="plus-btn-icon">
              <use href="${u}#icon-plus"></use>
            </svg>
          </button>
        </div>

        <button class="modal-btn" aria-label="add to card">
          <span class="modal-btn-text">Add to</span>
          <svg class="modal-icon-shop" width="18" height="18">
            <use href="${u}#icon-shopping-cart"></use>
          </svg>
        </button>
      </div>
    </div>`}function C(e){let t=!!r.getProduct(e._id);t?(r.delete(e._id),document.querySelector(".quantity").textContent=1):r.add(e),J(!t),b(),P(e._id),L(e._id),k(e._id)}function J(e){const t=document.querySelector(".modal-btn-text");e?t.textContent="Remove from":t.textContent="Add to"}function Q({target:e}){e===g&&w()}function w(){g.classList.add("is-hidden"),document.body.classList.remove("is-modal-open"),document.querySelector(".modal-close-btn").removeEventListener("click",w),g.removeEventListener("click",Q),document.removeEventListener("keydown",X),document.querySelector(".modal-btn").removeEventListener("click",C)}function X({key:e}){e==="Escape"&&w()}const B=document.querySelector(".all-products"),V=new S(B),yt=`<div class="product-list__text__box">
    <p class="product-list__text__one">
      Nothing was found for the selected
      <span class="text__one__span">filters...</span>
    </p>
    <p class="product-list__text__two">
      Try adjusting your search parameters or browse our range by other criteria
      to find the perfect product for you.
    </p>
  </div>`;function ht(e){document.querySelector(".product-list-product__list").addEventListener("click",({target:t})=>{const o=t.closest("LI"),n=t.closest("BUTTON");if((o==null?void 0:o.nodeName)!=="LI")return;const s=o.dataset.productId;if((n==null?void 0:n.nodeName)!=="BUTTON"){N(s);return}(n==null?void 0:n.nodeName)==="BUTTON"&&(!!r.getProduct(s)?r.delete(s):r.add(e.find(a=>a._id===s)),b(),P(s),L(s),k(s))})}function P(e){const t=document.querySelector(`.product-list-product__card[data-product-id="${e}"]`);if(!t)return;const o=!!r.getProduct(e);t.querySelector(".product-list-icon__btn").style.display=o?"none":"block",t.querySelector(".product-list-icon__btn-added").style.display=o?"block":"none"}function vt({page:e,totalPages:t,results:o}){const n=o.map(({_id:c,name:a,img:i,category:p,price:_,size:E,popularity:et,is10PercentOff:ot})=>{const K=!!r.getProduct(c);return`<li class="product-list-product__card" data-product-id=${c}>
      <svg
        class="product-list-icon-discount"
        width="60"
        height="60"
        style="${ot?"":"display:none"}"
      >
        <use href="${u}#icon-discount"></use>
      </svg>
      <div class="product-list-box__img">
        <img
          class="product-list-card__image"
          src="${i}"
          alt="${a}"
          width="140"
          height="140"
          loading="lazy"
        />
      </div>
      <div class="product-list-info__box">
        <h3 class="product-list-name__product">${a}</h3>
        <div class="product-list-info">
          <p class="product-list-info__item">
            <span class="product-list-span__text">Category:</span>
            <span>${p.replaceAll("_"," ")}</span>
          </p>

          <p class="product-list-info__item">
            <span class="product-list-span__text">Size:</span>
            <span>${E}</span>
          </p>
          <p class="product-list-info__item">
            <span class="product-list-span__text">Popularity:</span>
            <span>${et}</span>
          </p>
        </div>
      </div>
      <div class="product-list-price__btn">
        <p class="product-list-price__product">$${_.toFixed(2)}</p>
        <button type="button" class="product-list-button__card" aria-label="product button">
          <svg
            class="product-list-icon__btn"
            width="18"
            height="18"
            style="${K?"display:none":""}"
          >
            <use href="${u}#icon-shopping-cart"></use>
          </svg>
          <svg
            class="product-list-icon__btn-added"
            width="18"
            height="18"
            style="${K?"display:block":"display:none"}"
          >
            <use href="${u}#icon-check"></use>
          </svg>
         </button>
      </div>
    </li>`}).join("");let s="";if(t>1){const c=[];for(let i=1;i<=t;i++)c.push(i);t>5&&(e<=2||t-e<2?c.splice(2,t-4,"..."):(c.length-e!==2&&c.splice(e,c.length-e-1,"..."),e!==3&&c.splice(1,e-2,"...")));const a=c.map(i=>`<li class="product-list-page__item ${i===e?"active":i==="..."?"not-number":""}" data-page-number="${i}">${i}</li>`).join("");s=`
      <div class="product-list-pagination">
          <div class="product-list-pagination__list">
            <div
              class="product-list-page__item nav__btn"
              data-page-number="left"
              ${e===1?"disabled":""}
            >
              <svg class="icon__arrow" width="24" height="24">
                <use href="${u}#icon-arrow-left"></use>
              </svg>
            </div>
            <ul class="product-list-page__numbers">
              ${a}
            </ul>
            <div
              class="product-list-page__item nav__btn"
              data-page-number="right"
              ${e===t?"disabled":""}
            >
              <svg class="icon__arrow" width="24" height="24">
                <use href="${u}#icon-arrow-right"></use>
              </svg>
            </div>
          </div>
      </div>
    `}B.innerHTML=`
      <h2 class="visually-hidden">Filtered Products</h2>
      <ul class="product-list-product__list">
        ${n}
      </ul>
      ${s}
  `,s&&document.querySelector(".product-list-pagination__list").addEventListener("click",({target:c})=>{const a=c.closest(".product-list-page__item");if(!a)return;let i=a.dataset.pageNumber;i!=="..."&&(i==="left"&&(i=e>1?e-1:e,e===1)||i==="right"&&(i=t-e>0?e+1:e,e===t)||(d.setPage(i),v(),ft("#filters")))})}async function v(){try{let e=9;window.innerWidth<1440&&(e=8),window.innerWidth<768&&(e=6),d.getValueByKey("limit")!==e&&d.setLimit(e),V.show();const t=await f.getProducts(d.get());t.results.length?(vt(t),ht(t.results)):B.innerHTML=yt}catch(e){console.error(e)}finally{V.remove()}}function ft(e){const t=document.querySelector(e),o=document.querySelector(".header");t&&window.scrollTo({top:t.offsetTop-o.offsetHeight,behavior:"smooth"})}const m=document.querySelector(".select-menu"),gt=m.querySelector(".select-btn"),q=m.querySelector(".sBtn-text"),h=document.querySelector(".select-menu-category"),bt=h.querySelector(".select-btn-custom"),T=h.querySelector(".sBtn-text-select"),_t=document.querySelector(".search-form"),Ct=document.getElementById("search-icon"),O=document.getElementById("search-item"),Y=d.getValueByKey("keyword");Y&&(O.value=Y);function A(){D(null)}function D(e){document.querySelectorAll(".select-menu, .select-menu-category").forEach(o=>{o!==e&&o.classList.contains("active")&&o.classList.remove("active")}),document.removeEventListener("click",A)}St();gt.addEventListener("click",e=>{D(m),m.classList.toggle("active"),e.stopPropagation(),m.classList.contains("active")&&document.addEventListener("click",A)});bt.addEventListener("click",e=>{D(h),h.classList.toggle("active"),e.stopPropagation(),h.classList.contains("active")&&document.addEventListener("click",A)});function St(){const e=document.createElement("ul");e.className="options";const t=d.getValueByKey("sortBy");t!=null&&t.name&&(q.innerText=t.name),d.getSortList().forEach(o=>{const n=document.createElement("li");n.className="option",n.dataset.sortByKey=o.key,n.dataset.sortByValue=o.value;const s=document.createElement("span");s.className="option-text",s.textContent=o.name,q.innerText===s.textContent&&n.classList.add("active"),n.appendChild(s),e.appendChild(n)}),m.appendChild(e),m.addEventListener("click",function(o){const n=o.target.closest(".option");if(n){let s=n.firstChild.innerText;q.innerText=s,m.classList.remove("active");const c=e.querySelector(".option.active");c&&c.classList.remove("active"),n.classList.add("active"),d.setSortBy(n.dataset.sortByKey,n.dataset.sortByValue),v()}})}d.getCategories().then(e=>{const t=document.createElement("ul");t.className="options";const o=d.getValueByKey("category");o&&(T.innerText=o.replace(/_/g," ")),e.push("Show All"),e.forEach(n=>{const s=document.createElement("li");s.className="option-category",n!=="Show All"&&(s.dataset.originalCategory=n);const c=document.createElement("span");c.className="option-text",c.textContent=n.replace(/_/g," "),T.innerText===c.textContent&&s.classList.add("active"),s.appendChild(c),t.appendChild(s)}),h.appendChild(t),t.addEventListener("click",function(n){const s=n.target.closest(".option-category");if(s){let c=s.dataset.originalCategory;T.innerText=s.textContent,h.classList.remove("active");const a=t.querySelector(".option-category.active");a&&a.classList.remove("active"),s.classList.add("active"),d.setCategory(c),v()}})});_t.addEventListener("submit",U);Ct.addEventListener("click",U);O.addEventListener("focusout",U);function U(e){e.preventDefault();const t=O.value.trim();t!==d.getValueByKey("keyword")&&(d.setKeyword(t),v())}const z=document.querySelector(".scroll-up");document.addEventListener("scroll",ct(kt,400));function kt(){const e=window.scrollY,t=document.documentElement.clientHeight;e>t?z.classList.add("scroll-up-is-hidden"):z.classList.remove("scroll-up-is-hidden")}const Lt=768,wt=1440;b();v();Z();lt();let F=tt(window.innerWidth);window.addEventListener("resize",it(()=>{const e=tt(window.innerWidth);F!==e&&(F=e,v(),Z())},300));function tt(e){switch(!0){case e<Lt:return"mobile";case e>=wt:return"desktop";default:return"tablet"}}
//# sourceMappingURL=commonHelpers2.js.map
