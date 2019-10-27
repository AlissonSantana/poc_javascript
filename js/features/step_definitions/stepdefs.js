const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('today is Sunday', {timeout: 60 * 1000}, function () {
    // this.today = 'Sunday';
    // return 'pending';
    return this.driver.get('http://www.google.com')
  });

  When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
    return 'pending';
  });

  Then('I should be told {string}', function (string) {
    assert.equal(this.actualAnswer, expectedAnswer);
    return 'pending';
  });