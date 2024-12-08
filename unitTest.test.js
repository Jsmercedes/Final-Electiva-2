
const dick = require('./app');

test('debe de decir (Hola bro!)', () => {
    expect(dick()).toBe("Hola bro!");
})