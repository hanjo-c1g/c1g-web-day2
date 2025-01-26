document.addEventListener('DOMContentLoaded', () => {

  // task 1 change background color
  const changeColorButton = document.getElementById('changeColorButton');
  const resetColorButton = document.getElementById('resetColorButton');
  const colors = ["lightblue", "lightgreen", "lightcoral", "lightgoldenrodyellow"];

  changeColorButton.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  });

  resetColorButton.addEventListener('click', () => {
    document.body.style.removeProperty('background-color');
  });


  // task 2: dark mode toggler
  const darkModeButton = document.querySelector("#darkModeButton");
  
  // Dark/Light Mode Switcher
  darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

});
