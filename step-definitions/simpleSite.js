// Import Dependancies 
const {client} = require('nightwatch-api');
const {Given, When, Then} = require('cucumber');


// Import page objects
const DashboardPage = client.page.dashboardPage()
var LoginPage = client.page.demoObjects();



// Login Page Scenario
Given('I open Open the PlanIT Login Screen', () =>{
    console.log("Foundation Step")
    return LoginPage
    .navigate()


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

Then("the user is should be displayed the dashboard screen", ()=>{
    console.log("Validation step")
    return DashboardPage
    .waitForElementPresent("@locProjectDashboardTitle", 1000, false, "Dashboard Search bar is visible")
    
});


When("I enter an Incorrect Username", ()=>{
    console.log("Action Step")
    return LoginPage
    .setValue('@locusernameInput',"testing1")
});

When("I enter my Incorrect Password", ()=>{
    console.log("Action Step")
    return LoginPage
    .setValue('@locPasswordInput',"Testing2")
});



Then("the user is should be displayed an error message", ()=>{
    console.log("Validation step")
    return LoginPage 
    .waitForElementPresent("@locErrorMsg", 1000, false, "Error message is getting displayed as expected")
 
});
