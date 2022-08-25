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
      try {
        const module = await import('typewriter-effect/dist/core')

        typeWritter = new module.default(element, {
          loop: true,
        });
      } catch (error) {
        console.log("Opps failed to load typewritter-effect")
      }
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