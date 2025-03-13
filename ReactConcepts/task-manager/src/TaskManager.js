import React, { useState } from "react";

const TaskManager = () => {  // functional component that holds task manager logic
  const [tasks, setTasks] = useState([]); // stores all tasks
  const [taskText, setTaskText] = useState(""); // stores tasks entered by user

  // Add a new task
  const addTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, { text: taskText, completed: false }]); // default task completion status=false
      setTaskText(""); 
    }
  };

  // Toggle task completion
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task // cpmpletion status
    );
    setTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="task-container">
      <h2>Task Manager</h2>
      <div className="input-box">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <span onClick={() => toggleTask(index)}>{task.text}</span>
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
