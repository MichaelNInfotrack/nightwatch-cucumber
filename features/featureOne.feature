
Feature: PlanIT Login Feature

Scenario: Ensure that the user is able to login with  valid credentials

  Given I open Open the PlanIT Login Screen
  When I enter my Username
  When I enter my Password
  When Click Subimit
  Then the user is should be displayed the PlanIT Dashboard Screen


  Scenario: Ensure that the user is able to login with  valid credentials
  Given I open Open the PlanIT Login Screen
  When I enter an Incorrect Username
  When I enter my Incorrect Password
  When Click Subimit
  Then the user is should be displayed an error message 
