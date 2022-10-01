const subjectFieldLoc = '[name="shortDescription"]'
const abusivePhoneNumberFieldLoc = '[name="abusivePhoneNumber"]'
const abusedPhoneNumberFieldLoc = '[name="abusedPhoneNumber"]'
const timeAndDateFieldLoc = '[id="abusedDateTime"]'
const bothCheckBoxesLoc = '[x="2"]'
const fullNameFieldLoc = '[label="Full Name (optional)"]'
const emailFieldLoc = '[label="Email (optional)"]'
const additionalInfoFieldLoc = '[name="longDescription"]'
const submiteButtLoc = '[type="submit"]'

class AbuseRepo {
    multipliClick(Element) {
        Element.click({ multiple: true })
    }
    get subjectField() {
        return cy.get(subjectFieldLoc)
    }
    get abusedPhoneNumberField() {
        return cy.get(abusedPhoneNumberFieldLoc)
    }
    get abusivePhoneNumberField() {
        return cy.get(abusivePhoneNumberFieldLoc)
    }
    get timeAndDateField() {
        return cy.get(timeAndDateFieldLoc)
    }
    get bothCheckBoxes() {
        return cy.get(bothCheckBoxesLoc)
    }
    get fullNameField() {
        return cy.get(fullNameFieldLoc)
    }
    get emailField() {
        return cy.get(emailFieldLoc)
    }
    get additionalInfoField() {
        return cy.get(additionalInfoFieldLoc)
    }
    get submiteButt() {
        return cy.get(submiteButtLoc)
    }
}
export default new AbuseRepo();