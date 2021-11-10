const {client} = require('nightwatch-api');
const {Given, When, Then} = require('cucumber');
const DashboardPage = client.page.dashboardPage()
var LoginPage = client.page.demoObjects();

Given('I open Open the PlanIT Login Screen', () =>{
    console.log("Foundation Step")
    return LoginPage
    .navigate()
    .maximizeWindow()


});

When("I enter my Username", ()=>{
    console.log("Action Step")
    return LoginPage
    .setValue('@locusernameInput',"planit.integration.tests")
});

When("I enter my Password", ()=>{
    console.log("Action Step")
    return LoginPage
    .setValue('@locPasswordInput',"planit.integration.tests")
});

When("Click Subimit", ()=>{
    console.log("Action Step")
    return LoginPage
    .click('@locSubmitBtn')
});

Then("the user is should be displayed the PlanIT Dashboard Screen", ()=>{
    console.log("Validation step")
    return DashboardPage 
    .waitForElementPresent("@locPlanITSearch", 1000, false, "Dashboard Search bar is visible")
});


When("I enter an Incorrect Username", ()=>{
    console.log("Action Step")
    return LoginPage
    .setValue('@locusernameInput',"testing1")
});

When("I enter an Incorrect Password", ()=>{
    console.log("Action Step")
    return LoginPage
    .setValue('@locPasswordInput',"Testing2")
});