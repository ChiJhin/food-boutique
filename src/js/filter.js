import fetchApi from './service/fetchApi';
import SlimSelect from 'slim-select';
import '../../node_modules/slim-select/dist/slimselect.css';
import '../css/components/filter.css';

const categories = document.getElementById('category');
console.log(categories);

fetchApi
  .categories()
  .then(data => {
    console.log(data);

    categories.insertAdjacentHTML('afterbegin', markupFilter(data));
    new SlimSelect({
      select: '#category',
      settings: {
        showSearch: false,
        openPosition: 'down',
        placeholderText: 'Categories',
      },
    });
  })
  .catch(error => console.log(error));

function markupFilter(params) {
  return params
    .map(category => `<option value="${category}">${category}</option>`)
    .join('');
}
