export default class CardsValidator {
  constructor() {
    this.container = null;
    this.formInput = null;
    this.formButton = null;
    this.cards = null;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
    this.formInput = this.container.querySelector('#card_number');
    this.formButton = this.container.querySelector('#submitform');
    this.cards = Array.from(this.container.querySelector('.cards').children);
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('CardsValidator not bind to DOM');
    }
  }

  /**
   * Loon algorithm
   *
   * @param setValue: string
   */
  luhnAlgorithm(setValue) {
    let ch = 0;
    const num = String(setValue).replace(/\D/g, '');
    const isOdd = num.length % 2 !== 0;

    if ('' === num) return false;

    for (let i = 0; i < num.length; i++) {
      let n = parseInt(num[i], 10);

      ch += (isOdd | 0) === (i % 2) && 9 < (n *= 2) ? (n - 9) : n;
    }

    return 0 === (ch % 10);
  }


  /**
   * Card payment system check
   *
   * @param setValue: string
   */
  systemCheck(setValue) {
    const firstLetter = setValue.charAt(0)
    switch (firstLetter) {
      case '2':
        return 'mir';
        break;
    }
  }
}
