$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Shailendra/TheEconomistBDD/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "The Economist Sign In Feature",
  "description": "",
  "id": "the-economist-sign-in-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#without Examples Keyword"
    },
    {
      "line": 5,
      "value": "#Scenario: Jobs Sign In Test Scenario"
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "#Given user is already on Home Page of Jobs"
    },
    {
      "line": 8,
      "value": "#When title of home page is Jobs.Economist.com | jobs | Choose from 28 live vacancies"
    },
    {
      "line": 9,
      "value": "#When user clicks on Sign in link"
    },
    {
      "line": 10,
      "value": "#Then user is on Sign In page"
    },
    {
      "line": 13,
      "value": "#with Examples Keyword"
    }
  ],
  "line": 16,
  "name": "Create account link Test Scenario",
  "description": "",
  "id": "the-economist-sign-in-feature;create-account-link-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "user is already on Home Page of Jobs",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user clicks on Create account link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user is on Create account page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user enters new account details \"\u003ctitle\u003e\" and \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cemail\u003e\" and \"\u003cpassword\u003e\" and \"\u003cconfirmpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on Create an account button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Verify user account get created",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user clicks on Sign Out link",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "the-economist-sign-in-feature;create-account-link-test-scenario;",
  "rows": [
    {
      "cells": [
        "title",
        "firstname",
        "lastname",
        "email",
        "password",
        "confirmpass"
      ],
      "line": 28,
      "id": "the-economist-sign-in-feature;create-account-link-test-scenario;;1"
    },
    {
      "cells": [
        "Mr.",
        "Shailendra",
        "Rajput",
        "cool.shailendra@yahoo.com",
        "test@123",
        "test@123"
      ],
      "line": 29,
      "id": "the-economist-sign-in-feature;create-account-link-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Create account link Test Scenario",
  "description": "",
  "id": "the-economist-sign-in-feature;create-account-link-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "user is already on Home Page of Jobs",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user clicks on Create account link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user is on Create account page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user enters new account details \"Mr.\" and \"Shailendra\" and \"Rajput\" and \"cool.shailendra@yahoo.com\" and \"test@123\" and \"test@123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on Create an account button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Verify user account get created",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user clicks on Sign Out link",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewAccount.user_is_already_on_Home_Page_of_Jobs()"
});
formatter.result({
  "duration": 12949034200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.user_clicks_on_Create_account_link()"
});
formatter.result({
  "duration": 1648425300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.user_is_on_Create_account_page()"
});
formatter.result({
  "duration": 35967900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 33
    },
    {
      "val": "Shailendra",
      "offset": 43
    },
    {
      "val": "Rajput",
      "offset": 60
    },
    {
      "val": "cool.shailendra@yahoo.com",
      "offset": 73
    },
    {
      "val": "test@123",
      "offset": 105
    },
    {
      "val": "test@123",
      "offset": 120
    }
  ],
  "location": "CreateNewAccount.user_enters_new_account_details(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1090880200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.user_clicks_on_Create_an_account_button()"
});
formatter.result({
  "duration": 1947856700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.verify_user_account_get_created()"
});
formatter.result({
  "duration": 29077100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.user_clicks_on_Sign_out_link()"
});
formatter.result({
  "duration": 916220700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.close_the_browser()"
});
formatter.result({
  "duration": 719996900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "Sign In link Test Scenario",
  "description": "",
  "id": "the-economist-sign-in-feature;sign-in-link-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "user is already on Home Page of Jobs",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "user clicks on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user enters Sign in details \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user clicks on Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "the-economist-sign-in-feature;sign-in-link-test-scenario;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 43,
      "id": "the-economist-sign-in-feature;sign-in-link-test-scenario;;1"
    },
    {
      "cells": [
        "cool.shailendra@yahoo.com",
        "test@123"
      ],
      "line": 44,
      "id": "the-economist-sign-in-feature;sign-in-link-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 44,
  "name": "Sign In link Test Scenario",
  "description": "",
  "id": "the-economist-sign-in-feature;sign-in-link-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "user is already on Home Page of Jobs",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "user clicks on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user enters Sign in details \"cool.shailendra@yahoo.com\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user clicks on Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewAccount.user_is_already_on_Home_Page_of_Jobs()"
});
formatter.result({
  "duration": 11008141800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.user_clicks_on_Sign_in_link()"
});
formatter.result({
  "duration": 1042276800,
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
  "location": "CreateNewAccount.user_enters_Sign_in_details_and(String,String)"
});
formatter.result({
  "duration": 210332700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 85634700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.close_the_browser()"
});
formatter.result({
  "duration": 683183700,
  "status": "passed"
});
});