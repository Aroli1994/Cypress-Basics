describe('Calendar Test Simple', () => {
    it('Verify date selection', () => {
        const monthNumber = '8'
        const day = '18'
        const year = '2027'

        const expectedList = [monthNumber, day, year]

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')

        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.contains('button', year).click()
        cy.get('abbr').eq(Number(monthNumber) - 1).click()
        cy.contains('abbr', day).click()

        cy.get('.react-date-picker__inputGroup__input').each(($el, index) => {
            cy.wrap($el).invoke('val').should('eq', expectedList[index])
        })
    })
})