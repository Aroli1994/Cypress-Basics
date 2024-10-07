describe('Calendar Test Suite', () => {
    it('Verify date selection', () => {
        const year = '2027'
        const month = 'August'
        const day = '18'

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')

        cy.get('.react-date-picker__calendar-button').click()
        cy.get('.react-calendar__navigation__label').as('calenderEle')
        cy.get('@calenderEle').click()
        cy.get('@calenderEle').click()

        function selectUserInputInDate(userInput, parameter2, parameter3) {
            cy.get('.react-calendar__tile').each(($el, index, $list) => {
                const text = $el.text()
                if (text === userInput) {
                    cy.wrap($el).click()
                }
            })
        }

        selectUserInputInDate(year)
        selectUserInputInDate(month)
        selectUserInputInDate(day)

        cy.get('[name="date"]').then((el) => {
            const dateValue = el.prop('value')
            expect(dateValue).to.eq('2027-08-18')
        })
    })
})