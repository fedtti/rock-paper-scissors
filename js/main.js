const instructions = document.getElementById('instructions');

/**
 * Hide the instructions modal on page loading, if a user has already read it.
 */
const hideInstructions = () => {
  if (localStorage.getItem('instructions') === 'read') {
    instructions.style.display = 'none';
  }
};
window.onload = hideInstructions;

/**
 * Close the instructions modal on a user input.
 */
const closeInstructions = () => {
  instructions.style.opacity = '0';
  instructions.style.visibility = 'hidden';

  /**
   * Remember that a user has already read the instructions.
   */
  if (typeof(Storage) !== 'undefined') {
    localStorage.setItem('instructions', 'read');
  }
};
const closeInstructionsButton = document.getElementById('close-instructions');
closeInstructionsButton.addEventListener('click', closeInstructions, false);