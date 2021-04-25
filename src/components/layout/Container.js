import styled from "styled-components";

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