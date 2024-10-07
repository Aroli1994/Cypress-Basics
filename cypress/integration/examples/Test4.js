describe('My Fourth Test Suite', () => {
    it('My Fourth Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //6.ALERT OK using window:alert
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window:alert
        cy.on('window:alert', (str) => {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //7.CONFIRM POPUPS using window:confirm
        //window:confirm
        cy.on('window:confirm', (str) => {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})