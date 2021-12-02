@PlanIT
Feature: PlanIT Login Feature
@login
  Scenario:Ensure that the user is able to see there project name and Number of lots they have got. 
Given the user is logged in and opens there project
When 

@login
Scenario: Ensure that the user is able to login with  valid credentials

  Given I open Open the PlanIT Login Screen
  When I enter my Username
  When I enter my Password
  When Click Subimit
  Then the user is should be displayed the dashboard screen
