const {client} = require('nightwatch-api');
const {Given, When, Then,And} = require('cucumber');
var LoginPage = client.page.demoObjects();
var DashboardPage = client.page.dashboardPage();



// Scenario 1 
// Scenario 1: Ensure that the user is able to search for an exisiting products

Given('that the user is logged in and the dashboard page is displayed', () =>{
    console.log("Foundation Step")
    return LoginPage
    .navigate()
    .maximizeWindow()
    .setValue('@locusernameInput',"planit.integration.tests")
    .setValue('@locPasswordInput',"planit.integration.tests")
    .click('@locSubmitBtn')
    .waitForElementPresent("@locPlanITSearch", 1000, false, "Dashboard Search bar is visible")



});

When("I enter and Existing Project into the search bar", ()=>{

    return DashboardPage
        .setValue("@locPlanITSearch","Sanity")        
});

Then("the Project should get displayed", ()=>{
    console.log("Validation step")
    return DashboardPage
    .waitForElementPresent("@locSearchResult", 1000, false, "Search Result Returned")

})



// Scenario 2
// Scenario 2: Ensure that the user is getting displayed an error message when then user inputs a project that doesnt exisit

Given('the dashboard page is displayed', () =>{
    console.log("Foundation Step")
    return DashboardPage
    .navigate()
    .maximizeWindow()

});

Then(/^I enters a Project that does not exisit into the search bar$/, ()=> {
    // Write code here that turns the phrase above into concrete actions
    console.log("actions")
    return DashboardPage
    .setValue("@locPlanITSearch","testingErrorMessagesForDashboardPage")

  });




Then(/^user should get displayed an error message$/,()=> {
    // Write code here that turns the phrase above into concrete actions
    console.log("Validation step")
    return DashboardPage
    .waitForElementPresent("@locNoSearchResult", 1000, false, "No Results Error message is visible")


  });
          
// Scenario 3


Given('the dashboard page is displayed', () =>{
    console.log("Foundation Step")
    return LoginPage
    .navigate()
    .maximizeWindow()

});



When('I enter a lot number in the search bar', ()=> {
    // Write code here that turns the phrase above into concrete actions
    console.log("Action Step")
    return DashboardPage
    .setValue("@locPlanITSearch","12")
  

;
  });


  When('click search via lot number', ()=> {
    // Write code here that turns the phrase above into concrete actions
    console.log("Action Step")
    return DashboardPage
    .click('@locSearchLotNumber')
  });

  When('the lots that comply with the search should get displayed', ()=> {
    // Write code here that turns the phrase above into concrete actions
    console.log("Action Step")
    return DashboardPage
    .waitForElementPresent("@locSearchResultLotNumber", 1000, false, "Dashboard Search bar is visible")

  });
        

Then("the user is should be displayed the PlanIT Dashboard Screen", ()=>{
    console.log("Validation step")
    return DashboardPage
    .waitForElementPresent("@locPlanITSearch", 1000, false, "Dashboard Search bar is visible")

})





// Scenario 4
Given('the dashboard page is displayed', () =>{
    console.log("Foundation Step")
    return LoginPage
    .navigate()
    .maximizeWindow()

});
When('I enter and Existing Project only via Matter Reference into the search bar', ()=> {
    // Write code here that turns the phrase above into concrete actions
    console.log("Action Step")
    return DashboardPage
    .setValue("@locPlanITSearch","TestMatter")

  });
  When('I click Search via matter Reference', ()=> {
    // Write code here that turns the phrase above into concrete actions
    console.log("Action Step")
    return DashboardPage
    .click("@locSearchMatterRef")


  });


Then('the user is should be displayed the PlanIT Dashboard Screen', ()=>{
    console.log("Validation step")
    return DashboardPage
    .waitForElementPresent("@locSearchMatterRerResult", 1000, false, "Dashboard Search bar is visible")

})
// Scenario 5 
// address search 

When('I enter and Existing Address into the search bar', ()=> {
    // Write code here that turns the phrase above into concrete actions
    console.log("Action Step")
    return DashboardPage
    .setValue("@locPlanITSearch","12 Test Address")

  });


Then(/^the Project With that Address should get displayed$/, ()=> {
    console.log("Validation step")
    return DashboardPage
    .waitForElementPresent("@locSearchMatterRerResult", 1000, false, "Dashboard Search bar is visible")

  });