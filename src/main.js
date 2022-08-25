import { getElement, setText } from './utils';
import { setupCounter } from './counter.js';
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

// Split the factorial module from the main bundle
import('./factorial')
  .then(({ setupFactorial }) => {
    // Setup factorial module
    setupFactorial(factorialButton, state);
  })
  .catch(() => {
    // Show error if failed to load the module
    setText(factorialButton, 'Failed to load the factorial module');
  });

// Setup type writer module, load bundle by event
setupTypeWriter(titleHeading, "Hello Code Splitting");