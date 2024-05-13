/// <reference types="cypress" />

describe("Testes para agenda de contatos", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/;")
    })
    it("Testando adição do contato.", () => {
        cy.get('[type="text"]').type('Vinicius')
        cy.get('[type="email"]').type('Vinicius@teste.com')
        cy.get('[type="tel"]').type('71 12345678')
        cy.get('.adicionar').click()

        //Assertion
        cy.get('.sc-dmqHEX').should('have.length', 4)
    })

    it("Testando remoção do contato.", ()=> {
       cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
       cy.get('.sc-dmqHEX').should('have.length', 3)
    })

    it("Testando edição do contato.", () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()

        cy.get('[type="text"]').clear()
        cy.get('[type="email"]').clear()
        cy.get('[type="tel"]').clear()


        cy.get('[type="text"]').type('Igor')
        cy.get('[type="email"]').type('igor@teste.com')
        cy.get('[type="tel"]').type('71 87654321')
        cy.get('.alterar').click()


        //Assertion
        cy.get(':nth-child(3) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('have.text', 'Igor');
        cy.get(':nth-child(3) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(3)').should('have.text', 'igor@teste.com');
        cy.get(':nth-child(3) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(2)').should('have.text', '71 87654321');

    })
})