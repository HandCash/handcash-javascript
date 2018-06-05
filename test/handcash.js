let fixtures = require('./fixtures/handcash.json')
let chai = require('chai');
let assert = require('assert');
let hc = require('../index');

describe('#handcash', () => {
  describe('#recieve', () => {
    fixtures.handcash.recieve.forEach((fixture) => {
      it(`should recieve handcash`, () => {
        let handcash = new hc({network: "testnet"});

        handcash.recieve(fixture.handle).then((res) => {
          assert.equal(res.receivingAddress, fixture.receivingAddress);
          assert.equal(res.publicKey, fixture.publicKey);
        });
      });
    });
  });
});
