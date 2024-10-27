import { useEffect, useState } from "react";
import {
  ModalBackground,
  ModalContent,
  ButtonContainer,
  Input,
  Button,
  Title,
  InputHint,
  ErrorText,
  CharacterCount,
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
  const maxLength = 20;

  // Dynamic placeholder suggestions
  useEffect(() => {
    const placeholders = [
      "take vitamins",
      "lock the front door",
      "complete a Duolingo lesson",
      "exercise for 30 minutes",
      "take medicine",
      "water the plants",
      "read 5 pages of a book",
      "meditate for 10 minutes",
      "write in journal",
      "plan tomorrow's tasks",
    ];
    const interval = setInterval(() => {
      const randomPlaceholder =
        placeholders[Math.floor(Math.random() * placeholders.length)];
      setPlaceholder(randomPlaceholder);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    if (!taskName || taskName.trim().length < 3) {
      setError("Please enter a more descriptive task.");
      return;
    }
    if (taskName.length > maxLength) {
      setError(`Task name must be less than ${maxLength} characters.`);
      return;
    }
    onAddTask(taskName);
    setTaskName("");
    setError("");
    onClose();
  };

  return (
    <ModalBackground>
      <ModalContent>
        <Title>I need to remind to</Title>

        <Input
          type="text"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
            setError("");
          }}
          placeholder={placeholder}
          maxLength={maxLength}
        />
        <CharacterCount>
          {taskName.length}/{maxLength}
        </CharacterCount>
        <InputHint>
          Describe the task as an action. E.g., "take vitamins"
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
