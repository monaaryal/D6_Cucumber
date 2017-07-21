$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "login Page",
  "description": "In order to test login page\r\nAs a registered user\r\nI want to specify the login conditions",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "checking pre condition,action and results",
  "description": "",
  "id": "login-page;checking-pre-condition,action-and-results",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user is on SDETtraining.com home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user clicks log in button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user is on  login.page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});