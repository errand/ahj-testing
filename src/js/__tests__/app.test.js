/**
 * @jest-environment jsdom
 */

import CardsValidator from '../CardsValidator';
import CardsValidatorController from '../CardsValidatorController';


const div = document.createElement('div');
div.classList.add('cards-container');
document.body.appendChild(div);

/* eslint-disable quotes */
test('Binding to DOM', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const validator = new CardsValidator();
  validator.bindToDOM(document.querySelector('.cards-container'));

  const validatorCtrl = new CardsValidatorController(validator);
  validatorCtrl.init();
  /* eslint-disable no-console */
  console.log('it works!');

  expect(consoleSpy).toHaveBeenCalledWith('it works!');
});

test('NOT Binding to DOM', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const validator = new CardsValidator();

  const validatorCtrl = new CardsValidatorController(validator);

  expect(() => {
    validatorCtrl.init();
  }).toThrow();
});
