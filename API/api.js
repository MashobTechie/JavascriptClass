// API stands for Application Programming Interface.


// api from 3rd party: 
// These are APIs from external source like Youtube API, X API, Programmer Jokes API, etc

// backend api / Rest API
/// This is your own handwritten api. The oe ou created for your project in the backend. 

// Using Fetch Method for the api
const request = fetch(' https://restcountries.com/v3.1/all ');
console.log(request)

// All API calls will return a promise.
// Promise: A promise is an object representing the eventual completion or failure of an asynchronous operation. eg: Response from an API call.
// The promise will either resolve with the response to the request or reject with the reason for the error.

// Consuming the Promise
const getCoutryData = (country) => {
    fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
        console.log(response);
        // Since the response is in JSON format, we need to convert it to a JavaScript object.
        // also, it is an asynchronous function, so we need to return the response.json() to get the data. 
        return response.json();

    }).then(function (data) {
        console.log(data);
     })
};
getCoutryData('Portugal');
 


