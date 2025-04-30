import { Client } from './client.model';


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
