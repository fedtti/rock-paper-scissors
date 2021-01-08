const instructions = document.getElementById('instructions');
const hideInstructions = () => {

};

/**
 * Close the instructions modal on user input.
 */
const closeInstructions = () => {
  instructions.style.opacity = '0';
  instructions.style.visibility = 'hidden';
};
const closeInstructionsButton = document.getElementById('close-instructions');
closeInstructionsButton.addEventListener('click', closeInstructions, false);