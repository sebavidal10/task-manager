// AddTaskForm.js
import React, { useState } from 'react';

function AddTaskForm({ onAddTask }) {
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask(description);
    setDescription(''); // Clear input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter a new task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
