Feature: The Economist Jobs Page navigation bar links


#without Examples Keyword
#Scenario: Jobs Sign In Test Scenario
#
#Given user is already on Home Page of Jobs 
#When title of home page is Jobs.Economist.com | jobs | Choose from 28 live vacancies
#When user clicks on Sign in link
#Then user is on Sign In page


#with Examples Keyword


Scenario Outline: Jobs Home Page navigation bar links Test

Given user is already on Home Page of Jobs 
When user clicks on Sign in link
Then user enters Sign in details "<email>" and "<password>"
Then user clicks on Sign in button
Then user clicks on Find a job link
Then user is redirected to the jobs page
Then user clicks on Jobs alerts link
Then user is redirected to the alerts page
Then user clicks on Search recruiters link 
Then user is redirected to the Search Recruiters page
Then user clicks on Jobs blog link 
Then user redirected to Jobs blog page
Then Close the browser

Examples:
| email | password |
| cool.shailendra@yahoo.com | test@123 |
 
 
 
 

