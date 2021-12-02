
let commands = {


  navigate: function (username, password) {
    this.navigate()
    this.maximizeWindow()
    
  },
loginUsername: function (username) {
    this.setValue('@locusernameInput',username)
  },
  loginPassword: function (password) {
    this.setValue('@locPasswordInput',password)
  },

  loginSubmit: function () {
    this.click('@locSubmitBtn')
    this.waitForElementPresent("@locPlanITSearch", 1000, false, "Dashboard Search bar is visible")
  },
};






module.exports = {


  url: 'https://planit.infotrack.com.au',
  elements: {
    locusernameInput:{
      selector:"/html/body/div/div[2]/div/div/div[2]/form/div[1]/div[2]/span/input",
      locateStrategy:"xpath"  
    },
    locPasswordInput:{
    selector:"/html/body/div/div[2]/div/div/div[2]/form/div[2]/div[2]/span/input",
    locateStrategy:"xpath"  
    },
    locSubmitBtn:{
    selector:"/html/body/div/div[2]/div/div/div[2]/form/div[3]/button",
    locateStrategy:"xpath"  
    },
    locErrorMsg:{
    selector:"/html/body/div[1]/div[2]/div/div/div[1]/div",
    locateStrategy:"xpath"  
    },
    locPlanITSearch: {
    selector: "/html/body/div/div[2]/div[1]/div/div/div[1]/div/div[1]/div[2]/span/span/input",
    locateStrategy: 'xpath'
    },
  }
}
