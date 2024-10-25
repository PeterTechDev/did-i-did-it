import {
  Card,
  TaskText,
  Status,
  CompletionTime,
  TimeText,
  Button,
  Footer,
  CancelButton,
} from "./TaskCard.styles";

interface TaskCardProps {
  task: string;
  completed: boolean;
  completedTime?: string;
  onComplete: () => void;
  onUndo: () => void;
}

export function TaskCard({
  task,
  completed,
  completedTime,
  onComplete,
  onUndo,
}: TaskCardProps) {
  const handleUndo = () => {
    if (window.confirm("Are you sure you want to undo this task?")) {
      onUndo();
    }
  };

  return (
    <Card completed={completed}>
      <TaskText>Did I {task}?</TaskText>

      <Status completed={completed}>{completed ? "YES" : "NO"}</Status>

      <Footer>
        {completed ? (
          <>
            <CompletionTime>
              <TimeText>Completed at {completedTime}</TimeText>
            </CompletionTime>
            <CancelButton onClick={handleUndo}>X</CancelButton>
          </>
        ) : (
          <Button onClick={onComplete}>Mark as Done</Button>
        )}
      </Footer>
    </Card>
  );
}
