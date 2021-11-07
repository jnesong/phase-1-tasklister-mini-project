document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("#create-task-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildToDoList(e.target.new_task_description.value);
    form.reset()
  });
    
const buildToDoList = (toDoPara) => {
  //add items to build list
  let taskList = document.createElement('li');
  taskList.textContent = toDoPara + " ";
  document.querySelector("#tasks").appendChild(taskList)
  console.log(taskList);
  //add delete button
  let delButton = document.createElement("button");
  delButton.textContent = "delete this";
  taskList.appendChild(delButton);
  delButton.addEventListener("click", delItem);

}
//function for deleting that is pasesed through the button's event listener
const delItem = (e) => {
  e.target.parentNode.remove()
}

});
