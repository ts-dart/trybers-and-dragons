import Races from './Races';

export default class Orc extends Races {
  private static count = 0;
  public maxLifePoints = 74;
  public n: string;
  public d: number;

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
