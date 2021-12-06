import { loadMoreRequest, loadCarPage } from './carService.js';
import { swRegister } from './swRegister.js';

swRegister();

window.pageEvents = {
    loadCarPage: function(carId) {
        loadCarPage(carId);
    }
}

loadMoreRequest();

// const request = indexedDB.open('testDB', 1);

// request.onupgradeneeded = function() {
//     const objectStore = request.result.createObjectStore('users', {keyPath: "id"});
//     objectStore.add({id: 1, name: 'Eva Smith', hobbies: ['travelling', 'reading']});
//     objectStore.add({id: 2, name: 'John Doe', hobbies: ['tennis', 'programming']});
//     objectStore.createIndex('by-name', 'name');
// }

// request.onsuccess = function() {
//     const transaction = request.result.transaction(['users'], 'readonly');
//     const objectStore = transaction.objectStore('users');
//     objectStore.get(1).onsuccess = function() {
//         console.log(this.result.name);
//     }
// }

// document.querySelector('#test').textContent = JSON.stringify(createStorage());