import refs from './service/refs';
import localStorageApi from './service/localStorageApi';

const tag = new refs();

console.log(tag.batman);

localStorageApi.saveFilter({ keyA: 'A' });
console.log('test: ', localStorageApi.loadFilter());
localStorageApi.saveFilter({ KeyB: 'B' });

console.log('test: ', localStorageApi.loadFilter());

const cart1 = {
  productId: '640c2dd963a319ea671e383b',
  amount: 2,
};

const cart2 = {
  productId: '640c2dd963a319ea67333333',
  amount: 3,
};

localStorageApi.saveCart(arr(cart1, cart2));

function arr(...params) {
  let carts = { email: '', products: params };

  return carts;
}

console.log(localStorageApi.loadCart());
