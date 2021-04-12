import styled from "styled-components";
import Container from "./Container";
import SearchBar from "./SearchBar";
import Results from "./Results";

const StyledMain = styled.main`
    min-height: calc(100vh - 136px);
    background-color: ${props => props.theme.mainBg};
    transition: all .3s ease;
`;

const Overlay = styled.div`
    display: none;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
`;

const Main = (props) => {
    return (
        <StyledMain>
            <Container>
                <Overlay/>
                <SearchBar/>
                <Results data={props.data}/>
            </Container>
        </StyledMain>
    );

}

export default Main;