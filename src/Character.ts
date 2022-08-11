import { Mage } from './Archetypes';
import Archetype from './Archetypes/Archetype';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number; 
  private _energy: Energy;

  constructor(
    name: string,
  ) {
    this._name = name;
    this._race = new Elf('', 0);
    this._archetype = new Mage('');
    this._maxLifePoints = Number(this._race._maxLifePoints) / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Character.genRandomNum(11);
    this._defense = Character.genRandomNum(11);
    this._dexterity = Character.genRandomNum(11); 
    this._energy = { 
      type_: this._archetype.energyType, 
      amount: Character.genRandomNum(11),
    };
  }

  public get race(): Race { return this._race; }
  public get archetype(): Archetype { return this._archetype; }
  public get lifePoints(): number { return this._lifePoints; }
  public get strength(): number { return this._strength; }
  public get defense(): number { return this._defense; }
  public get dexterity(): number { return this._dexterity; }
  public get energy(): Energy { return this._energy; }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) this._lifePoints -= damage; 
    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  public attack(enemy: Fighter): void {
    let { lifePoints } = enemy;
    lifePoints -= this._strength;
    console.log(lifePoints);
  } 

  public levelUp(): void {
    this._strength += Character.genRandomNum(11);
    this._defense += Character.genRandomNum(11);
    this._dexterity += Character.genRandomNum(11);
    this._maxLifePoints += Character.genRandomNum(11);
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race._maxLifePoints) {
      this._maxLifePoints = this._race._maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  public special(enemy: Fighter): void {
    let { lifePoints } = enemy;
    lifePoints = this._strength + 100;
    console.log(lifePoints);
  } 

  private static genRandomNum(limit: number): number {
    return parseInt(String(Math.random() * limit), 10);
  }
}

const t = new Character('geralt');
console.log(t);