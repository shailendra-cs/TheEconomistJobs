$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Shailendra/git/TheEconomistJobs/TheEconomistBDD/src/main/java/Features/footerLinks.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "The Economist Jobs Page footer bar links",
  "description": "",
  "id": "the-economist-jobs-page-footer-bar-links",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Jobs Page footer links Test",
  "description": "",
  "id": "the-economist-jobs-page-footer-bar-links;jobs-page-footer-links-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "user is already on Home Page of Jobs",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user clicks on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters Sign in details \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user clicks on Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user clicks on About us link",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user is redirected to About us page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user clicks on Contact us link",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user is redirected to Contact us page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user clicks on Terms and conditions link",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user is redirected to Terms and conditions page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user clicks on Privacy policy link",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user is redirected to Privacy policy page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user clicks on Refund policy link",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user is redirected to Refund policy page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user clicks on Help link",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user is redirected to Help page",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "the-economist-jobs-page-footer-bar-links;jobs-page-footer-links-test;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 44,
      "id": "the-economist-jobs-page-footer-bar-links;jobs-page-footer-links-test;;1"
    },
    {
      "cells": [
        "cool.shailendra@yahoo.com",
        "test@123"
      ],
      "line": 45,
      "id": "the-economist-jobs-page-footer-bar-links;jobs-page-footer-links-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 45,
  "name": "Jobs Page footer links Test",
  "description": "",
  "id": "the-economist-jobs-page-footer-bar-links;jobs-page-footer-links-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "user is already on Home Page of Jobs",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user clicks on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters Sign in details \"cool.shailendra@yahoo.com\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user clicks on Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user clicks on About us link",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user is redirected to About us page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user clicks on Contact us link",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user is redirected to Contact us page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user clicks on Terms and conditions link",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user is redirected to Terms and conditions page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user clicks on Privacy policy link",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user is redirected to Privacy policy page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user clicks on Refund policy link",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user is redirected to Refund policy page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user clicks on Help link",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user is redirected to Help page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_already_on_Home_Page_of_Jobs()"
});
formatter.result({
  "duration": 21624884300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Sign_in_link()"
});
formatter.result({
  "duration": 1939772500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cool.shailendra@yahoo.com",
      "offset": 29
    },
    {
      "val": "test@123",
      "offset": 61
    }
  ],
  "location": "StepDefinition.user_enters_Sign_in_details_and(String,String)"
});
formatter.result({
  "duration": 164480400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 1910533700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_About_us_link()"
});
formatter.result({
  "duration": 1116367300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_is_redirected_to_About_us_page()"
});
formatter.result({
  "duration": 7139800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Contact_us_link()"
});
formatter.result({
  "duration": 1459976400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_is_redirected_to_Contact_us_page()"
});
formatter.result({
  "duration": 88344400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Terms_and_conditions_link()"
});
formatter.result({
  "duration": 1645948900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_is_redirected_to_Terms_and_conditions_page()"
});
formatter.result({
  "duration": 98792600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Privacy_policy_link()"
});
formatter.result({
  "duration": 983829900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_is_redirected_to_Privacy_policy_page()"
});
formatter.result({
  "duration": 56556800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Refund_policy_link()"
});
formatter.result({
  "duration": 55840757700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_is_redirected_to_Refund_policy_page()"
});
formatter.result({
  "duration": 39372700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Help_link()"
});
formatter.result({
  "duration": 27961646000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_is_redirected_to_Help_page()"
});
formatter.result({
  "duration": 69193400,
  "status": "passed"
});
});