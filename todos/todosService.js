const jsonDB = require('../db/jsonDB.js');

module.exports = {
  getAll,
  addTodo,
  deleteTodo,
  editTodo
};

async function getAll() {
  const allTodos = jsonDB.getData('/todos');
  return allTodos;
}

async function addTodo({ task, completed }) {
  jsonDB.push('/todos[]', {
    task,
    completed
  });
  return { task, completed }
}

async function deleteTodo({ task }) {

  const index = jsonDB.getIndex("/todos", `${task}`, "task");

  if (index >= 0) jsonDB.delete(`/todos[${index}]`, {
    task
  });
  else throw "Task not found"
}


async function editTodo({ task, completed }) {
  const index = jsonDB.getIndex("/todos", `${task}`, "task");
  
  if (!task || !completed) throw "missing data in request"
  else if (index >= 0) jsonDB.push(`/todos[${index}]`, {
    task,
    completed
  });
  else throw "Task not found"
}