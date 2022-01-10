
// sample commands to that will actually exeute the steps the need to run during the test.
let commands = {

    navigate: function() {
        this.navigate()
        this.maximizeWindow()
    },


}


module.exports = {
    // selectors where you can 

    commands: [commands],
    url: 'https://wikipedia.org',
        elements: {
        startHere: {
          selector: "Sample Selector",
          locateStrategy: 'xpath'},


    }

    //locateStrategy: async function (selector) { return await selector.startsWith('/') ? 'xpath' : 'css selector'; }

    }