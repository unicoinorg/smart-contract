pragma solidity ^0.4.17;

import 'openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract UnicoinToken is StandardToken {
  string public name = 'Unicoin';
  string public symbol = 'MYTH';
  uint8 public decimals = 18;
  uint public INITIAL_SUPPLY = 1000000000000000000000000000000;

  constructor() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
