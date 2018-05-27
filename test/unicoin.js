const {convert: readableNumber} = require('number-words');
const UnicoinToken = artifacts.require('UnicoinToken');

contract('UnicoinToken', async (accounts) => {
  const expectedName = 'Unicoin';
  const expectedSymbol = 'MYTH';
  const expectedDecimals = 18;
  const expectedTotalSupply = 1000000000000;
  const expectedTotalSupplyInDecimals = expectedTotalSupply * Math.pow(10, expectedDecimals);

  it(`should use the name "${expectedName}"`, async () => {
     const instance = await UnicoinToken.deployed();
     const name = await instance.name();
     assert.equal(name, expectedName);
  });

  it(`should use the symbol "${expectedSymbol}"`, async () => {
     const instance = await UnicoinToken.deployed();
     const symbol = await instance.symbol();
     assert.equal(symbol, expectedSymbol);
  });

  it(`should use ${expectedDecimals} decimals`, async () => {
     const instance = await UnicoinToken.deployed();
     const decimals = await instance.decimals();
     assert.equal(decimals, expectedDecimals);
  });

  it(`should use ${readableNumber(expectedTotalSupply)} initial supply`, async () => {
     const instance = await UnicoinToken.deployed();
     const initalSupply = await instance.INITIAL_SUPPLY();
     assert.equal(initalSupply, expectedTotalSupplyInDecimals);
  });

  it(`should use ${readableNumber(expectedTotalSupply)} total supply`, async () => {
     const instance = await UnicoinToken.deployed();
     const initalSupply = await instance.totalSupply();
     assert.equal(initalSupply, expectedTotalSupplyInDecimals);
  });

  it(`should create ${readableNumber(expectedTotalSupply)} ${expectedName} (${expectedSymbol}) in the owner's account`, async () => {
     const instance = await UnicoinToken.deployed();
     const balance = await instance.balanceOf(accounts[0]);
     assert.equal(balance, expectedTotalSupplyInDecimals);
  });

  it(`should send Unicoin correctly`, async () => {
    const instance = await UnicoinToken.deployed();
    const Alice = accounts[0];
    const Bob = accounts[1];

    const transactionAmount = 1;

    const AliceStartBalance = await instance.balanceOf(Alice);
    const BobStartBalance = await instance.balanceOf(Bob);

    await instance.transfer(Bob, transactionAmount, {from: Alice});

    const AliceEndBalance = await instance.balanceOf(Alice);
    const BobEndBalance = await instance.balanceOf(Bob);

    assert.equal(AliceEndBalance, Number(AliceStartBalance - transactionAmount));
    assert.equal(BobEndBalance, Number(BobStartBalance + transactionAmount));
  });
});
