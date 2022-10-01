const elasticSipButtLoc = '[class*="kZyHWE"] li>[href="/products/sip-trunks"]'
const callControlButtLoc = '[class*="kZyHWE"] li>[href="/products/voice-api"]'
const programmableSMSButLoc = '[class*="kZyHWE"] li>[href="/products/sms-api"]'
const whatsAppAPIButLoc = '[class*="kZyHWE"] li>[href="/products/whatsapp-api"]'
const secureFaxingButLoc = '[class*="kZyHWE"] li>[href="/products/fax-api"]'
const wirelessCelluralButLoc = '[class*="kZyHWE"] li>[href="/products/iot-sim-card"]>span'
const numberLookupButLoc = '[class*="kZyHWE"] li>[href="/number-lookup"]'
const globalNumbersButLoc = '[class*="kZyHWE"] li>[href="/products/phone-numbers"]'
const verifyAPIButLoc = '[class*="kZyHWE"] li>[href="/products/verify-api"]'
const dataAndPrivacyButLoc = '[class*="kZyHWE"] li>[href="/company/data-privacy"]'
const reportAabuseButLoc = '[class*="kZyHWE"] li>[href="/report-abuse"]'
const privacyPolicyButLoc = '[class*="kZyHWE"] li>[href="/privacy-policy"]'
const connectToLinkedinButLoc = '[href*="linkedin"]'
const followOnFaceBookButLoc = '[href*="facebook"]'
const followOnTwitterButtLoc = '[href*="twitter"]'
const resourcesButtLoc = '[class*="jgxzDd"]>li:nth-child(6)>span>span'
const calculatorsButtLoc = 'div>[href*="calculator"]'


class MainPage {

    focuseOnButt(Element) {
        Element.focus()
    }
    clickOnButoon(Element) {
        Element.click({ force: true }, { timeout: 2000 })
    }
    scrollAndClick(Element) {
        Element.scrollIntoView()
        Element.click();
    }
    get resourcesButt() {
        return cy.get(resourcesButtLoc)
    }
    get calculatorsButt() {
        return cy.get(calculatorsButtLoc)
    }
    get elasticSipBut() {
        return cy.get(elasticSipButtLoc)
    }
    get callControlButt() {
        return cy.get(callControlButtLoc)
    }
    get programmableSMSBut() {
        return cy.get(programmableSMSButLoc)
    }
    get whatsAppAPIBut() {
        return cy.get(whatsAppAPIButLoc)
    }
    get secureFaxingButLoc() {
        return cy.get(secureFaxingButLoc)
    }
    get wirelessCelluralBut() {
        return cy.get(wirelessCelluralButLoc)
    }
    get numberLookupBut() {
        return cy.get(numberLookupButLoc)
    }
    get globalNumbersBut() {
        return cy.get(globalNumbersButLoc)
    }
    get verifyAPIBut() {
        return cy.get(verifyAPIButLoc)
    }
    get dataAndPrivacyBut() {
        return cy.get(dataAndPrivacyButLoc)
    }
    get reportAabuseBut() {
        return cy.get(reportAabuseButLoc)
    }
    get privacyPolicyBut() {
        return cy.get(privacyPolicyButLoc)
    }
    get connectToLinkedinBut() {
        return cy.get(connectToLinkedinButLoc)
    }
    get followOnFaceBookBut() {
        return cy.get(followOnFaceBookButLoc)
    }
    get followOnTwitterButt() {
        return cy.get(followOnTwitterButtLoc)
    }

}
export default new MainPage();