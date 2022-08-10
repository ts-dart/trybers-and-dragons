import { EnergyType } from '../Energy';
import Archetypes from './Archetype';

export default class Warrior extends Archetypes {
  private static count = 0;
  public energyType: EnergyType = 'stamina';
  public n: string;

  constructor(n: string) {
    super('');

    this.n = n;
  }

  public static createdArchetypeInstances(): number {
    this.count += 1;
    return this.count;
  }
}
