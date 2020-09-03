#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template


Feature: Find a job on The Economist Jobs Board 

Scenario Outline: Find a job Sector wise

Given user is already on Home Page of Jobs 
When user clicks on Sign in link
Then user enters Sign in details "<email>" and "<password>"
Then user clicks on Sign in button
Then user clicks on Find a job link
Then user is redirected to the jobs page
Then user clicks on the Banking and finance sector
Then user clicks on the each job of that sector
Then user getting details of that job
Then user getting apply button
Then Close the browser


Examples:
| email | password |
| cool.shailendra@yahoo.com | test@123 |
 