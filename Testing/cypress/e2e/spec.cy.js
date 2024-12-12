describe('CorrectHomePage', () => {
  it('Should direct to the home page file indicated by onscreen title', () => {
    cy.visit('http://localhost:3000/')
    cy.get('data-cy="submit"')
  })
})

describe('Correct redirect', () => {
  it('Should redirect the Search Page to the ReadCardsPage', () => {
    cy.visit('http://localhost:3000/Search')
    cy.get('data-cy="onClick"').click();
  })
})

describe('Correct Links', () => {
  it('Should only have links to relevant pages for the user', () => {
    cy.visit('http://localhost:3000/')
  })
})

describe('Search Button data', () => {
  it('Should redirect to a page with the relevant information from the database', () => {
    cy.visit('http://localhost:3000/Search')
    cy.get('data-cy="onClick"').click();
  })
})

describe('Refresh', () => {
  it('The page should not refresh on button press, but send data to the backend.', () => {
    cy.visit('http://localhost:3000/CreateCards')
    cy.get('data-cy="onClick"').click();
  })
})