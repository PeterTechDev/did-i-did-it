import { useState, useEffect } from "react";
import {
  ModalBackground,
  ModalContent,
  ButtonContainer,
  Input,
  Button,
  Title,
  InputHint,
  ErrorText,
} from "./AddTaskModal.styles";

interface AddTaskModalProps {
  onAddTask: (task: string) => void;
  onClose: () => void;
}

export function AddTaskModal({ onAddTask, onClose }: AddTaskModalProps) {
  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState("");
  const [placeholder, setPlaceholder] = useState(
    "take vitamins, duolingo lesson..."
  );

  // Dynamic placeholder suggestions
  useEffect(() => {
    const placeholders = [
      "take vitamins",
      "feed the cat",
      "lock the door",
      "complete Duolingo lesson",
      "exercise for 30 minutes",
    ];
    const interval = setInterval(() => {
      const randomPlaceholder =
        placeholders[Math.floor(Math.random() * placeholders.length)];
      setPlaceholder(randomPlaceholder);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    if (!taskName || taskName.trim().length < 3) {
      setError("Please enter a more descriptive task.");
      return;
    }
    onAddTask(taskName);
    setTaskName("");
    setError("");
    onClose();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <ModalBackground>
      <ModalContent>
        <Title>Set a reminder to...</Title>

        <Input
          type="text"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
            setError("");
          }}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
        />
        <InputHint>
          Describe the task as an action. E.g., "take vitamins", "lock the door"
        </InputHint>
        {error && <ErrorText>{error}</ErrorText>}

        <ButtonContainer>
          <Button onClick={onClose}>Cancel</Button>
          <Button primary onClick={handleSubmit}>
            Add
          </Button>
        </ButtonContainer>
      </ModalContent>
    </ModalBackground>
  );
}
