describe('Handling child tab Suite', () => {

    //Approach1
    it('Handling child tab', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get("#navbarSupportedContent a[href*='about']").click()
            cy.get(".mt-50 h2").should('contain','QAClick Academy')
        })
    })

    //Approach2
    // it('Handling child tab', () => {
    //     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //     cy.get('#opentab').invoke('removeAttr', 'target', '_self').click()
    //     cy.origin('https://www.qaclickacademy.com/', () => {
    //         cy.get("#navbarSupportedContent a[href*='about']").click()
    //         cy.get(".mt-50 h2").should('contain','QAClick Academy')
    //     })
    //     //cy.go('back')
    // })

    //Approach3
    // describe("My suites", () => {
    //     it('Window Handling [Approach -2]', () => {
    //         // Visit the page
    //         cy.visit("https://the-internet.herokuapp.com/windows");

    //         // Get the URL from the link
    //         cy.get(".example > a").then((e) => {
    //             let url = e.prop('href');
    //             // Visit the new page
    //             cy.visit(url);
    //         });
    //     })
    // })
})