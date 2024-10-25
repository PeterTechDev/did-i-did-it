import { useState, useEffect } from "react";
import { TaskCard } from "./components/TaskCard";
import { AddTaskModal } from "./components/AddTaskModal";
import {
  loadTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from "./utils/localStorageHelpers";
import { Container } from "./styles/Layout.styles";
import { Task } from "./types/TaskPops";

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedTasks = loadTasksFromLocalStorage();
    if (storedTasks && storedTasks.length > 0) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      saveTasksToLocalStorage(tasks);
    }
  }, [tasks]);

  const handleAddTask = (taskName: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleCompleteTask = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: true,
              completedTime: new Date().toLocaleTimeString("en-US"),
            }
          : task
      )
    );
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Daily reminder</h1>
      <button onClick={() => setIsModalOpen(true)}>+ Add Task</button>

      <Container>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task.name}
            completed={task.completed}
            completedTime={task.completedTime}
            onComplete={() => handleCompleteTask(task.id)}
          />
        ))}
      </Container>

      {isModalOpen && (
        <AddTaskModal
          onAddTask={handleAddTask}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
