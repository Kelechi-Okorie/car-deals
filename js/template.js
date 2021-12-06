


function generateCarCard(car) {
    let template = document.querySelector('#car-card').innerHTML;

    const title = car.title;
    template = template.replace('{{title', title);
    template = template.replace('{{image}}', car.thumbnailUrl);
    template = template.replace('{{details-id}}', car.id);
    return template;
}

const appendCars = cars => {
    let cardHTML = '';



    for(let i = 0; i < cars.length; i++) {
        cardHTML += generateCarCard(cars[i]);
        // console.log(cars[i].title)
    }

    document.querySelector('.mdl-grid').insertAdjacentHTML('beforeend', cardHTML);
}

export default appendCars;