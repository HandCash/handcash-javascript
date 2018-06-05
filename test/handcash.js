let fixtures = require('./fixtures/handcash.json')
let chai = require('chai');
let assert = require('assert');
let hc = require('../index');

describe('#handcash', () => {
  describe('#receive', () => {
    fixtures.handcash.receive.forEach((fixture) => {
      it(`should receive handcash`, () => {
        let handcash = new hc({network: "testnet"});

        handcash.receive(fixture.handle).then((res) => {
          assert.equal(res.receivingAddress, fixture.receivingAddress);
          assert.equal(res.publicKey, fixture.publicKey);
        });
      });
    });
  });
});
