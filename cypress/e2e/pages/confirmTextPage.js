const confirmTextTC1Loc = '[id*="WCw"]>div>div>div>p'
const confirmTextTC4Loc = '[id="faq4_description"]>p'


class ConfirmTextPage{
    get confirmTextTC4() {
        return cy.get(confirmTextTC4Loc)
    }
    get confirmTextTC1() {
        return cy.get(confirmTextTC1Loc)
    }
}
export default new ConfirmTextPage();