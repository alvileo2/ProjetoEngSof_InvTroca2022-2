import React from 'react'
import { ModalComp } from './ModalComp'

describe('<ModalComp />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ModalComp />)
  })
})