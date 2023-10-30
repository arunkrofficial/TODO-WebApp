document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${taskText}</span>
        <div class="button-container">
          <button class="complete-button"><i class="fas fa-check"></i></button>
          <button class="delete-button"><i class="fas fa-trash"></i></button>
        </div>
      `;

      li.querySelector(".complete-button").addEventListener("click", function () {
        li.querySelector("span").classList.toggle("complete-button");
      });

      li.querySelector(".delete-button").addEventListener("click", function () {
        taskList.removeChild(li);
      });

      taskList.appendChild(li);
      taskInput.value = "";
    }
  }

  // Add a task when the "Add" button is clicked
  document.querySelector(".add-task button").addEventListener("click", addTask);

  // Add a task when the Enter key is pressed in the input field
  taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
