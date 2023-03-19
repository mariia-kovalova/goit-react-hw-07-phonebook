import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  padding: 5px 10px;

  cursor: pointer;
  font-size: 16px;
  font-family: inherit;
  border-radius: 4px;
  border-color: transparent;
  font-weight: 700;
  line-height: 1.88;
  text-align: center;
  letter-spacing: 0.06em;
  color: #fff;
  background-color: #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  :active,
  :hover {
    box-shadow: none;
    background-color: #188ce8;
  }
`;
