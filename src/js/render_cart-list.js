import fetchApi from './service/fetchApi';
import paginy from './service/pagination';
import cards from './cards';

const cardList = document.querySelector('.filter__card-list');
const cardListEmty = document.querySelector('.filter__empty');

let limit = 6;

export default async function getProducts(params) {
  if (screen.width >= 768) {
    limit = 8;
  }
  if (screen.width >= 1440) {
    limit = 9;
  }

  await fetchApi
    .products({ limit: limit, params })
    .then(data => {
      console.log(data);
      console.log(data.results);
      if (!data) {
        cardList.style.display = 'none';
        cardListEmty.style.display = 'block';
      }

      cardList.style.display = 'block';
      cardListEmty.style.display = 'none';

      console.log(cards.mainCatd(data.results));

      cardList.innerHTML = cards.mainCatd(data.results);

      return data, paginy(data);
    })
    .catch(error => console.log(error));
}
