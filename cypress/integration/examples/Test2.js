describe('My Second Test Suite', () => {
    it('My Second Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //selenium uses get method to hit the url in browser, cypress uses get method to locate web element in DOM
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const vegText = $el.find('h4.product-name').text()
            if (vegText.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})