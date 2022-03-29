const {getHellowMessage} = require("./greeting.controller")


test('Test Hellow message', () => {
    expect(getHellowMessage()).toBe("Hello World!")
})
