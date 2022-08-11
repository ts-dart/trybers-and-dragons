/* export default interface SimpleFighter {
  lifePoints: number,
  strength: number,
  defense: number,
  attack(enemy: SimpleFighter): void;
  levelUp(): void,
  receiveDamage(attackPoints: number): number;
} */

import Fighter from './Fighter';

interface MonsterFighter {
  lifePoints: number,
  strength: number,
  attack(enemy: SimpleFighter): void,
  receiveDamage(attackPoints: number): number;
}

export default interface SimpleFighter extends Fighter, MonsterFighter {}
