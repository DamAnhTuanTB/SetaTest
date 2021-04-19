const findString = require('./findString');

test("Input: ['a', 'ab', 'abc', 'cd', 'def', 'gh'] - Expected output: ['ab', 'cd', 'gh']", () => {
  expect(findString(['a', 'ab', 'abc', 'cd', 'def', 'gh'])).toStrictEqual(['ab', 'cd', 'gh']);
});

test("Input: ['a', 'ab', 'ac', 'abc', 'def'] - Expected output: ['ab', 'ac', 'abc, 'def']", () => {
  expect(findString(['a', 'ab', 'ac', 'abc', 'def'])).toStrictEqual(['ab', 'ac', 'abc', 'def']);
});

test("Input: ['a', 'b', 'c'] - Expected output: ['a', 'b', 'c']", () => {
  expect(findString(['a', 'b', 'c'])).toStrictEqual(['a', 'b', 'c']);
});

test("Input: ['a'] - Expected output: ['a']", () => {
  expect(findString(['a'])).toStrictEqual(['a']);
});

test("Input: [] - Expected output: []", () => {
  expect(findString([])).toStrictEqual([]);
});



