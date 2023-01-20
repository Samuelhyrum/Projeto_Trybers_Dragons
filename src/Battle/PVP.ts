import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2: Fighter;
 
  constructor(
    private player1: Fighter,
    player2: Fighter,
  ) {
    super(player1);
    this._player2 = player2;
  }

  public get player2(): Fighter {
    return this._player2;
  }

  fight(): number {
    while (this.player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      this.player1.attack(this._player2);
      if (this._player2.lifePoints > 0) {
        this._player2.attack(this.player1);
      }
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}