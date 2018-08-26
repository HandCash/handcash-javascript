## HandCash

Helper methods for [HandCash's API](http://handcash.io/api-docs/).

## Usage

### Installation

```js
npm install handcash
```


### Require the lib

```js
let hc = require('handcash');
```

### Instantiate w/ network passed in via config

Config options for `network` are `testnet` and `mainnet`.

```js
let handcash = new hc({network: "testnet"});
```

### Get receive address for $handle

```js
handcash.receive('rjseibane').then((res) => {
  console.log(res);
  // { 
  //   receivingAddress: 'mxszqDyaNGFcmTkPjJ2BGRpSTChdVWaNPZ',
  //	 cashAddr: 'bitcoincash:qz20388lm0397xazll966yxjveje2z79gyf26ssugk',
  //   publicKey: '03d193439a2f06ed1121be5b4e61381386ffee5ec5bec33daf17e33ccb34622753' 
  // }
});
```

## All together

```js
// require lib
let hc = require('handcash');

// instantiate
let handcash = new hc({network: "testnet"});

// get receive address for $handle
handcash.receive('rjseibane').then((res) => {
  console.log(res);
  // { 
  //   receivingAddress: 'mxszqDyaNGFcmTkPjJ2BGRpSTChdVWaNPZ',
  //	 cashAddr: 'bitcoincash:qz20388lm0397xazll966yxjveje2z79gyf26ssugk',
  //   publicKey: '03d193439a2f06ed1121be5b4e61381386ffee5ec5bec33daf17e33ccb34622753' 
  // }
});
```
