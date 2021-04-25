import {StyledSearchBar} from "../styles/SearchStyles";
import SearchForm from "./SearchForm";

const SearchBar = ({results, setResults}) => {

    return (
        <StyledSearchBar>
            <SearchForm results={results} setResults={setResults} />
        </StyledSearchBar>
    );
}

export default SearchBar;