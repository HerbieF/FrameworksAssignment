describe('Correct data', () => {
    it('Should be a set of data from the json file corresponding to the index', () => {
      cy.visit('http://localhost:5000/getIndex')
    })
  })

  describe('Correct data 2', () => {
    it('Provides an array of data to be directly inserted into the main JSON file', () => {
      cy.visit('http://localhost:3000/createdCollection')
    })
  })