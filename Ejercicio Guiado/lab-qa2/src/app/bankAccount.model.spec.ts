import { bankAccount } from "./bankAccount.model";
import { Count } from "./count";

/* 
Test name: VerifyAccountAmount
Objetive: Check if getting the money amount of an account is 5000 when its initialized
Test cases: [[balance: 5000]] 
Expected output: true
*/

describe('VerifyAccountAmount', () => {
  let cuenta: Count;  
  var balance = 5000; 

  beforeEach(() => {  
    cuenta = new bankAccount(123456789, balance, 'savings');
  }); 

  it('Should create a bankAccount, having a balance of 5000', function () { 
    expect(cuenta.getCantidadDinero()).toBe(balance); 
  });
  
})


/* 
Test name: DepositMoney
Objetive: Do 2 deposits and make sure that the new amount of the account is correct
Test cases: [[firstDeposit: 5000, secondDeposit: 10000]] 
Expected output: 15000
*/

describe('DepositMoney', () => {
 
  let cuenta: Count;  
  var firstDeposit = 5000; 
  var secondDeposit = 10000;

  beforeEach(() => { 
    cuenta = new bankAccount(123456789, 0, 'savings');     
  }); 

  it('Should deposit money into an account twice, giving the correct amount after those deposits', function () { 
    cuenta.depositar(firstDeposit);
    cuenta.depositar(secondDeposit);
    expect(cuenta.getCantidadDinero()).toBe(firstDeposit + secondDeposit); 
  });

})

