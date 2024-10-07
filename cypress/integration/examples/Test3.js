describe('My Third Test Suite', () => {
    it('My Third Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //1.CHECK BOXES
        cy.get('input#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //cy.get('input[type="checkbox"]').check()
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        //2.STATIC DROPDOWN
        cy.get('select').select('option2').should('have.value', 'option2')

        //3.DYNAMIC DROPDOWN
        cy.get('input#autocomplete').type('ind')
        cy.get('li.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === 'India') {
                cy.wrap($el).click()
            }
        })
        //autocomplete
        cy.get('input#autocomplete').should('have.value', "India")

        //4.VISIBILITY/ INVISIBILITY of elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //5.RADIO BUTTONS
        //cy.get('input[value="radio2"]').check().should('be.checked')
        cy.get('[value="radio2"]').check().should('be.checked')
    })
})