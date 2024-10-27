import { styled } from "styled-components";

export const SwitcherContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px;
  align-self: flex-start;
`;

export const LanguageButton = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#3772FF" : "#E6E8E6")};
  color: ${({ active }) => (active ? "#FFFFFF" : "#333333")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  transition: background-color 0.3s;

  &:hover {
    background-color: #3772ff;
    color: #ffffff;
  }
`;
