import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _createdInstances = 0;
  private _abiliity: EnergyType;

  constructor(name: string) {
    super(name);
    this._abiliity = 'mana';
    Mage._createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._createdInstances;
  }

  get energyType(): EnergyType {
    return this._abiliity;
  }
}