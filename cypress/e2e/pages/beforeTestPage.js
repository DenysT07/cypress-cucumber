const allowCookieButtloc = '[class*="itIjRb"]'
class BeforeTestPage {

  clickAllowCoockie() {
    cy.get('body').then(($body) => {
      if ($body.find(allowCookieButtloc).length > 0) {
        this.allowCookieButt.click();
      }
    });
  }
  get allowCookieButt() {
    return cy.get(allowCookieButtloc)
  }
}

export default new BeforeTestPage();
