import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 0;
  width: 100%;

  border-bottom: 3px solid #ffd500;
  background-color: #40bfff;
`;

export const SearchInput = styled.input`
  padding: 0 12px;
  width: 240px;
  height: 32px;

  border: none;
  border-radius: 4px 0 0 4px;
`;

export const SearchBtn = styled.button`
  width: 32px;
  height: 32px;
  padding: 4px;

  cursor: pointer;

  border: none;
  border-radius: 0 4px 4px 0;

  background-color: #ffd500;
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: 24px;
    height: 24px;

    path {
      stroke: black;
      stroke-width: 1.5;
    }
  }

  &:hover {
    background-color: #ffc800;
  }
`;
