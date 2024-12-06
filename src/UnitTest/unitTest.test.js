
const greet = require('./index');

test('Greet say (HelloWorld!)', () => {
    expect(greet()).toBe("HelloWorld!");
})