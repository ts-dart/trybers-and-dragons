import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
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