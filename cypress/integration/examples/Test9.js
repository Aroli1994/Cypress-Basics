describe('Grabbing attribute value Suite', () => {
    it('Grabbing attribute value window', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').then( (el) => {
            const url = el.prop('href')
            cy.visit(url)
            cy.origin(url, () => {
                cy.get('div.sub-menu-bar a[href*="about"]').click()
                cy.get(".mt-50 h2").should('contain','QAClick Academy')
            })
        })
    })
})