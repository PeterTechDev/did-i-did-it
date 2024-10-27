import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const maxLength = 21;

  // Sugestões de placeholder dinâmico
  useEffect(() => {
    const placeholders = [
      t("placeholder.takeVitamins"),
      t("placeholder.lockFrontDoor"),
      t("placeholder.completeDuolingoLesson"),
      t("placeholder.exerciseFor30Minutes"),
      t("placeholder.takeMedicine"),
      t("placeholder.waterThePlants"),
      t("placeholder.read5Pages"),
      t("placeholder.meditateFor10Minutes"),
      t("placeholder.writeInJournal"),
      t("placeholder.planTomorrow"),
    ];

    const interval = setInterval(() => {
      const randomPlaceholder =
        placeholders[Math.floor(Math.random() * placeholders.length)];
      setPlaceholder(randomPlaceholder);
    }, 2000);

    return () => clearInterval(interval);
  }, [t]);

  const handleSubmit = () => {
    const trimmedTask = taskName.trim();
    if (!trimmedTask || trimmedTask.length < 3) {
      setError(t("errors.moreDescriptiveTask"));
      return;
    }
    if (trimmedTask.length > maxLength) {
      setError(t("errors.taskMaxLength", { maxLength }));
      return;
    }
    onAddTask(trimmedTask);
    setTaskName("");
    setError("");
    onClose();
  };

  // Função para detectar o Enter pressionado
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <ModalBackground>
      <ModalContent>
        <Title>{t("modal.titleAddNewTask")}</Title>

        <Input
          type="text"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
            setError("");
          }}
          placeholder={placeholder}
          maxLength={maxLength}
          onKeyDown={handleKeyPress} // Detecta o Enter
        />
        <CharacterCount>
          {taskName.length}/{maxLength}
        </CharacterCount>
        <InputHint>{t("modal.inputHint")}</InputHint>
        {error && <ErrorText>{error}</ErrorText>}

        <ButtonContainer>
          <Button onClick={onClose}>{t("modal.cancel")}</Button>
          <Button primary onClick={handleSubmit}>
            {t("modal.add")}
          </Button>
        </ButtonContainer>
      </ModalContent>
    </ModalBackground>
  );
}
