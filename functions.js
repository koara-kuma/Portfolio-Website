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
}
}

// Event listener for page load
window.addEventListener('load', startAnimation);

function copyUsernameToClipboard() {
    // Create a temporary input element
    var tempInput = document.createElement("input");
    
    // Set the value of the input element to your Discord username
    tempInput.value = "miloval"; // Replace "miloval" with your actual Discord username
    
    // Append the input element to the document body
    document.body.appendChild(tempInput);
    
    // Select the input element's content
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the selected content to the clipboard
    document.execCommand("copy");
    
    // Remove the temporary input element from the document body
    document.body.removeChild(tempInput);

    // Display an alert message
    alert("Discord username copied to clipboard!");
  }

  // Function to update the EST time every second
function updateESTTime() {
  const date = new Date();
  const options = { timeZone: 'America/New_York', timeZoneName: 'short' };
  const estTime = date.toLocaleString('en-US', options);

  // Update the content of the est-time element
  document.getElementById('est-time').textContent = estTime;
}

// Initial call to update the EST time
updateESTTime();

// Update the EST time every second
setInterval(updateESTTime, 1000);


