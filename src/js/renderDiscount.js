import fetchApi from './service/fetchApi';
import cards from './cards';

const discountList = document.querySelector('.discount__list');
const discount = document.querySelector('.discount');

export default async function getDiscount() {
  await fetchApi
    .discount()
    .then(data => {
      if (!data) {
        discount.style.display = 'none';
      }

      discount.style.display = 'block';

      discountList.innerHTML = cards.dicountCard(data);

      cards.checkBtn(data);

      return;
    })
    .catch(error => {
      return console.log(error), (discount.style.display = 'none');
    });
}
