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
  
  darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // task 3: To-Do-Liste
  const todoInput = document.querySelector("#todoInput");
  const addTodoButton = document.querySelector("#addTodoButton");
  const todoList = document.querySelector("#todoList");

  addTodoButton.addEventListener("click", () => {
      const todoText = todoInput.value;
      if (!todoText) return;

      // create new list element
      const listItem = document.createElement("li");

      // create new checkbox element of type checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      // add event listener to the checkbox to strikeout the todo if checkbox gets checked
      checkbox.addEventListener("change", () => {
          listItem.style.textDecoration = checkbox.checked ? "line-through" : "none";
      });

      // create the delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Löschen";
      // add event listener to the deletebutton to allow removal of list item
      deleteButton.addEventListener("click", () => {
          // perform a simple confirmation dialog before deleting
          if (confirm("Möchtest du dieses To-Do wirklich löschen?")) {
              listItem.remove();
          }
      });

      // attach all elements to the list item
      listItem.textContent = todoText;
      listItem.prepend(checkbox);
      listItem.appendChild(deleteButton);

      // add the list item to the todo list
      todoList.appendChild(listItem);
      
      // reset the todo input box
      todoInput.value = "";
  });


});
