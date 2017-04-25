describe('Chimp Mocha', function() {
  describe('Page title', function () {
    it('Should open a new tab', function () {
      browser.url('http://www.google.com');
      expect(browser.getTitle()).to.equal('Google');
      var googleTab = browser.getCurrentTabId();
      console.log('googleTab: ' + googleTab) ;

      browser.newWindow('http://webdriver.io/');
      expect(browser.getTitle()).to.equal('WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
      var webdriverTab = browser.getCurrentTabId();
      console.log('webdriverTab: ' + webdriverTab);

      browser.switchTab(googleTab);
      expect(browser.getTitle()).to.equal('Google');
    });
  });
});