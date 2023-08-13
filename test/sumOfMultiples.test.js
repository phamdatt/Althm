const sumOfMultiples = require('../sumOfMultiples');
test('Sum all of 7 divisible for 3,5,7 equal 21', () => {
    expect(sumOfMultiples(7)).toBe(21);
});

test('Sum all of 15 divisible for 3,5,7 equal 81', () => {
    expect(sumOfMultiples(15)).toBe(81);
});

// test case
//7->21
//15->81