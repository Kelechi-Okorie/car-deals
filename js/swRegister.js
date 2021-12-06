
export const swRegister = () => {
    if('serviceWorker' in navigator) {
        console.log('navigator is in service workder')
        navigator.serviceWorker
        .register('sw.js')
        .then(function(swRegistration) {
            console.log(swRegistration)
        })
        .catch(function(err) {
            console.log('an error occurred', err);
        })
    }
}