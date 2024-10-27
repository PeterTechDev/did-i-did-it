import styled from "styled-components";

export const InfoModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  h2 {
    margin-top: 0;
    color: #333;
    font-size: 24px;
    text-align: center;
  }

  p {
    color: #555;
    font-size: 16px;
    line-height: 1.4;
    margin-bottom: 20px;
    text-align: center;
  }

  button {
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    font-size: 16px;
    color: #ffffff;
    background-color: #fb5607;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ff006e;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const TriggerButton = styled.button`
  padding: 6px 12px;
  font-size: 24px;
  color: #ffffff;
  background-color: #3772ff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  margin: 10px auto;
  line-height: 1;
  border: 1px solid #fff;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: scale(0.98);
  }
`;
