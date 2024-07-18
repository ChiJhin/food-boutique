import fetchApi from './service/fetchApi';
import SlimSelect from 'slim-select';

const categories = document.getElementById('category');

export default async function category() {
  await fetchApi
    .categories()
    .then(data => {
      categories.insertAdjacentHTML('beforeend', markupFilter(data));
      let select = new SlimSelect({
        select: '#category',
        settings: {
          showSearch: false,
          openPosition: 'down',
          placeholderText: 'Categories',
        },
      });
    })
    .catch(error => console.log(error));
}

function markupFilter(params) {
  return params
    .map(category => `<option value="${category}">${category}</option>`)
    .join('');
}
