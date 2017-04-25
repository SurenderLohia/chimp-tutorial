module.exports = function() {

  this.Given(/^I have visited Google$/, function () {
    // Write code here that turns the phrase above into concrete actions
    browser.url('http://google.com');
  });

  this.When(/^I search for gmail\.com$/, function() {
    browser.setValue('input[name="q"]', 'gmail.com');
    browser.keys(['Enter']);
  })

  this.Then(/^I see (.+)$/, function (link) {
    // Write code here that turns the phrase above into concrete actions
    browser.waitForExist('a=Gmail');
  });
}