import refs from './service/refs';
import localStorageApi from './service/localStorageApi';

const tag = new refs();

console.log(tag.batman);

localStorageApi.saveFilter({ keyA: 'A' });
console.log('test: ', localStorageApi.loadFilter());
localStorageApi.saveFilter({ KeyB: 'B' });

console.log('test: ', localStorageApi.loadFilter());
