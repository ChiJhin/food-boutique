import fetchApi from './service/fetchApi';
import cards from './cards';
const discountList = document.querySelector('.discount__list');

export default async function getDiscount() {
  await fetchApi
    .discount()
    .then(data => {
      if (!data) {
        discountList.style.display = 'none';
      }

      discountList.style.display = 'flex';

      discountList.innerHTML = cards.dicountCard(data);

      return data;
    })
    .catch(error => console.log(error));
}
