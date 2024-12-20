const todos = [
  "Walk dog",
  "Do laundry",
  "Call mom",
  "Finish paper",
  "Code a small project",
  "Read docs",
  "Grab food",
  "Go to the post office",
];

const todoList = document.querySelector(".todos");

const button = document.querySelector(".show-todos");

const showTodos = function () {
  todos.forEach(function (todo) {
    const li = document.createElement("li");
    li.innerHTML = todo;
    todoList.append(li);
  });
  todoList.classList.remove("hide");
  button.innerText = "Hide To-Dos";
};

button.addEventListener("click", function () {
  if (todoList.classList.contains("hide")) {
    showTodos();
  } else {
    button.innerText = "Show me!";
    todoList.classList.add("hide");
    todoList.innerHTML = "";
  }
});
