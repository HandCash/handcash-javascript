let fixtures = require('./fixtures/handcash.json')
let chai = require('chai');
let assert = require('assert');
let hc = require('../index');

describe('#handcash', () => {
  describe('#receive', () => {
    fixtures.handcash.receive.testnet.forEach((fixture) => {
      it(`should receive handcash on testnet`, () => {
        let handcash = new hc({network: "testnet"});

        handcash.receive(fixture.handle).then((res) => {
          assert.equal(res.receivingAddress, fixture.receivingAddress);
          assert.equal(res.publicKey, fixture.publicKey);
        });
      });
    });

    fixtures.handcash.receive.mainnet.forEach((fixture) => {
      it(`should receive handcash on mainnet`, () => {
        let handcash = new hc({network: "mainnet"});

        handcash.receive(fixture.handle).then((res) => {
          assert.equal(res.receivingAddress.length, fixture.receivingAddress.length);
          assert.equal(res.publicKey.length, fixture.publicKey.length);
        });
      });
    });
  });
});
