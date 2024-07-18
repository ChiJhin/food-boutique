import fetchApi from './service/fetchApi';
import cards from './cards';

const popularList = document.querySelector('.popular__list');
const popular = document.querySelector('.popular');

export default async function getPopular() {
  await fetchApi
    .popular()
    .then(data => {
      if (!data) {
        popular.style.display = 'none';
      }

      popular.style.display = 'block';

      popularList.innerHTML = cards.popularCard(data);

      cards.checkBtn(data);

      return;
    })
    .catch(error => {
      return console.log(error), (popular.style.display = 'none');
    });
}
