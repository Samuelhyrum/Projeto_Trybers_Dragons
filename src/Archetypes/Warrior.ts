import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _createdInstances = 0;
  private _abiliity: EnergyType;

  constructor(name: string) {
    super(name);
    this._abiliity = 'stamina';
    Warrior._createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdInstances;
  }

  get energyType(): EnergyType {
    return this._abiliity;
  }
}