/**
 * setText by element and text
 * @param {HTMLElement} el Element we want to set the text
 * @param {string} text The text we want to show
 */
export function setText(el, text) {
  el.innerHTML = text;
}

/**
 * Get element by query selector
 * @param {string} selector 
 * @returns {HTMLElement}
 */
export function getElement(selector) {
  return document.querySelector(selector)
}