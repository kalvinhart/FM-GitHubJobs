import styled from "styled-components/macro";

const StyledContainer = styled.div`
    width: 90%;
    max-width: 1110px;
    margin: 0 auto;
`;

const Container = (props) => {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    );
}

export default Container;