import fetchApi from './service/fetchApi';
import paginy from './service/pagination';
import cards from './cards';

const cardList = document.querySelector('.filter__card-list');
const filter = document.querySelector('.filter__full');
const cardListEmty = document.querySelector('.filter__empty');

let limit = 6;

export default async function getProducts(page, params) {
  if (screen.width >= 768) {
    limit = 8;
  }
  if (screen.width >= 1440) {
    limit = 9;
  }

  await fetchApi
    .products({ limit: limit, page: page, params })
    .then(data => {
      if (!data) {
        filter.style.display = 'none';
        cardListEmty.style.display = 'block';
      }

      filter.style.display = 'block';
      cardListEmty.style.display = 'none';

      cardList.innerHTML = cards.mainCard(data.results);

      cards.checkBtn(data.results);

      return paginy(data);
    })
    .catch(error => console.log(error));
}
