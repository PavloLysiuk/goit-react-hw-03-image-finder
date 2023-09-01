import { Wrapper, SearchInput, SearchBtn } from './Searchbar.styled';
import { GrFormSearch } from 'react-icons/gr';

export const Searchbar = () => {
  return (
    <Wrapper>
      <form>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images..."
        />
      </form>
      <SearchBtn type="submit">
        <GrFormSearch />
      </SearchBtn>
    </Wrapper>
  );
};
