$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Shailendra/git/TheEconomistJobs/TheEconomistBDD/src/main/java/Features/JobSector.feature");
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
  "name": "Find a job on The Economist Jobs Board",
  "description": "",
  "id": "find-a-job-on-the-economist-jobs-board",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Find a job Sector wise",
  "description": "",
  "id": "find-a-job-on-the-economist-jobs-board;find-a-job-sector-wise",
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
  "name": "user clicks on Find a job link",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user is redirected to the jobs page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user clicks on the Banking and finance sector",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user clicks on the each job of that sector",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user getting details of that job",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user getting apply button",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "find-a-job-on-the-economist-jobs-board;find-a-job-sector-wise;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 39,
      "id": "find-a-job-on-the-economist-jobs-board;find-a-job-sector-wise;;1"
    },
    {
      "cells": [
        "cool.shailendra@yahoo.com",
        "test@123"
      ],
      "line": 40,
      "id": "find-a-job-on-the-economist-jobs-board;find-a-job-sector-wise;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "Find a job Sector wise",
  "description": "",
  "id": "find-a-job-on-the-economist-jobs-board;find-a-job-sector-wise;;2",
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
  "name": "user clicks on Find a job link",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user is redirected to the jobs page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user clicks on the Banking and finance sector",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user clicks on the each job of that sector",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user getting details of that job",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user getting apply button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_already_on_Home_Page_of_Jobs()"
});
formatter.result({
  "duration": 16632295500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Sign_in_link()"
});
formatter.result({
  "duration": 1096113300,
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
  "duration": 164247900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 75361000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Find_a_job_link()"
});
formatter.result({
  "duration": 5087330600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_is_redirected_to_the_jobs_page()"
});
formatter.result({
  "duration": 6311000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_Banking_and_finance_sector()"
});
formatter.result({
  "duration": 1682898300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_each_job_of_that_sector()"
});
formatter.result({
  "duration": 302348300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_getting_details_of_that_job()"
});
formatter.result({
  "duration": 16300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_getting_apply_button()"
});
formatter.result({
  "duration": 14400,
  "status": "passed"
});
});