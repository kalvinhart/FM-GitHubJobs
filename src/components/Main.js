import styled from "styled-components";
import Container from "./Container";
import SearchBar from "./SearchBar";
import Results from "./Results";
import JobView from "./job/JobView";
import {Route, Switch, Redirect} from "react-router-dom";

const StyledMain = styled.main`
    min-height: calc(100vh - 136px);
    background-color: ${props => props.theme.mainBg};
    transition: all .3s ease;
`;

const Main = ({isLoading, results, setResults}) => {
    const {selectedData} = results;

    return (
        <StyledMain>
            <Switch>
                <Route exact path="/">
                    <Container>
                        <SearchBar/>
                        <Results isLoading={isLoading} results={results} setResults={setResults}/>
                    </Container>
                </Route>
                {selectedData.length > 0 ?
                    <Route exact path="/job/:id" render={(routeProps) => {
                        return (
                            <Container>
                                <JobView {...routeProps} details={selectedData} />
                            </Container>
                        ); 
                        }} /> :
                    <Redirect to="/" />
                }
            </Switch>
        </StyledMain>
    );

}

export default Main;