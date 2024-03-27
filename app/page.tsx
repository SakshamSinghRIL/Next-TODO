 'use client'
 import { GrEdit } from "react-icons/gr";
 import { MdDeleteForever } from "react-icons/md";

import { useState, useEffect } from 'react';


 export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  // useEffect(() => {
  //   const savedTasks = localStorage.getItem('tasks');
  //   if (savedTasks) {
  //     setTasks(JSON.parse(savedTasks));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleEditTask = (index: number) => {
    const updatedTask = prompt('Edit task:', tasks[index]);
    if (updatedTask !== null) {
      const newTasks = [...tasks];
      newTasks[index] = updatedTask;
      setTasks(newTasks);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-center text-4xl font-bold mb-5 text-blue-600">To-Do List</h1>
      <div className="mt-4 flex justify-center">
        <input
          type="text"
          className="border border-gray-300 p-2"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => {                 // we can also put values using enter key 
            if (e.key === 'Enter') {
              handleAddTask();
            }
          }}
        />
        <button
          className="ml-2 bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <div key={index} className="flex justify-between items-center p-4 border-b">
            <div>{task}</div>
            <div className="flex space-x-2">
              <button className="" onClick={() => handleEditTask(index)}>
              <GrEdit />
              </button>
              <button className="" onClick={() => handleDeleteTask(index)}>
              <MdDeleteForever />
              </button>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
}

