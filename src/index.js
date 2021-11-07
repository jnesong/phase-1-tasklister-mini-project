document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("#create-task-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildToDoList(e.target.new_task_description.value);
  });
    
function buildToDoList (toDoPara){
  let taskList = document.createElement('li');
  taskList.textContent = toDoPara;
  document.querySelector("#tasks").appendChild(taskList)
}


});
