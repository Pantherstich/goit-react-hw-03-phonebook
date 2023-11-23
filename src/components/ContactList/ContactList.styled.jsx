import styled from 'styled-components';

export const Item = styled.li`
  color: #000000;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;
export const DelButton = styled.button`
  width: 160px;
  background-color: #686868;
  border-radius: 30px;
  color: #000000;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: #f7f7f7;
  }
`;
