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
    <form
      onSubmit={handleSubmit}
      className="flex items-center space-x-4 p-4 bg-white rounded shadow-md"
    >
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter a new task"
        required
        className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;
