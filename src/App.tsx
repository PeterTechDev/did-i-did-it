import { useState, useEffect } from "react";
import { TaskCard } from "./components/TaskCard";
import { AddTaskModal } from "./components/AddTaskModal";
import { Header } from "./components/Header";
import Instruction from "./components/Instructions";
import InfoModal from "./components/InfoModal";
import {
  loadTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from "./utils/localStorageHelpers";
import { Container } from "./styles/Layout.styles";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles/GlobalStyles";
import { Task } from "./types/TaskPops";
import { v4 as uuidv4 } from "uuid";
import "./i18n";
import { AddTaskButton } from "./components/AddTaskButton";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function App() {
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
      id: uuidv4(),
      name: taskName,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleCompleteTask = (taskId: string) => {
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

  const handleUndoTask = (taskId: string) => {
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

  const handleDeleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Header />
        <div
          className="buttons-container"
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <AddTaskButton onClick={() => setIsModalOpen(true)} />
          <InfoModal
            isFirstVisit={localStorage.getItem("isFirstVisit") !== "false"}
          />
          {/* Display modal with button and first visit control */}
        </div>
        {tasks.length < 1 ? (
          <Instruction />
        ) : (
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
        )}
        {isModalOpen && (
          <AddTaskModal
            onAddTask={handleAddTask}
            onClose={() => setIsModalOpen(false)}
          />
        )}
        <ScrollToTopButton />
      </div>
    </ThemeProvider>
  );
}
