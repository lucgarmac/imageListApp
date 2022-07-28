export const getFilter = () => cy.get('[data-cy=input-filter]');
export const getTableLabel = () => cy.get('[data-cy=table-images] .total-items span');
export const getTableCell = (row:number, column: number) => cy.get(`[data-cy=table-images] table tbody > tr:nth-child(${row}) > td:nth-child(${column})`);
export const getTableColumn = (column: number) => cy.get(`[data-cy=table-images] table thead tr th:nth-child(${column})`);
