import TypewriterEffect from 'typewriter-effect/dist/core';

/**
 * Setup type writer effect to the element when element clicked
 * @param {HTMLElement} element
 * @param {string} text
 */
export function setupTypeWriter(element, text) {

  /**
   * @type {import('typewriter-effect').TypewriterClass}
   */
  let typeWritter = null
  let isTyping = false

  const toggleTypeWritter = async () => {
    if (!typeWritter) {
      typeWritter = new TypewriterEffect(element, {
        loop: true,
      });
    }

    if (isTyping) {
      typeWritter.stop()
      isTyping = false
    }
    else {
      typeWritter.deleteAll().typeString(text).start()
      isTyping = true
    }
  }

  element.addEventListener('click', toggleTypeWritter)
}