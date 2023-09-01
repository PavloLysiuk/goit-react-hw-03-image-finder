import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 0;
  width: 100%;

  border-bottom: 3px solid #ffd500;
  background-color: #40bfff;
`;

export const SearchForm = styled.form`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  padding: 0 44px 0 12px;
  width: 280px;
  height: 32px;

  border: none;
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 32px;
  height: 32px;
  padding: 4px;

  cursor: pointer;

  border: none;

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
