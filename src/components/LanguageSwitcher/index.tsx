import { useTranslation } from "react-i18next";
import { LanguageButton, SwitcherContainer } from "./LanguageSwitcher.styles";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const switchLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <SwitcherContainer>
      <LanguageButton
        active={i18n.language === "pt"}
        onClick={() => switchLanguage("pt")}
      >
        PT-BR
      </LanguageButton>
      <LanguageButton
        active={i18n.language === "en"}
        onClick={() => switchLanguage("en")}
      >
        EN-US
      </LanguageButton>
    </SwitcherContainer>
  );
}
