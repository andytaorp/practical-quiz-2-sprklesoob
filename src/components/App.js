import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  }

  const handleToggleTask = (id) => {
   setTasks((prevTasks) => prevTasks.map((task) => 
   task.id === id ? {...task, done: !task.done} : task));
  }

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function TaskList({ tasks, onToggleTask, onDeleteTask, onUpdateTask }) {
  const finishedTasks = tasks.filter((task) => task.done);
  const unfinishedTasks = tasks.filter((task) => !task.done);
  
  return (
    <div className="list">
      <h2>Unfinished Tasks</h2>
      <ul>
        {unfinishedTasks.map((task) => (
          <Task 
          task={task} 
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
          onUpdateTask={onUpdateTask}
          key={task.id}>
          </Task>
        ))}
      </ul>
      <h2>Finished Tasks</h2>
      <ul>
        {finishedTasks.map((task) => (
          <Task
          task={task} 
          onTogglePacked={onToggleTask}
          onDeleteItem={onDeleteTask}
          key={task.id}>
          </Task>
        ))}
      </ul>
    </div>
  );
}

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <Form onAddItem={handleAddTask} />
      <TaskList 
      tasks={tasks}
      onDeleteItem={handleDeleteTask}
      onUpdateItem={handleToggleTask}
      />
    </div>
  );
}

export default App;
