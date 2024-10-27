import { useState, useEffect, useRef } from "react";
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha o menu suspenso ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <DropdownMenu ref={dropdownRef}>
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
