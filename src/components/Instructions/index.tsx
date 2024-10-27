import { useTranslation } from "react-i18next";
import styled from "styled-components";

export function Instruction() {
  const { t } = useTranslation();

  return (
    <InstructionContainer>
      <h2>{t("instruction.welcome")}</h2>
      <p>{t("instruction.hint")}</p>
    </InstructionContainer>
  );
}

const InstructionContainer = styled.div`
  text-align: center;
  color: #777;
  margin: 20px;
  font-size: 18px;
`;

export default Instruction;
