import './App.css';
import TaskList from './components/tasks/TaskList';

function App() {
  return (
    <>
      <h1 class="text-4xl font-extrabold text-gray-800 mb-4 flex items-center justify-center space-x-3">
        <span>Task Manager</span>
      </h1>

      <TaskList />
    </>
  );
}

export default App;
