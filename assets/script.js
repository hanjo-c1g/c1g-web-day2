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

});
