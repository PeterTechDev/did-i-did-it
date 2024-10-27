import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

export const ScrollButton = styled.button`
  display: inline-block;
  background-color: #ff9800;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: 60px;
  right: 10px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
  color: #fff;

  &.show {
    opacity: 1;
    visibility: visible;
    animation: ${bounce} 1.5s ease;
  }

  &:hover {
    cursor: pointer;
    background-color: #333;
  }

  &:active {
    background-color: #555;
  }
`;
