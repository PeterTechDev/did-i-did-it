import { useState } from "react";
import styled from "styled-components";

interface AddTaskModalProps {
  onAddTask: (task: string) => void;
  onClose: () => void;
}

export function AddTaskModal({ onAddTask, onClose }: AddTaskModalProps) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = () => {
    if (taskName) {
      onAddTask(taskName);
      setTaskName(""); // Reset the input field
      onClose(); // Close the modal
    }
  };

  return (
    <ModalBackground>
      <ModalContent>
        <h2>Add a New Task</h2>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task Name"
        />
        <ButtonContainer>
          <button onClick={handleSubmit}>Add Task</button>
          <button onClick={onClose}>Cancel</button>
        </ButtonContainer>
      </ModalContent>
    </ModalBackground>
  );
}

// Styled-components
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;
