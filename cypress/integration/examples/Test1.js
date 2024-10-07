describe('My First Test Suite', () => {
    it('My First Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //selenium uses get method to hit the url in browser, cypress uses get method to locate web element in DOM
        //cy.get('.product')
        //cy.get('.product:visible')̊
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)
        //Parent child chaining
        //cy.get('div.products div.product')
        //cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($el, index, $list) => {
            console.log($el.find('h4.product-name').text())
        })
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const vegText = $el.find('h4.product-name').text()
            if (vegText.includes('Cashews')) {
                cy.wrap($el).find('button').click()
                //$el.contains('ADD TO CART').click()
            }
        })
        cy.get('.brand.greenLogo').then((logoEle) => {
            cy.log(logoEle.text())
        })
        //this is to assert the logo text
        cy.get('.brand').should('have.text', 'GREENKART')

            //this is print logs in console resolving the promise
            .then(() => {
                console.log('sf')
            })

        //cy.log(logo.text())
    })
})