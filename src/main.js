import { setText } from './utils';
import { setupCounter } from './counter.js';
import { setupTypeWriter } from './type-writer';

// Elements
const counterButton = document.querySelector('#counter-button');
const factorialButton = document.querySelector('#factorial-button');
const titleHeading = document.querySelector('#title-heading');

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