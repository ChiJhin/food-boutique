import Cart from './services/Cart';
import Filter from './services/Filter';
import updateCartItemCount from './header';
import openModalProductDetails from './modal';
import { reRenderProductCartIcon } from './product-list';
import { reRenderPopularCartIcon } from './popular-products';
import icons from '../img/icons.svg';
import LoadSpinner from './loader';

const discountContainer = document.querySelector('.discount-container');
const loader = new LoadSpinner(discountContainer);

export function getDiscountedProducts() {
  loader.show();
  Filter.getDiscountedProducts()
    .then(products => {
      const existedListElement = document.querySelector('.discount-list');
      if (existedListElement) {
        existedListElement.remove();
      }

      const productElements = products.map(createProductCard);
      const listElement = document.createElement('ul');
      listElement.className = 'discount-list';

      productElements.map(cartElement => {
        const productId = cartElement.dataset.productId;
        const isProductInCart = !!Cart.getProduct(productId);

        cartElement.querySelector('.discount-button-icon-cart').style.display =
          isProductInCart ? 'none' : 'block';
        cartElement.querySelector('.discount-button-icon-check').style.display =
          isProductInCart ? 'block' : 'none';
        listElement.appendChild(cartElement);
      });

      discountContainer.appendChild(listElement);

      listElement.addEventListener('click', ({ target }) => {
        const cartElement = target.closest('LI');
        const cartButton = target.closest('BUTTON');

        if (cartElement?.nodeName !== 'LI') {
          return;
        }

        const productId = cartElement.dataset.productId;

        if (cartButton?.nodeName !== 'BUTTON') {
          openModalProductDetails(productId);
          return;
        }

        if (cartButton?.nodeName === 'BUTTON') {
          const isProductInCart = !!Cart.getProduct(productId);

          if (isProductInCart) {
            Cart.delete(productId);
          } else {
            Cart.add(products.find(e => e._id === productId));
          }

          updateCartItemCount();
          reRenderDiscountedCartIcon(productId);
          reRenderProductCartIcon(productId);
          reRenderPopularCartIcon(productId);
        }
      });
    })
    .finally(() => loader.remove());
}

export function reRenderDiscountedCartIcon(productId) {
  const productCard = document.querySelector(
    `.discount-item[data-product-id="${productId}"]`
  );

  if (!productCard) return;

  const isProductInCart = !!Cart.getProduct(productId);

  productCard.querySelector('.discount-button-icon-cart').style.display =
    isProductInCart ? 'none' : 'block';
  productCard.querySelector('.discount-button-icon-check').style.display =
    isProductInCart ? 'block' : 'none';
}

function createProductCard({ _id, img, name, price }) {
  const card = document.createElement('li');
  card.className = 'discount-item';
  card.dataset.productId = _id;
  card.innerHTML = `
    <div class="discount-photo-container">
        <img
           class="discount-img"
           src="${img}"
           alt="${name}"
           width="114"
           height="114"
           loading="lazy"
        />
        <svg class="discount-icon" width="32" height="32">
            <use href="${icons}#icon-discount"></use>
        </svg>
   </div>
   <div class="discount-info-container">
        <h3 class="discount-product-name">${name}</h3>
        <p class="discount-product-price">$${price.toFixed(2)}</p>
        <button type="button" class="discount-btn" aria-label="discount product">
            <svg class="discount-button-icon-cart" width="18" height="18">
                <use href="${icons}#icon-shopping-cart"></use>
            </svg>
            <svg class="discount-button-icon-check" width="18" height="18">
                 <use href="${icons}#icon-check"></use>
            </svg>
        </button>
    </div>
 `;
  return card;
}
