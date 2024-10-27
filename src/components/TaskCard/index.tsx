import { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const handleUndo = () => {
    if (window.confirm(t("modal.undoConfirmation"))) {
      onUndo();
      setShowDropdown(false);
    }
  };

  const handleDelete = () => {
    if (window.confirm(t("modal.deleteConfirmation"))) {
      onDelete();
      setShowDropdown(false);
    }
  };

  return (
    <Card completed={completed}>
      <TaskText>{t("modal.didI", { task })}</TaskText>

      <Status completed={completed}>
        {completed ? t("modal.yes") : t("modal.no")}
      </Status>

      <SettingsButton onClick={() => setShowDropdown(!showDropdown)}>
        ⚙️
      </SettingsButton>

      {showDropdown && (
        <DropdownMenu>
          {completed && (
            <DropdownOption onClick={handleUndo}>
              {t("modal.undo")}
            </DropdownOption>
          )}
          <DropdownOption onClick={handleDelete}>
            {t("modal.delete")}
          </DropdownOption>
        </DropdownMenu>
      )}

      <Footer>
        {completed && (
          <CompletionTime>
            <TimeText>
              {t("modal.completedAt", { time: completedTime })}
            </TimeText>
          </CompletionTime>
        )}
        {!completed && (
          <Button onClick={onComplete}>{t("modal.markAsDone")}</Button>
        )}
      </Footer>
    </Card>
  );
}
