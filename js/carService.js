import appendCars from "./template.js";
import { addCars } from './clientStorage.js';

export const loadMoreRequest = () => {
    fetch('https://jsonplaceholder.typicode.com/photos?_page=0&_limit=10')
    .then((response) => {
        return response.json();
    }).then(data => {
        addCars(data)
        .then(function() {
            appendCars(data);   

        })
        // console.log(data);
    });
}

export const loadCarPage = (carId) => {
    fetch('https://jsonplaceholder.typicode.com/photos/' + carId)
    .then(response => {
        return response.text();
    }).then(data => {
        console.log(data);
        document.body.insertAdjacentHTML('beforeend', data);
    }).catch(err => {
        alert("oops can't retrieve page")
    })
}
