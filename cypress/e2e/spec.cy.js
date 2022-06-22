/// <reference types='cypress' />

describe('Testes', () => {
  it('Realizar login na plataforma', () => {

    cy.visit('http://sacnew.ascbrazil.com.br');
    cy.get('#login-user').type('user_qa');
    cy.get('#login-password').type('ascQA2022');
    cy.get('#form-login > :nth-child(3) > .controls > .btn').click();
    cy.get('#side_agentes > .dropdown-toggle').click();
    cy.get('#side_agente_notificacoes > a').click();
    cy.get('.btn-to-success > .fa').click();
    cy.get('#nom_msg').type('Realizando um teste de envio de mensagem');
    cy.get('.btn-info > .fa').click();
    cy.get('#tblBody > :nth-child(1) > :nth-child(6)').should('contain', 'Sim');
    cy.get('#tblBody > :nth-child(1) > :nth-child(3)').should('contain', 'Realizando um teste de envio de mensagem');
  })
})