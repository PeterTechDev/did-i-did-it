import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { InfoModalContainer, Overlay, TriggerButton } from "./InfoModal.styles";

interface InfoModalProps {
  isFirstVisit?: boolean;
}

export default function InfoModal({ isFirstVisit = false }: InfoModalProps) {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(isFirstVisit);

  useEffect(() => {
    // Show the modal on the first visit and store the information in localStorage
    if (isFirstVisit) {
      localStorage.setItem("isFirstVisit", "false");
    }
  }, [isFirstVisit]);

  return (
    <>
      <TriggerButton onClick={() => setIsVisible(true)}>&#x3f;</TriggerButton>

      {isVisible && (
        <>
          <Overlay onClick={() => setIsVisible(false)} />
          <InfoModalContainer>
            <h2>{t("about.title")}</h2>
            <p>{t("about.purpose")}</p>
            <p>{t("about.resetInfo")}</p>
            <button onClick={() => setIsVisible(false)}>
              {t("about.closeButton")}
            </button>
          </InfoModalContainer>
        </>
      )}
    </>
  );
}
