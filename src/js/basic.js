const characters = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]
export default function calcHealthPoint(health) {
  console.log(health)
  if (health >= 50) {
    return 'healthy';
  } else {
    if (health > 15 && health < 50) {
      return 'wounded';
    } else {
      return 'critical';
    }

  }
}
