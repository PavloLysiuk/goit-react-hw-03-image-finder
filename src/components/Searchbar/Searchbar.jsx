import { Wrapper, SearchInput, SearchBtn } from './Searchbar.styled';
import { GrFormSearch } from 'react-icons/gr';

export const Searchbar = () => {
  return (
    <Wrapper>
      <form>
        <SearchInput type="text" placeholder='Search images...' />
      </form>
      <SearchBtn type="button">
        <GrFormSearch />
      </SearchBtn>
    </Wrapper>
  );
};
