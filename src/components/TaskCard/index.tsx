import {
  Card,
  TaskText,
  Status,
  CompletionTime,
  TimeText,
  Button,
  Footer,
} from "./TaskCard.styles";

interface TaskCardProps {
  task: string;
  completed: boolean;
  completedTime?: string;
  onComplete: () => void;
}

export function TaskCard({
  task,
  completed,
  completedTime,
  onComplete,
}: TaskCardProps) {
  return (
    <Card completed={completed}>
      <TaskText>Did I {task}?</TaskText>

      <Status completed={completed}>{completed ? "YES" : "NO"}</Status>

      <Footer>
        {completed ? (
          <CompletionTime>
            <TimeText>Completed at {completedTime}</TimeText>
          </CompletionTime>
        ) : (
          <Button onClick={onComplete}>Mark as Done</Button>
        )}
      </Footer>
    </Card>
  );
}
