$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Shailendra/git/TheEconomistJobs/TheEconomistBDD/src/main/java/Features/links.feature");
formatter.feature({
  "line": 1,
  "name": "The Economist Jobs Page navigation bar links",
  "description": "",
  "id": "the-economist-jobs-page-navigation-bar-links",
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
  "name": "Jobs Home Page navigation bar links Test",
  "description": "",
  "id": "the-economist-jobs-page-navigation-bar-links;jobs-home-page-navigation-bar-links-test",
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
  "name": "user clicks on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters Sign in details \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user clicks on Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on Find a job link",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user is redirected to the jobs page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user clicks on Jobs alerts link",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user is redirected to the alerts page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on Search recruiters link",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user is redirected to the Search Recruiters page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user clicks on Jobs blog link",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user redirected to Jobs blog page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "the-economist-jobs-page-navigation-bar-links;jobs-home-page-navigation-bar-links-test;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 33,
      "id": "the-economist-jobs-page-navigation-bar-links;jobs-home-page-navigation-bar-links-test;;1"
    },
    {
      "cells": [
        "cool.shailendra@yahoo.com",
        "test@123"
      ],
      "line": 34,
      "id": "the-economist-jobs-page-navigation-bar-links;jobs-home-page-navigation-bar-links-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "Jobs Home Page navigation bar links Test",
  "description": "",
  "id": "the-economist-jobs-page-navigation-bar-links;jobs-home-page-navigation-bar-links-test;;2",
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
  "name": "user clicks on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters Sign in details \"cool.shailendra@yahoo.com\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user clicks on Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on Find a job link",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user is redirected to the jobs page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user clicks on Jobs alerts link",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user is redirected to the alerts page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on Search recruiters link",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user is redirected to the Search Recruiters page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user clicks on Jobs blog link",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user redirected to Jobs blog page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewAccount.user_is_already_on_Home_Page_of_Jobs()"
});
formatter.result({
  "duration": 15336226500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.user_clicks_on_Sign_in_link()"
});
formatter.result({
  "duration": 866557300,
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
  "duration": 188837400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 62735700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.user_clicks_on_Find_a_job_link()"
});
formatter.result({
  "duration": 1889760700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.user_is_redirected_to_the_jobs_page()"
});
formatter.result({
  "duration": 427304400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.user_clicks_on_Jobs_alerts_link()"
});
formatter.result({
  "duration": 315025800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.user_is_redirected_to_the_alerts_page()"
});
formatter.result({
  "duration": 289625400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.user_clicks_on_Search_recruiters_link()"
});
formatter.result({
  "duration": 397296100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.user_is_redirected_to_the_Search_Recruiters_page()"
});
formatter.result({
  "duration": 108179800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.user_clicks_on_Jobs_blog_link()"
});
formatter.result({
  "duration": 524951600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.user_is_redirected_to_the_Jobs_blog_page()"
});
formatter.result({
  "duration": 266553200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccount.close_the_browser()"
});
formatter.result({
  "duration": 948182600,
  "status": "passed"
});
});