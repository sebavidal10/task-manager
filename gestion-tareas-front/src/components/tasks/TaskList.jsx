// TaskList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTaskForm from './AddTaskForm';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/tasks`
        );
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const addTask = async (description) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/tasks`,
        {
          description,
        }
      );
      setTasks([...tasks, data]); // Append new task to the list
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id)); // Remove task from list
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleTaskCompletion = async (id, completed) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/tasks/${id}`,
        {
          completed: !completed,
        }
      );
      setTasks(
        tasks.map((task) =>
          task._id === id ? { ...task, completed: data.completed } : task
        )
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <>
      <AddTaskForm onAddTask={addTask} />
      <div>
        {tasks.map((task) => (
          <div
            key={task._id}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.description} - {task.completed ? 'Completed' : 'Pending'}
            <button
              onClick={() => toggleTaskCompletion(task._id, task.completed)}
            >
              {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default TaskList;
