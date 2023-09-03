import calcHealthPoint from "../basic";

test.each([
  {name: 'мечник', health: 10, type: 'critical'},
  {name: 'маг', health: 100, type: 'healthy'},
  {name: 'лучник', health: 80, type: 'healthy'}
])('testing function with health point character with %c character %h health', (a) => {
  const result = calcHealthPoint(a.health)
  expect(result).toBe(a.type);
})

