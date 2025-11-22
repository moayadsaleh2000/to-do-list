let tasks = [
  {
    title: "تدريب",
    date: "15/10/2002",
    isDone: false,
  },
];

function fillTasksOnThePage() {
  document.getElementById("tasks-container").innerHTML = "";
  let index = 0;

  for (task of tasks) {
    let content = `
    <div class="task ${task.isDone ? `done` : ``}">
        <div class="rTask">
            <h4>${task.title}</h4>
            <div class="date">
            <h6>${task.date}</h6>
            <i class="bi bi-calendar"></i>
            </div>
        </div>
        <div class="ltask">
            <button onClick="deleteTask(${index})" class="trash-btn"><i class="bi bi-trash"></i></button>
            ${
              task.isDone
                ? `<button onClick="completeTask(${index})" class="check-btnx"><i class="bi bi-x"></i></button>`
                : `<button onClick="completeTask(${index})" class="check-btn"><i class="bi bi-check"></i></button>`
            }

            <button onClick="editTask(${index})"  class="edit-btn"><i class="bi bi-pencil"></i></button>
        </div>
    </div> `;
    document.getElementById("tasks-container").innerHTML += content;
    index += 1;
  }
}

fillTasksOnThePage();

document.getElementById("plus_put").addEventListener("click", function () {
  let now = new Date();
  let date =
    now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
  let TaskName = prompt("الرجاء ادخال اسم المهمه");

  if (!TaskName || TaskName.trim() === "") {
    alert("الرجاء كتابة اسم المهمة");
    return;
  }

  let taskObg = {
    title: TaskName,
    date: date,
    isDone: false,
  };
  tasks.push(taskObg);
  fillTasksOnThePage();
});

function deleteTask(index) {
  let isConFirmed = confirm("هل انت متأكد من جذف المهمة؟");
  if (isConFirmed) {
    tasks.splice(index, 1);
    fillTasksOnThePage();
  }
}

function editTask(index) {
  let task = tasks[index];
  let newTaskTitle = prompt("الرجاء تحديد عنوان المهمه الجديده", task.title);

  if (newTaskTitle) {
    task.title = newTaskTitle;
    fillTasksOnThePage();
  }
}

function completeTask(index) {
  let task = tasks[index];
  if (task.isDone) {
    task.isDone = false;
  } else {
    task.isDone = true;
  }

  fillTasksOnThePage();
}
