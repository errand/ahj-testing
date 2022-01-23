export default class CardsValidatorController {
  constructor(cardsValidator) {
    this.cardsValidator = cardsValidator;
    this.cards = this.cardsValidator.cards;
  }

  init() {
    this.cardsValidator.checkBinding();
    this.cardsValidator.addInputListener(this.validateCard.bind(this));
  }

  /**
   * Card payment system check
   *
   * @param value
   */
  validateCard(value) {
    this.disableActiveCards();
    const paymentSystem = this.cardsValidator.paymentSystemCheck(value);
    if (paymentSystem) {
      const card = this.cardsValidator.container.querySelector(`.${paymentSystem}`);
      card.classList.add('active');
    }
  }

  disableActiveCards() {
    console.log(this.cards);
    this.cards.forEach(el => el.classList.remove('active'));
  }
}
