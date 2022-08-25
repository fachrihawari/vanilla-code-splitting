import { getElement } from './utils';
import { setupCounter } from './counter.js';
import { setupFactorial } from './factorial';
import { setupTypeWriter } from './type-writer';

// Elements
const counterButton = getElement('#counter-button');
const factorialButton = getElement('#factorial-button');
const titleHeading = getElement('#title-heading');

// State
const state = {
  counter: 0,
  factorial: 0,
};

// Setup counter module
setupCounter(counterButton, state);

// Setup factorial module
setupFactorial(factorialButton, state);

// Setup type writter module
setupTypeWriter(titleHeading, "Hello Code Splitting!");