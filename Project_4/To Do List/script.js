var listInput = document.getElementById("myInput"); //myInput
var addButton = document.getElementsByTagName("button")[0]; //first button
var incomplete_list_task = document.getElementById("incomplete-list"); //incomplete-list
var completed_list_task= document.getElementById("completed-list"); //completed-list
let clearButton = document.getElementById("clear");

var input = document.getElementById("myInput");
// Enter key function
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("add").click();
  }
});

var createNewTaskElement = function(taskString) 
{
 //Create new elemeents
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input"); 
  var label = document.createElement("label");
  var editInput = document.createElement("input");
  var editButton = document.createElement("button");
 
  var deleteButton = document.createElement("button");
  
  checkBox.type = "checkbox";
  editInput.type = "text";
  editButton.innerText = "Edit";
  editButton.className = "edit";

  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  label.innerText = taskString;
  
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

//Add a new task
var addTask = function() 
{
  // console.log("Task Added");
   var listItem = createNewTaskElement(listInput.value);
  
   incomplete_list_task.appendChild(listItem);
   bindTaskEvents(listItem, taskCompleted);
   listInput.value = "";
}
// Function for editing
let editTask = function() {

  let listItem = this.parentNode;
  let editInput = listItem.querySelector("input[type=text]");
  let label = listItem.querySelector("label");
  let containsClass = listItem.classList.contains("EditList");
  if (containsClass) {
      label.innerText = editInput.value;
  } else {
      editInput.value = label.innerText;
  }
  listItem.classList.toggle("EditList");
}

// Function for deleting task
var deleteTask = function() {
  console.log("Delete task...");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
 //Remove completed task from complete task list
  ul.removeChild(listItem);
}
//Function for task completion
var taskCompleted = function()
{
  var listItem = this.parentNode;
  completed_list_task.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}

//Function for incomplete task
var taskIncomplete = function() 
{
  var listItem = this.parentNode;
  incomplete_list_task.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

addButton.addEventListener("click", addTask);
var bindTaskEvents = function(taskListItem, checkBoxEventHandler) 
{
  console.log("Bind list item events");
  
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  
  editButton.onclick = editTask;
  
  deleteButton.onclick = deleteTask;
  
  checkBox.onchange = checkBoxEventHandler;
}
var i = 0;
for( i = 0; i < incomplete_list_task.children.length; i++) 
{
  
  bindTaskEvents(incomplete_list_task.children[i], taskCompleted);
}
for( i = 0; i < completed_list_task.children.length; i++)
{

  bindTaskEvents(completed_list_task.children[i], taskIncomplete);
}
let clear = function() {
  incomplete_list_task.innerHTML = "";
  completed_list_task.innerHTML = "";
}
clearButton.addEventListener('click', clear);