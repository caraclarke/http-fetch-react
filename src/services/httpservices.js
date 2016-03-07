var Fetch = require('whatwg-fetch');
// fetch requires a url so you can hit whatever server you want to point to
var baseUrl = 'http://localhost:6060'; // will change when project goes live

var service = {
  get: function(url) {
    return fetch(baseUrl + url)
    .then(function(response) {
      // fetch returning promise when it has completed its request - JS callback. fetch promising it will send something back
      // takes as param function you want to call when promise fulfilled
      return response.json();
      // response has multiple things, we want to get json out
    });
  }
} 
// js object
// get function, pass URL to endpoint and gets data and brings it back
// get request

module.exports = service;