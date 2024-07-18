import fetchApi from '../service/fetchApi'; //Підключив функцію запитів на сервер
import orderHelper from '../helpers/orderHelper';
import icon from '/img/icons.svg';

// ------------Перевірка наявності імейлу на сервері та відмальовування вмісту модалки--------------

async function order(id) {
  await fetchApi
    .product(id)
    .then(responce => {
      orderHelper._modal.innerHTML = `
              <div class="order__main">
                <div class="order__image-wrap">
                  <img
                    src="${responce.img}"
                    alt="${responce.name}"
                    class="order__image"
                    loading="lazy"
                  />
                </div>
                <div class='order__aside'>
                  <div class="order__info">
                    <h2 class="order__info-title">${responce.name}</h2>
                    <div class="order__params">
                      <div class="order__params-top">
                        <p class="order__info-text">
                          Category:
                          <span class="order__accent">${responce.category}</span>
                        </p>
                        <p class="order__info-text">
                          Size: <span class="order__accent">${responce.size}</span>
                        </p>
                      </div>
                      <p class="order__info-text">
                        Popularity:
                        <span class="order__accent">${responce.popularity}</span>
                      </p>
                    </div>
                  </div>
                  <p class="order__description">${responce.desc}</p>
                </div>
              </div>
              <div class="order__bottom">
                <p class="order__price">$${responce.price}</p>
                <button
                  id="${responce._id}"
                  class="order__btn order__btn--add js-btn-buy js-object"
                  data-jsname="buy${responce._id}"
                  type="button"
                >
                  <span class="order__add">Add to</span>
                  <svg class="order__icon js-btn">
                    <use class="js-btn" href="${icon}#discount-cart"></use>
                  </svg>
                </button>
              </div>
            `;

      orderHelper.open();
    })
    .catch(error => {
      console.log(error);
    });
}

export function orderProduct() {
  const main = document.querySelector('main');

  main.addEventListener('click', event => {
    const target = event.target.closest('.card__item');

    if (!target) {
      return;
    }

    order(target.dataset.productid);
  });
}
