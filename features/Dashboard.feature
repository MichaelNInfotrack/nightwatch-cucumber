@PlanIT
Feature: PlanIT Search Fearture 


@dashboard
@Sanity
@Regression
Scenario: Ensure that the user is able to search for an exisiting Projects

Given that the user is logged in and the dashboard page is displayed 
When I enter and Existing Project into the search bar 
Then the Project should get displayed 

@dashboard
Scenario: Ensure that the user is getting displayed an error message when then user inputs a project that doesnt exisit
Given that the user is logged in and the dashboard page is displayed 
When I enters a Project that does not exisit into the search bar 
Then user should get displayed an error message 


@dashboard
Scenario: Ensure that when I type via lot number that only that number lot is getting displayed

Given that the user is logged in and the dashboard page is displayed 
When I enter a lot number in the search bar 
When click search via lot number 
Then the lots that comply with the search should get displayed


@dashboard
Scenario: Ensure that when I type via matter reference that only that Matter Reference lot is getting displayed

Given that the user is logged in and the dashboard page is displayed 
When I enter and Existing Project only via Matter Reference into the search bar
When I click Search via matter Reference 
Then the lots that comply with the search should get displayed



@dashboard
Scenario: Ensure that when I type via Address that only the lot with that Address is getting displayed

Given that the user is logged in and the dashboard page is displayed 
When I enter and Existing Address into the search bar 
Then the Project With that Address should get displayed 


@dashboard
Scenario: Ensure that when I type via PartyMember that only the lot with that PartyMember is getting displayed

Given that the user is logged in and the dashboard page is displayed 
When I enter and Existing Project into the search bar 
Then the Project should get displayed 


Scenario: Ensure that the user is able to create a Project.

Given that the user is logged in and the dashboard page is displayed 
When I enter and Existing Project into the search bar 
Then the Project should get displayed 



Scenario: Ensure that the user is able to create a Project.

Given that the user is logged in and the dashboard page is displayed 
When I enter and Existing Project into the search bar 
Then the Project should get displayed 