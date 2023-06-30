// Get the element
// Get the element
const element = document.getElementById('typing-animation');

// Define the text to be animated
const text = '☕ I am a software developer.☕';

// Define animation speed (in milliseconds)
const speed = 100;

// Initialize character counter
let charIndex = 0;

// Function to start the animation
function startAnimation() {
  if (charIndex < text.length) {
    // Append the next character to the element
    element.textContent += text.charAt(charIndex);

    // Increment the character counter
    charIndex++;

    // Call the function recursively after the specified speed
    setTimeout(startAnimation, speed);
  } else {
    // Delay before resetting the animation
    setTimeout(() => {
      charIndex = 0;
      element.textContent = '';
      startAnimation();
    }, 5000); // Adjust the delay as needed
  }
}

// Event listener for page load
window.addEventListener('load', startAnimation);

