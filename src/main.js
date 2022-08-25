import { setText } from './utils';
import { setupCounter } from './counter.js';

// Elements
const counterButton = document.querySelector('#counter-button');
const factorialButton = document.querySelector('#factorial-button');

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
