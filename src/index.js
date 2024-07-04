import category from './js/filter';
import getProducts from './js/render_cart-list';
import getPopular from './js/renderPopular';
import getDiscount from './js/renderDiscount';
import './js/test';
import refs from './js/service/refs';

category();

getProducts();

getPopular();

getDiscount();
const tag = new refs();
setTimeout(() => {
  tag.refresh();

  console.log(Object.keys(tag));
}, '1000');
