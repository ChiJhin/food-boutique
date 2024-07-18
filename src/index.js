import category from './js/filter';
import getProducts from './js/render_cart-list';
import getPopular from './js/renderPopular';
import getDiscount from './js/renderDiscount';
import './js/test';
import { form } from './js/modal/subscribeModal';
import { postEmail } from './js/modal/subscribeModal';
import { orderProduct } from './js/modal/orderModal';

category();

getProducts();

getPopular();

getDiscount();

form.addEventListener('submit', postEmail);

orderProduct();
