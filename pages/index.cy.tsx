import Home from './index'

describe('index.cy.ts', () => {
  it('playground', () => {
    cy.mount(<Home />)
    cy.get("h1").contains('Welcome')

  })
})