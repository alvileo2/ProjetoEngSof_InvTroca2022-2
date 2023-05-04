import React from 'react'
import Dashboard from './App1'

describe('<Dashboard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Dashboard />)
  })
})