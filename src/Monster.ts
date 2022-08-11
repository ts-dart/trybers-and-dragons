import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
    this._defense = 0;
  }

  public get lifePoints(): number { return this._lifePoints; }
  public get strength(): number { return this._strength; }
  public get defense(): number { return this._defense; }

  public receiveDamage(attackPoints: number): number {
    const damage: number = this._lifePoints - attackPoints;
    if (damage > 0) this._lifePoints -= damage; 
    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  public attack(enemy: Fighter): void {
    let { lifePoints } = enemy;
    lifePoints -= this._strength;
    console.log(lifePoints);
  } 

  public levelUp(): void { console.log(this._defense); }
}
