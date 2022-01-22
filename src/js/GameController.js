export default class GameController {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
  }

  init() {
    this.gamePlay.drawBoard();
    this.gamePlay.showGoblin(500);
  }
}
