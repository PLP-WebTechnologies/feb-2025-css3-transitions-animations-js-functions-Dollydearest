// Function to trigger animation and store preferences
document.getElementById('animateBtn').addEventListener('click', function() {
  const box = document.getElementById('animateBox');

  // Trigger animation
  box.style.animation = 'boxAnimation 2s ease-in-out';

  // Store animation state in localStorage
  localStorage.setItem('animationTriggered', 'true');
  console.log('Animation triggered and stored in localStorage');
});

// Function to retrieve animation preference from localStorage and apply it
window.onload = function() {
  const animationState = localStorage.getItem('animationTriggered');
  if (animationState === 'true') {
    const box = document.getElementById('animateBox');
    box.style.animation = 'boxAnimation 2s ease-in-out';
  }
};

// Color picker and box size adjustment using localStorage for persistence
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', function(event) {
  const box = document.getElementById('animateBox');
  box.style.backgroundColor = event.target.value;

  // Store the color in localStorage
  localStorage.setItem('boxColor', event.target.value);
});

// Box size slider and persistence in localStorage
const boxSize = document.getElementById('boxSize');
boxSize.addEventListener('input', function(event) {
  const box = document.getElementById('animateBox');
  const size = event.target.value;
  box.style.width = size + 'px';
  box.style.height = size + 'px';

  // Store box size in localStorage
  localStorage.setItem('boxSize', size);
});

// Retrieve stored preferences from localStorage on page load
window.onload = function() {
  const savedColor = localStorage.getItem('boxColor');
  const savedSize = localStorage.getItem('boxSize');

  if (savedColor) {
    colorPicker.value = savedColor;
    document.getElementById('animateBox').style.backgroundColor = savedColor;
  }

  if (savedSize) {
    document.getElementById('animateBox').style.width = savedSize + 'px';
    document.getElementById('animateBox').style.height = savedSize + 'px';
    boxSize.value = savedSize;
  }
};
