export const heroes = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]

export default function sortedArray(heroes) {
  return heroes.sort((a, b) => {
    if (a.health < b.health) {
      return 1
    } else if (a.health > b.health) {
      return -1
    } else {
      return 0
    }
  })
}
