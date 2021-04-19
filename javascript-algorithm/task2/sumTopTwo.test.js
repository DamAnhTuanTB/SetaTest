
const { test } = require("@jest/globals");
const sumTopTwo = require("./sumTopTwo");

test("Input: [1, 4, 2, 3, 5] => Top two is [5,4] => Sum top two is 9", () => {
    expect(sumTopTwo([1, 4, 2, 3, 5])).toBe(9);
});

test("Input: [1, 1, 2] => Top two is [2,1] => Sum top two is 3", () => {
    expect(sumTopTwo([1, 1, 2])).toBe(3);
});

test("Input: [1, 1, 2, 2] => Top two is [2,1] => Sum top two is 3", () => {
    expect(sumTopTwo([1, 1, 2, 2])).toBe(3);
});

test("Input: [1, 1] => Top two is [1]  => Sum top two is 1", () => {
    expect(sumTopTwo([1, 1])).toBe(1);
});

test("Input: [1] => Top two is [1]  => Sum top two is 1", () => {
    expect(sumTopTwo([1])).toBe(1);
});

test("Input: [] => Top two is []  => Sum top two is 0", () => {
    expect(sumTopTwo([])).toBe(0);
});








  