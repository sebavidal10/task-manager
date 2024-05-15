// TaskList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTaskForm from './AddTaskForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task._id}
            className={`p-4 rounded shadow-md flex justify-between items-center ${
              task.completed ? 'bg-green-100 line-through' : 'bg-white'
            }`}
          >
            <span className="text-lg">{task.description}</span>
            <div className="flex space-x-2">
              <button
                onClick={() => toggleTaskCompletion(task._id, task.completed)}
                className={`px-4 py-2 rounded text-white space-x-2 ${
                  task.completed
                    ? 'bg-yellow-500 hover:bg-yellow-600'
                    : 'bg-green-500 hover:bg-green-600'
                }`}
              >
                <FontAwesomeIcon icon={task.completed ? 'times' : 'check'} />
                <span>
                  {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                </span>
              </button>
              <button
                onClick={() => deleteTask(task._id)}
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 flex items-center space-x-2"
              >
                <FontAwesomeIcon icon="trash-alt" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TaskList;
