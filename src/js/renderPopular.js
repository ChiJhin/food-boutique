import fetchApi from './service/fetchApi';
import cards from './cards';

const popularList = document.querySelector('.popular__list');

export default async function getPopular() {
  await fetchApi
    .popular()
    .then(data => {
      if (!data) {
        popularList.style.display = 'none';
      }

      popularList.style.display = 'flex';

      popularList.innerHTML = cards.popularCard(data);

      return data;
    })
    .catch(error => console.log(error));
}
