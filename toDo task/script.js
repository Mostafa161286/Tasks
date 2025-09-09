//add task 1
let  task1={ 
 id : 1,
 title :"Buy milk",
 description :"",
 completed : true,
};
//add task 2
let  task2={ 
 id : 2,
 title :"Buy rice",
 description :"",
 completed : false,
};
//add task 3
let  task3={ 
 id : 3,
 title :"Buy water",
 description :"",
 completed : true,
};
//add task 4
let  task4={ 
 id : 4,
 title :"Buy oil",
 description :"",
 completed : true,
};

let tasks=[task1,task2,task3,task4]
// print tasks
console.log(tasks);


//add a new task
function addTask(id,title,description,completed){
let newtask={
id:5,
title: "buy bread",
description:"",
completed:false
};
tasks.push(newtask);}
addTask(5, 'buy bread' , '', false)
// print tasks after adding a new task
console.log(tasks);

// edit  task1
function editTask1(id, newTitle, newDescription, newCompleted) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks[i].title = newTitle;
      tasks[i].description = newDescription;
      tasks[i].completed = newCompleted;
      break; 
    }
  }

}
editTask1(1, "buy chocolate", '500g', false)
// print after editing task 1
console.log(tasks);

// delete task2

function deleteTask2(id) {
  tasks = tasks.filter(task => task.id !== id);
}
deleteTask2(2);

//print after deleting task2
    console.log(tasks);
    
    
// Complete → changing task 5 from false to true.
function completeTask(id) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks[i].completed = true;
      break;
    }
  }
}

completeTask(5);
//print after changing 

console.log(tasks);


