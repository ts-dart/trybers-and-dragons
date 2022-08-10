import Races from './Races';

export default class Dwarf extends Races {
  private static count = 0;
  public maxLifePoints = 80;
  n: string;
  d: number;

  constructor(
    n: string,
    d: number,
  ) {
    super('', 0);

    this.n = n;
    this.d = d;
  }

  public static createdRacesInstances(): number {
    this.count += 1;
    return this.count;
  }
}
