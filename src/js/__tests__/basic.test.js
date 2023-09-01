import calcHealthPoint from "../basic";

test.each([
  ['мечник', 10, 'critical'],
  ['маг', 100, 'healthy'],
  ['лучник', 80, 'healthy']
])('testing function with health point character with %c character %h health', (characters, healthPoint, expected) => {
  const result = calcHealthPoint(healthPoint)

  expect(result).toBe(expected);
})

