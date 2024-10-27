import { t } from "i18next";
import { HeaderContainer, Title } from "./Header.styles";

export function Header() {
  return (
    <HeaderContainer>
      <Title>{t("modal.title")}</Title>
    </HeaderContainer>
  );
}
