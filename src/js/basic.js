const characters = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]
export default function calcHealthPoint({...heroes}) {
  return heroes.name && heroes.health >= 50 ? 'healthy' : heroes.health > 15 && heroes.health < 50 ? 'wounded' : 'critical';
}
