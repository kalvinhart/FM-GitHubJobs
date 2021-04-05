import styled from "styled-components";

const StyledMain = styled.main`
    height: calc(100vh - 136px);
    background-color: ${props => props.theme.mainBg};
    transition: all .3s ease;
`;

const Main = (props) => {
    return (
        <StyledMain>

        </StyledMain>
    );

}

export default Main;