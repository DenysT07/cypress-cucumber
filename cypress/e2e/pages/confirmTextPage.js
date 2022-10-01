const confirmTextTC1Loc = '[id*="WCw"]>div>div>div>p'
const confirmTextTC4Loc = '[id="faq4_description"]>p'
const confirmTextTC11Loc = '.sc-570b157-1'

class ConfirmTextPage {
    get confirmTextTC4() {
        return cy.get(confirmTextTC4Loc)
    }
    get confirmTextTC1() {
        return cy.get(confirmTextTC1Loc)
    }
    get confirmTextTC11() {
        return cy.get(confirmTextTC11Loc)
    }

}
export default new ConfirmTextPage();