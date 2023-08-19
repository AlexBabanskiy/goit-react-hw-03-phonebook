import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  max-width: 120px;
  padding: 5px 10px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 14px;
  text-align: center;

  &:hover {
    transform: scale(1.1);
  }
`;

export const H3 = styled.h3`
  margin-bottom: 5px;
`;
