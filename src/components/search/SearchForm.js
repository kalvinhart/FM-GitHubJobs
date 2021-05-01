import {useState} from "react";
import {StyledForm, StyledSearchInputWrapper, StyledSearchButton, StyledSearchButtonMobile,
        StyledResponsiveWrapper, StyledLocationInputWrapper, StyledFullTimeInputWrapper, 
        StyledInput, Overlay} from "../styles/SearchStyles";
import FilterButton from "../form/FilterButton";
import SearchIcon from "../form/SearchIcon";
import CheckBox from "../form/CheckBox";

const SearchForm = ({results, setResults}) => {
    const [inputs, setInputs] = useState({
        searchTerm: "",
        location: "",
        fullTime: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchTerm = inputs.searchTerm.toLowerCase();
        const searchLocation = inputs.location.toLowerCase();

        if (!searchTerm && !searchLocation && !inputs.fullTime) {
            setResults({...results, filtered: false, selectedData: results.data.slice(0, results.numResults)});
            return;
        }

        let searchResult = [];
        searchResult = results.data.filter(res => {
            return ((searchTerm && res.title.toLowerCase().includes(searchTerm)) || (searchLocation && res.location.toLowerCase().includes(searchLocation)));
        });

        if (inputs.fullTime) {
            searchResult = searchResult.filter(res => res.type === "Full Time");
        }

        setResults({...results, noResult: false, filtered: true, selectedData: searchResult});
    }

    return (
        <StyledForm onSubmit={handleSubmit}>

            <StyledSearchInputWrapper>
                <StyledInput
                    title
                    type="text"
                    name="searchTerm"
                    value={inputs.searchTerm}
                    onChange={(e) => setInputs({...inputs, searchTerm: e.target.value})}
                    placeholder="Filter by title..."
                />
                <FilterButton />
                <StyledSearchButtonMobile
                    type="submit"
                >
                    <SearchIcon/>
                </StyledSearchButtonMobile>
            </StyledSearchInputWrapper>
            
            <Overlay show={false}>
                <StyledResponsiveWrapper>
                    <StyledLocationInputWrapper>
                        <StyledInput
                            location
                            type="text"
                            name="location"
                            value={inputs.location}
                            onChange={(e) => setInputs({...inputs, location: e.target.value})}
                            placeholder="Filter by location..."
                        />
                    </StyledLocationInputWrapper>

                    <StyledFullTimeInputWrapper>
                        <CheckBox text="Full Time Only" inputs={inputs} setInputs={setInputs} />
                        <StyledSearchButton type="submit" fullWidth>
                            Search
                        </StyledSearchButton>
                    </StyledFullTimeInputWrapper>
                </StyledResponsiveWrapper>
            </Overlay>
            
        </StyledForm>
    );
}

export default SearchForm;