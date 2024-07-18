import fetchApi from '../service/fetchApi'; //Підключив функцію запитів на сервер

import subscribeHelper from '../helpers/subscribeHelper';

export const form = document.querySelector('.footer__form'); //Експортую змінну для підключення у "maim.js"

// ------------Перевірка наявності імейлу на сервері та відмальовування вмісту модалки--------------

export async function postEmail(params) {
  params.preventDefault();

  const email = params.target.elements.email.value;

  await fetchApi
    .subscribe(email)
    .then(responce => {
      subscribeHelper._modal.innerHTML = `
      
        
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
      
            `;
      subscribeHelper.open();
      form.reset();
    })
    .catch(error => {
      subscribeHelper._modal.innerHTML = `
     
        
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
      `;
      subscribeHelper.open();
    });
}
