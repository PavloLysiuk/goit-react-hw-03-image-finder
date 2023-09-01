import {
  Wrapper,
  SearchForm,
  SearchInput,
  SearchBtn,
} from './Searchbar.styled';
import { GrFormSearch } from 'react-icons/gr';

export const Searchbar = () => {
  return (
    <Wrapper>
      <SearchForm>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images..."
        />
        <SearchBtn type="submit">
          <GrFormSearch />
        </SearchBtn>
      </SearchForm>
    </Wrapper>
  );
};
