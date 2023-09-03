import sortedArray, {heroes} from "../sort";

const finalArray = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]


test('check sorted', () => {
  const result = sortedArray(heroes)

  expect(result).toStrictEqual(finalArray);
})
