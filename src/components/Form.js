import React, { useState } from "react";

export default function Form({ addTask }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;
    alert("Please enter an item description.")
    const newTask = {
      id: Date.now(),
      description,
      quantity,
      done: false
    };
    addTask(addTask);
    setDescription("");
    setQuantity(1);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleQuantity(e) {
    setQuantity(Number(e.target.value));
  }

  return (
    <form className="add-form"
    onSubmit={handleSubmit}>
      <h3>What do you need to do?</h3>
      <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <input 
      type="text"
      placeholder="Task..."
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
