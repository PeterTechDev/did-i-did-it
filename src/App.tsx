import { useState, useEffect } from "react";
import { TaskCard } from "./components/TaskCard";
import { AddTaskModal } from "./components/AddTaskModal";
import { Header } from "./components/Header";
import {
  loadTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from "./utils/localStorageHelpers";
import { Container } from "./styles/Layout.styles";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles/GlobalStyles";
import { Task } from "./types/TaskPops";
import {} from "uuid";

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
              completedTime: new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              }),
            }
          : task
      )
    );
  };

  const handleUndoTask = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: false,
              completedTime: undefined,
            }
          : task
      )
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Header onOpenModal={() => setIsModalOpen(true)} />

        <Container>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task.name}
              completed={task.completed}
              completedTime={task.completedTime}
              onComplete={() => handleCompleteTask(task.id)}
              onUndo={() => handleUndoTask(task.id)}
              onDelete={() => handleDeleteTask(task.id)}
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
    </ThemeProvider>
  );
}

export default App;
