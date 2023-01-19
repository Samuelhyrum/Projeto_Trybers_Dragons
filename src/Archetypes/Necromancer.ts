import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _createdInstances = 0;
  private _abiliity: EnergyType;

  constructor(name: string) {
    super(name);
    this._abiliity = 'mana';
    Necromancer._createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdInstances;
  }

  get energyType(): EnergyType {
    return this._abiliity;
  }
}