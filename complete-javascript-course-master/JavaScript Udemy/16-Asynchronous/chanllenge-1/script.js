'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${
                  Object.values(data.languages)[0]
                }</p>
                <p class="country__row"><span>💰</span>${
                  Object.values(data.currencies)[0].name
                }</p>
            </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    const key = Object.values(data.languages)[0];
    console.log(key);
    renderCountry(data);
  });
};
const getCountryDataAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    const key = Object.values(data.languages)[0];
    console.log(key);
    // Render country 1
    renderCountry(data);

    const [neighbour] = data?.borders;
    console.log(neighbour);
    if (!neighbour) return;
    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};
//getCountryDataAndNeighbour('spain');

const requestFetch = fetch('https://restcountries.com/v3.1/name/portugal');
const getCountryDataFetch = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      response.json();
    })

    .then(data => console.log(data))
    .catch(error => console.log('Error:', error))
    .finally(() => console.log('Petición finalizada'));

  // .then(data => {
  //   renderCountry(data[0]);
  //   const neighbour = data[0].borders[0];
  //   if (!neighbour) return;
  //   return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
  // })
  // .then(response => response.json())
  // .then(data => renderCountry(data[0], 'neighbour'));
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
const getJson = async function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};
const getCountryDataFetchGPt = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      return getJson(response.url, 'Country not found');
    })
    .then(data => {
      console.log('Datos recibidos', data); // Y también aquí
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No neighbour found!');
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => {
      console.log('Datos del vecino recibidos', data); // Y aquí
      renderCountry(data[0], 'neighbour');
    })
    .catch(error => {
      console.error(`${error} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${error.message}. Try again!`);
    }); // Manejo del error
};
// btn.addEventListener('click', function () {
//   getCountryDataFetchGPt('portugal');
// });

// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=130881462529601392072x108828`
      );
    })
    .then(response => {
      console.log(response.ok);
      if (!response.ok) throw new Error('Problem with geocoding');
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error('Country not found');
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(error => console.error(`${error.message} 💥`));
};
// btn.addEventListener('click', function () {
//   whereAmI(18.4511839, -69.9572411);
//   setTimeout(() => {
//     whereAmI(-33.933, 18.474);
//   }, 2000);
//   whereAmI(19.037, 72.873);
// });
console.log('Inicio');
setTimeout((console.log('Time'), 0));

Promise.resolve('abc').then(x => console.log(x));
console.log('Final');

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(function () {
    const number = Math.random();
    if (number >= 0.5) {
      resolve(`You WIN 💰 ${number}`);
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// btn.addEventListener('click', whereAmI);
