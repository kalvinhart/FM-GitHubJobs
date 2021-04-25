import styled from "styled-components";

export const Message = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 200px;
    padding: 30px;
    background-color: ${props => props.theme.background};
    border-radius: 5px;

    & > *:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const StyledSearchBar = styled.div`
    width: 100%;
    height: 80px;
    border-radius: 5px;
    transform: translateY(-50%);
`;

export const StyledFilterButton = styled.button`
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: ${props => props.theme.background};
`;

export const StyledFilterIcon = styled.svg`
    fill: ${props => props.theme.filterIcon};
`;

export const StyledForm = styled.form`
    width: 100%;
    height: 80px;
`;

export const StyledSearchInputWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 10px;
    background-color: ${props => props.theme.background};
    border-radius: 5px;
`;

export const StyledSearchButton = styled.button`
    width: 123px;
    ${props => props.fullWidth ? "width: 100%;" : ""}
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--clr-violet);
    border: none;
    border-radius: 5px;
    color: var(--clr-white);
    font-weight: 700;
    line-height: 16px;
    cursor: pointer;
`;

export const StyledSearchButtonMobile = styled(StyledSearchButton)`
    width: 48px;
`;

export const StyledResponsiveWrapper = styled.div`
    position: fixed;
    z-index: 200;
    display: none;
    height: 217px;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme.background};
    border-radius: 5px;
    overflow: hidden;
`;

export const StyledLocationInputWrapper = styled(StyledSearchInputWrapper)`
    height: 72px;
    padding: 20px;
    border-bottom: 1px solid var(--clr-dark-grey);
    border-radius: 0;
`;

export const StyledFullTimeInputWrapper = styled.div`
    padding: 20px;
`;

export const StyledInput = styled.input`
    width: calc(100% - 96px);
    height: 48px;
    padding: 5px;
    padding-left: 30px;
    background-color: ${props => props.theme.background};
    background-image: ${props => props.location ? "url('assets/desktop/icon-location.svg');" : "none" }
    background-repeat: no-repeat;
    background-position: left center;
    border: none;
    font-family: inherit;
    color: ${props => props.theme.inputText};
`;

export const Overlay = styled.div`
    display: ${props => props.show ? "block" : "none"};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
`;