/**
 * @jest-environment jsdom
 */

import CardsValidator from '../CardsValidator';

/* eslint-disable quotes */
test('Validate Luhn Algorithm', () => {
  const validator = new CardsValidator();
  expect(validator.luhnAlgorithm('6011870328613948')).toBeTruthy();
});

test('Fail Luhn Algorithm for Cards', () => {
  const validator = new CardsValidator();
  expect(validator.luhnAlgorithm('3434')).not.toBeTruthy();
});

test('Validate MASTERCARD card', () => {
  const validator = new CardsValidator();
  expect(validator.paymentSystemCheck('5318065797202099')).toBe('mastercard');
});

test('Validate VISA card', () => {
  const validator = new CardsValidator();
  expect(validator.paymentSystemCheck('4758024707169070')).toBe('visa');
});

test('Validate AMEX card', () => {
  const validator = new CardsValidator();
  expect(validator.paymentSystemCheck('3013522570371072')).toBe('amex');
});

test('Validate MIR card', () => {
  const validator = new CardsValidator();
  expect(validator.paymentSystemCheck('2200972321544391')).toBe('mir');
});

test('Validate Discover card', () => {
  const validator = new CardsValidator();
  expect(validator.paymentSystemCheck('6011870328613948')).toBe('discover');
});
