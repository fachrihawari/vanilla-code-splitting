import { setText } from './utils';

/**
 * Factorial calculation
 * @param {number} n Size we want to calculate
 * @returns {number} The factorial result
 */
function factorial(n) {
  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
}

/**
 * Setup factorial module
 * @param {HTMLElement} element
 * @param {object} state
 */
export function setupFactorial(element, state) {
  const setFactorial = () => {
    state.factorial = factorial(state.counter);
    setText(element, `Factorial ${state.factorial}`);
  };
  element.addEventListener('click', setFactorial);

  // Initialize factorial
  setFactorial();
}
