$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("testFeature.feature");
formatter.feature({
  "id": "as-a-user,-i-want-to-run-company-logo-and-history-tests",
  "tags": [
    {
      "name": "@firstProg1",
      "line": 1
    }
  ],
  "description": "",
  "name": "As a User, I want to run Company Logo and History Tests",
  "keyword": "Feature",
  "line": 2
});
formatter.before({
  "duration": 7330209255,
  "status": "passed"
});
formatter.scenario({
  "id": "as-a-user,-i-want-to-run-company-logo-and-history-tests;verify-the-history-page",
  "description": "",
  "name": "Verify the History Page",
  "keyword": "Scenario",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "the user logins",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "user clicks on \"History\" link",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "user should see the \"History\" page",
  "keyword": "Then ",
  "line": 13
});
formatter.match({
  "location": "LoginTest.the_user_logins()"
});
formatter.result({
  "duration": 33913483125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "History",
      "offset": 16
    }
  ],
  "location": "LoginTest.user_clicksOnLink(String)"
});
formatter.result({
  "duration": 10665305142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "History",
      "offset": 21
    }
  ],
  "location": "LoginTest.userShouldSeePage(String)"
});
formatter.result({
  "duration": 3955376,
  "status": "passed"
});
formatter.write("https://uk.practicallaw.qed.thomsonreuters.com/Search/Home.html?transitionType\u003dDefault\u0026contextData\u003d(sc.Default)\u0026bhcp\u003d1\u0026OWSessionId\u003db1ec277d6bf54608812f8aa320751adc\u0026skipAnonymous\u003dtrue\u0026firstPage\u003dtrue");
formatter.after({
  "duration": 3372759470,
  "status": "passed"
});
});