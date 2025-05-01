import { instance, mock, when } from 'ts-mockito';
import { Client } from './client.model';
import { Count } from './count';


/* 

Test name: Client
Objetive: Create and initialize a new Client Object
Test cases: [["Joshua", "Jiménez Delgado", "11/11/2005", "12345678", "Rio Segundo de Alajuela", "jos_matazanos@gmail.com"]] 
Expected output: true

*/


describe('Client', () => {
  it('should create an instance', () => {
    expect(new Client("Joshua", "Jiménez Delgado", "11-11-2005", "12345678", "Rio Segundo de Alajuela", "jos_matazanos@gmail.com")).toBeTruthy();
  });
});


/* 

Test name: EliminateAccount
Objetive: Prove that when an account is deleted, the account number of the client is reduced by one
Test cases: [[accountNumber:123, client: "Juan", "Pérez", "25-01-76", "2401-3117", "Alajuela", "jperez@gmail.com"]] 
Expected output: {true, 0}

*/

describe('EliminateAccount', () => {
  let client: Client;
  let cuentaMock: Count;
  const accountNumber = 123;

  beforeEach(() => {
    client = new Client("Juan", "Pérez", "25-01-76", "2401-3117", "Alajuela", "jperez@gmail.com");

    cuentaMock = mock<Count>();
    when(cuentaMock.getNumCuenta()).thenReturn(accountNumber);

    client.setCuentas(instance(cuentaMock));
  });

  it('Should eliminate an account and reduce the number of accounts by one', () => {
    const result = {
      deleted: client.deleteAccount(accountNumber),
      count:   client.getCantAccounts()
    };
    expect(result).toEqual({ deleted: true, count: 0 });
  });
});


