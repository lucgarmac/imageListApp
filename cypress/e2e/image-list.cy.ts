import { getFilter, getTableColumn, getTableLabel } from "../support/image-list/image-list.po";

describe('Image list view', () => {
  it('should load table data and filter by id', () => {
    cy.visit('http://localhost:4200/images');

    getFilter().should('exist');
    getTableLabel().should('exist');
    getTableLabel().should('contain.text', '4000 registros');
    getTableColumn(1).should('contain.text', 'Foto');
    getTableColumn(2).should('contain.text', 'Texto');

    getFilter().type('100');
    getFilter().should(element => expect(element.val()).to.equal('100'));
    getTableLabel().should('contain.text', '14 registros');
  })
})