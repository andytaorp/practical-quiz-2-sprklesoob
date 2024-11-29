import React from "react";

function Task({ task, onToggleTask, onDeleteTask }) {
    return (
      <li>
        <input
        type="checkbox"
        value={task.done}
        onChange={() => onToggleTask(task.id)}
        />
        <span
        style={{
          textDecoration: task.done ? "line-through" : "none",
        }}
        >
          {task.description} - Quantity: {task.quantity}
          </span>
      <button
        style={{
          marginLeft: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          fontSize: "16px",
          cursor: "pointer",
          textAlign: "center",
          lineHeight: "30px",
        }}
        onClick={() => onDeleteTask(task.id)}
      >
        X
      </button>
    </li>
  );
}

function Stats({tasks}) {
    const numTasks = tasks.length;
    const numDone = tasks.filter((task) => task.done).length;
    const percentage = Math.round((numDone/numTasks) * 100);
  
    return (
      <footer className="stats">
        <em>
          {percentage === 100
          ? "You got everything!"
          : `You have ${numTasks} items in the list. You already packed ${numPacked} ${percentage}%).`}
        </em>
      </footer>
    );
  }

export default function Task() {}
export default function Stats() {}
