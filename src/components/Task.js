import React from "react";

export default function Task({ task, onToggleTask, onDeleteTask }) {
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


