import { styled } from 'styled-components';

export const LoadMore = styled.button`
  margin: 24px auto;
  padding: 0 12px;
  height: 32px;
  border: none;
  border-radius: 4px;

  background-color: #ffd500;

  cursor: pointer;
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #ffc800;
  }
`;
