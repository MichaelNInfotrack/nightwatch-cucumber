
const {client} = require('nightwatch-api');
const {Given, When, Then} = require('cucumber');
//Import you page objects from support folder
const WikiHomepage = client.page.WikiHomepage()




//Create an instance of your Page Object







//// Your step definitions /////

// Scenario 1 



Given("that the user is on the  Wikipedia Homepage",  () => {
    return WikiHomepage.navigate()


});
// Types in search item
When("the user types in Item they want to search", function () {
console.log("Scenario 1")


});


// Scenario 1 
// Selects search language from the dropdown
When("the user clicks on {string} Option dropdown", function () {
    console.log("Scenario 1")

});
// Scenario 1 
// click search 

When("the user clicks the search Icon", function () {
    console.log("Scenario 1")

    
});
// Scenario 1 
// Validates that search option is in that language
Then("the user should be shown the results in that language.", function () {
    
console.log("Scenario 1")
    

});
// Scenario 2
// Selecting Lanaguaage Option 


When("the user selects on the English language option for the drop", function () {
    

    console.log("Scenario 2")
    debugger

});


// Scenario 2
// Types in the search fields 
When("the user types the {string} into the search field", function (Language) {


    console.log("Scenario 2")
   

  
});
// Scenario 2
Then("the user should be shown the result in english", function () {
   

    console.log("Scenario 2")


});
