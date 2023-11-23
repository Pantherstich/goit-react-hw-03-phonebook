import styled from 'styled-components';

export const ContForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  border-radius: 8px;
  padding: 20px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  gap: 12px;
`;

export const Input = styled.input`
  display: flex;
  border-radius: 8px;
  width: 280px;
  border: 1px solid #727272;
`;
export const Button = styled.button`
  width: 160px;
  background-color: #686868;
  border-radius: 30px;
  color: #000000;
  font-weight: 700;
  font-size: 24px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: #f7f7f7;
  }
`;
