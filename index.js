let axios = require('axios');
let _ = require('underscore');

module.exports = class handcash {
   constructor(config) {
     if(config && config.network === 'mainnet') {
       this.network = config.network;
       this.baseURL = 'http://test-api.handcash.io/api/receivingAddress/';
     } else {
       this.network = 'testnet';
       this.baseURL = 'http://test-api.handcash.io/api/receivingAddress/';
     }
   }

   receive(handle) {
     return axios.get(`${this.baseURL}${handle }`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return `Error ${error.response.status}: ${error.response.statusText}`;
    })
   }
}
