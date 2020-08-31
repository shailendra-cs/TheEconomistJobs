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


Feature: The Economist Jobs Page footer bar links

Scenario Outline: Jobs Page footer links Test

Given user is already on Home Page of Jobs 
When user clicks on Sign in link
Then user enters Sign in details "<email>" and "<password>"
Then user clicks on Sign in button
Then user clicks on About us link
Then user is redirected to About us page
Then user clicks on Contact us link
Then user is redirected to Contact us page
Then user clicks on Terms and conditions link
Then user is redirected to Terms and conditions page
Then user clicks on Privacy policy link
Then user is redirected to Privacy policy page
Then user clicks on Refund policy link
Then user is redirected to Refund policy page
Then user clicks on Help link
Then user is redirected to Help page


Examples:
| email | password |
| cool.shailendra@yahoo.com | test@123 |