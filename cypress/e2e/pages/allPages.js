const competitorNetworkButtLoc = '[class*="kZyHWE"] li>[href="/products/sip-trunks"]'
const tier1ButtLoc = '[title*="Network "]'
const twexitAPIButtLoc = '[href="/twexit-api"]'
const howDoesWhatsAppButtLoc = '[aria-controls*="faq4"]'
const seePricingButtLoc = '[class*="dVfoAV"]'
const explorePointOfSaleButtLoc = '[class*="cZQSuZ"]>div>a'
const contactCenterButtLoc = '[class*="kqPpWX"]'
const signUpFor10ButtLoc = '[class*="75a-15 cSsJix"]'
const numberPoolingButtLoc = '[href*="/number-pool"]'
const learnMoreButtLoc = '[href*="general-availability"]'
const localNumberLoc = '[id="local-numbers"]'
const toolFreeNumberLoc = '[id="toll-free-numbers"]'
const continueButtLoc = '[class*="gMRGHv"]>div>button'
const cookiePolicyButtLoc = 'p:nth-child(78) > a'
const totalSavingResultLoc = '[class*="NYGAb"]>span:nth-child(1)'
const messagingApiButtLoc = '[class*="fkuRxe"]>div:nth-child(1)'
const voiceApiButtLoc = '[class*="fkuRxe"]>div:nth-child(3)'
const elasticSipButtLoc = '[class*="fkuRxe"]>div:nth-child(2)'

class AllPages {
    localNumberFieldFill(value) {
        cy.get(localNumberLoc).type(value)
    }
    get messagingApiButt() {
        return cy.get(messagingApiButtLoc)
    }
    get elasticSipButt() {
        return cy.get(elasticSipButtLoc)
    }
    get voiceApiButt() {
        return cy.get(voiceApiButtLoc)
    }
    get localNumber() {
        return cy.get(localNumberLoc)
    }
    get toolFreeNumber() {
        return cy.get(toolFreeNumberLoc)
    }
    get continueButt() {
        return cy.get(continueButtLoc)
    }
    clickAndFill(Element, value) {
        Element.type(value)
    }
    get totalSavingResult() {
        return cy.get(totalSavingResultLoc)
    }
    get cookiePolicyButt() {
        return cy.get(cookiePolicyButtLoc)
    }
    get learnMoreButt() {
        return cy.get(learnMoreButtLoc)
    }
    get numberPoolingButt() {
        return cy.get(numberPoolingButtLoc)
    }
    get signUpFor10Butt() {
        return cy.get(signUpFor10ButtLoc)
    }
    get contactCenterButt() {
        return cy.get(contactCenterButtLoc)
    }
    get explorePointOfSaleButt() {
        return cy.get(explorePointOfSaleButtLoc)
    }
    get seePricingButt() {
        return cy.get(seePricingButtLoc)
    }
    get howDoesWhatsAppButt() {
        return cy.get(howDoesWhatsAppButtLoc)
    }
    get twexitAPIButt() {
        return cy.get(twexitAPIButtLoc)
    }
    get tier1Butt() {
        return cy.get(tier1ButtLoc)
    }
    get competitorNetworkButt() {
        return cy.get(competitorNetworkButtLoc)
    }
}

export default new AllPages();