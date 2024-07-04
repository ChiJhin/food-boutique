import localStorageApi from './service/localStorageApi';

console.log('test: ', localStorageApi.loadFilter());
localStorageApi.saveFilter({ keyA: 'A' });
console.log('test: ', localStorageApi.loadFilter());
localStorageApi.saveFilter({ KeyB: 'B' });

console.log('test: ', localStorageApi.loadFilter());
