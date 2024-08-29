import{u as v,C as c,i as m,F as S}from"./assets/icons-e741ab87.js";import"./assets/vendor-3d670edc.js";const L=document.querySelector(".success-modal-close-btn"),b=document.querySelector(".success-blackdrop"),E=document.querySelector(".success-modal-title"),$=document.querySelector(".success-modal-text");function f(e,t,s=()=>{}){E.textContent=t?"Order success":"Order error",$.textContent=e,document.body.classList.add("is-modal-open"),b.classList.remove("is-hidden"),L.addEventListener("click",function(){b.classList.add("is-hidden"),document.body.classList.remove("is-modal-open"),s()})}v();const x=document.querySelector(".cart"),k=document.querySelector(".empty-cart"),I=document.querySelector(".cart-delete-button"),P=document.querySelector(".cart-sum span"),B=document.querySelector(".cart-added-list"),C=document.querySelector(".cart-basket-input"),g=document.querySelector(".checkout-field");C.value=c.getEmail();function h(){c.clearCart(),p()}I.addEventListener("click",h);g.addEventListener("submit",F);C.addEventListener("focusout",M);q();function p(){v(),q()}function T(){k.style.display="block",x.style.display="none"}function q(){if(c.getCount()===0){T();return}const e=c.getProducts();w(e),l()}function w(e){let t=document.querySelector(".cart-basket-list");t&&t.remove(),t=document.createElement("ul"),t.className="cart-basket-list",e.forEach(s=>{const o=z(s);t.appendChild(o)}),B.appendChild(t),t.addEventListener("click",({target:s})=>{const o=s.closest("LI");if(!o)return;const i=s.closest(".cart-product-delete-button"),u=s.closest(".minus-btn"),d=s.closest(".plus-btn");if(!i&&!u&&!d){console.log("wrong click");return}const r=o.dataset.productId;if(i){c.delete(r),p();return}const n=o.querySelector(".quantity"),y=c.getProduct(r).product;if(u){const a=n.textContent-1;n.textContent=a,a<1?(n.textContent=1,c.delete(r),l(),p()):(c.update(y,a),l())}else{const a=Number(n.textContent)+1;n.textContent=a,c.update(y,a),l()}})}function z({product:e,productId:t,amount:s}){const{name:o="Product name",category:i="Category",size:u="Size",price:d=0,img:r=""}=e,n=document.createElement("li");return n.classList.add("cart-basket-item"),n.dataset.productId=t,n.innerHTML=`
    <button class="cart-product-delete-button" type="button" aria-label="cart product delete">
      <svg class="cart-delete-product-icon" width="18" height="18">
        <use href="${m}#icon-x-close" data-product-id="${t}"></use>
      </svg>
    </button>
    <div class="image-cart-thumb">
      <img class="cart-image" src="${r}" alt="${o}" width="64" />
    </div>
    <div class="cart-description-thumb">
      <h3 class="cart-product-name">${o}</h3>
      <div class="cart-text-description-container">
        <p class="cart-product-description">
          Category:
          <span class="category cart-description">${i}</span>
        </p>
        <p class="cart-product-description">
          Size:
          <span class="size cart-description">${u}</span>
        </p>
      </div>
      <div class="price-and-quantity">
        <span class="cart-price">$${d.toFixed(2)}</span>

        <div class="quantity-in-cart">
            <button type="button" class="minus-btn" aria-label="minus quantity product">
              <svg class="minus-btn-icon">
                <use href="${m}#icon-minus"></use>
              </svg>
            </button>
          <span class="quantity">${s}</span>
            <button type="button" class="plus-btn" aria-label="plus quantity product">
              <svg class="plus-btn-icon">
                <use href="${m}#icon-plus"></use>
              </svg>
            </button>
        </div>
      </div>
    </div>
  `,n}function F(e){e.preventDefault(),S.placeOrder(c.get()).then(t=>f(t.message,!0,h)).catch(t=>f(t.response.data.message,!1))}function M(){const e=g.elements["cart-client-email"].value.trim();c.setEmail(e)}function l(){const e=c.getTotal();P.innerHTML=`$${e.toFixed(2)}`}
//# sourceMappingURL=commonHelpers.js.map
