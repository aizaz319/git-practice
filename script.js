// Get the button element
const changeColorBtn = document.getElementById('changeColorBtn');

// Define an array of colors
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#8E44AD'];

// Track the current color index
let colorIndex = 0;

// Function to change the background color
function changeBackgroundColor() {
  // Change background color
  document.body.style.backgroundColor = colors[colorIndex];

  // Increment the color index and reset if it exceeds the array length
  colorIndex = (colorIndex + 1) % colors.length;
}

// Add event listener to the button
changeColorBtn.addEventListener('click', changeBackgroundColor);
