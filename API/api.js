// API stands for Application Programming Interface.


// api from 3rd party: 
// These are APIs from external source like Youtube API, X API, Programmer Jokes API, etc

// backend api / Rest API
/// This is your own handwritten api. The oe ou created for your project in the backend. 



// // Using Fetch Method for the api
// const request = fetch(' https://restcountries.com/v3.1/all ');
// console.log(request)

// All API calls will return a promise.
// Promise: A promise is an object representing the eventual completion or failure of an asynchronous operation. eg: Response from an API call.
// The promise will either resolve with the response to the request or reject with the reason for the error.

// // Consuming the Promise
// const getCoutryData = (country) => {
//     fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
//         console.log(response);
//         // Since the response is in JSON format, we need to convert it to a JavaScript object.
//         // also, it is an asynchronous function, so we need to return the response.json() to get the data. 
//         return response.json();

//     }).then(function (data) {
//         console.log(data);
//     })
// };
// getCoutryData('Portugal');



// API Consumption:
// For you to use an api from third party, search for whichver API you want to use,
// Red the documentation
// Use the fetch method to call the api.   


// To get all countries
const getCoutryData = () => {
    const request = fetch(' https://restcountries.com/v3.1/all').then((response, failure) => {
        if (response) {
            console.log(response);
            return response.json() // Always return yur promis in JSON format
        } else {
            console.log(failure)
        }
    }).then((data) => {
        console.log(data)
    })

    console.log(request)
}

getCoutryData()

// To get country data by name
const countryRequest = (countryName) => {
    try {
        const request = fetch(`https://restcountries.com/v3.1/name/${countryName}`).then((response, failure) => {
            if (response) {
                console.log(response)
                return response.json()
            } else {
                console.log(failure)
            }
        }).then((data) => {
            console.log(data);
            const startOfWeek = data[0].startOfWeek
            console.log(`${countryName} starts the week on ${startOfWeek}`);
            console.log(data[0].capital)
        });

        console.log(request)
    } catch (error) {
        console.log(error)
    }

}
countryRequest('France')