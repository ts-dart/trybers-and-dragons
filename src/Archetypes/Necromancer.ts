import Archetypes from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetypes {
  private static count = 0;
  public energyType: EnergyType = 'mana';
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
