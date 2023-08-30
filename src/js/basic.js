const character = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]
export default function calcHealthPoint(...character) {
  return character.name && character.health >= 50 ? 'healthy' : character.health > 15 && character.health < 50 ? 'wounded' : 'critical';
}
