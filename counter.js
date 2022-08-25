import { setText } from './utils';

/**
 * Setup counter module
 * @param {HTMLElement} element
 * @param {object} state
 */
export function setupCounter(element, state) {
  const setCounter = (counter) => {
    setText(element, `count is ${counter}`);
  };

  // Handle counter button click
  element.addEventListener('click', () => setCounter(++state.counter));

  // Initialize counter
  setCounter(state.counter);
}
