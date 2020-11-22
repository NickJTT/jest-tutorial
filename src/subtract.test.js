const subtract = require('./subtract');

test('properly adds two numbers', () => {
  expect(subtract(2, 1)).toBe(1);
});
