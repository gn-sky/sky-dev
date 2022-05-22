import { getAddTruckButton, getGreeting, getTrucks } from '../support/app.po';

describe('trucks', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Trucks');
  });

  it('should display trucks', () => {
    getTrucks().should(t => expect(t.length).equal(2));
    getAddTruckButton().click();
    getTrucks().should(t => expect(t.length).equal(3));
  });
});
