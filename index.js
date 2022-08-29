const toDoList = [];

function addToDo() {
  let toDoItem = document.getElementById("toDoItem");
  toDoList.push(toDoItem.value);
  toDoItem.value = "";
  generateToDoList();
}

function generateToDoList() {
  const list = document.getElementById("list");
  const newListItem = document.createElement("li");
  toDoList.map((item) => {
    newListItem.innerText = item;
    list.appendChild(newListItem);
  });
}
