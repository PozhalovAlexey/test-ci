import calcHealthPoint from "../basic";

test.each([
  ['мечник', 10],
  ['маг', 100],
  ['лучник', 80]
])('testing function with health point character with %c character %h health',(character,healthPoint,expected) => {
  const result = calcHealthPoint(healthPoint)

  expect(result).toBe(expected);
})

