import {
  Card,
  TaskText,
  Status,
  CompletionTime,
  TimeText,
  Button,
  Footer,
  SettingsButton,
  DropdownMenu,
  DropdownOption,
} from "./TaskCard.styles";
import { useState } from "react";

interface TaskCardProps {
  task: string;
  completed: boolean;
  completedTime?: string;
  onComplete: () => void;
  onUndo: () => void;
  onDelete: () => void;
}

export function TaskCard({
  task,
  completed,
  completedTime,
  onComplete,
  onUndo,
  onDelete,
}: TaskCardProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleUndo = () => {
    if (window.confirm("Are you sure you want to undo this task?")) {
      onUndo();
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      onDelete();
    }
  };

  return (
    <Card completed={completed}>
      <TaskText>Did I {task}?</TaskText>

      <Status completed={completed}>{completed ? "YES" : "NO"}</Status>

      <SettingsButton onClick={() => setShowDropdown(!showDropdown)}>
        ⚙️
      </SettingsButton>

      {showDropdown && (
        <DropdownMenu>
          {completed && (
            <DropdownOption onClick={handleUndo}>Undo</DropdownOption>
          )}
          <DropdownOption onClick={handleDelete}>Delete</DropdownOption>
        </DropdownMenu>
      )}

      <Footer>
        {completed && (
          <CompletionTime>
            <TimeText>Completed at {completedTime}</TimeText>
          </CompletionTime>
        )}
        {!completed && <Button onClick={onComplete}>Mark as Done</Button>}
      </Footer>
    </Card>
  );
}
