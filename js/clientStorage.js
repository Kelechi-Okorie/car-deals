
export const addCars = (newCars) => {
    const carInstance = localforage.createInstance({
        name: 'cars'
    });

    return new Promise(function (resolve, reject) {
        carInstance.setItems(newCars);
        // console.log(carInstance); return 

        // newCars.forEach(newCar => {
        //     carInstance.setItem(newCar.id.toString(), newCar)
        //     .then(function () {
        //         resolve();
        //     })

        // })

        // resolve(carInstance);

    })
}

export const getCars = () => {
    return new Promise(function(resolve, reject) {
        carInstance.keys().then(function(keys) {

        })
    })
}
