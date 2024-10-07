describe('Handling child window Suite', () => {
    it('Handling child window', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/', {
            onBeforeLoad(win) {
                cy.stub(win, 'open')
            }
        })
        cy.get('#openwindow').click()
        cy.window().its('open').should('be.called');
        cy.window().then(() => {
            cy.visit('https://www.qaclickacademy.com/'), { failOnStatusCode: false }
        })

        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get('#navbarSupportedContent [href*="contactus"]').click()
            cy.get('#contact-page h5').should('contain', 'Contact Us')
        })
    })
})