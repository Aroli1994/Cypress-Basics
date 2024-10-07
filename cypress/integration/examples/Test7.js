describe('Handling web table Suite', () => {
    it('Handling web table window', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('table[name="courses"]>tbody>tr>td:nth-child(2)').each(($el, index, $list) => {
            const courseText = $el.text()
            if (courseText.includes('Python')) {
                cy.get('table[name="courses"]>tbody>tr>td:nth-child(2)').eq(index).next().then( (priceEle) => {
                    const priceValue = priceEle.text()
                    expect(priceValue).to.eq('25')
                })
            }
        })
    })
})