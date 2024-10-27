import { t } from "i18next";
import { Button, ButtonContainer } from "./AddTaskButton";

interface AddTaskButtonProps {
  onClick: () => void;
}

export function AddTaskButton({ onClick }: AddTaskButtonProps) {
  return (
    <ButtonContainer>
      <Button onClick={onClick}>{t("modal.add")}</Button>
    </ButtonContainer>
  );
}
