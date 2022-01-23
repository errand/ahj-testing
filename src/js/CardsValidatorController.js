export default class CardsValidatorController {
  constructor(cardsValidator) {
    this.cardsValidator = cardsValidator;
    this.cards = null;
  }

  init() {
    this.cardsValidator.checkBinding();
    this.cards = this.cardsValidator.cards;
    console.log(this.cardsValidator.systemCheck('2035300539804083' ))
  }
}
