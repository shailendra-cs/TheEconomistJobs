Feature: The Economist Sign In Feature


#without Examples Keyword
#Scenario: Jobs Sign In Test Scenario
#
#Given user is already on Home Page of Jobs 
#When title of home page is Jobs.Economist.com | jobs | Choose from 28 live vacancies
#When user clicks on Sign in link
#Then user is on Sign In page


#with Examples Keyword


Scenario Outline: Create account link Test Scenario

Given user is already on Home Page of Jobs 
When user clicks on Create account link
Then user is on Create account page
Then user enters new account details "<title>" and "<firstname>" and "<lastname>" and "<email>" and "<password>" and "<confirmpass>" 
Then user clicks on Create an account button
Then Verify user account get created
Then user clicks on Sign Out link
Then Close the browser

Examples:
| title | firstname | lastname | email | password | confirmpass |
| Mr. | Shailendra | Rajput | cool.shailendra@yahoo.com | test@123 | test@123 |


Scenario Outline: Sign In link Test Scenario

Given user is already on Home Page of Jobs 
When user clicks on Sign in link
Then user enters Sign in details "<email>" and "<password>"
Then user clicks on Sign in button
Then Close the browser



Examples:
| email | password |
| cool.shailendra@yahoo.com | test@123 |
 