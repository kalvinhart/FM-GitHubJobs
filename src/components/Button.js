import styled from "styled-components";

const StyledButton = styled.button`
    width: 100%;
    height: 48px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;

    ${props => {
        if (props.type === 1) {
            return `background-color: var(--clr-violet);
                    color: var(--clr-white);
                    &:hover {
                        background-color: var(--clr-light-violet);
                    }`;
        }
        if (props.type === 2) {

            return `background-color: ${props.theme.button2Bg};
                    color: ${props.theme.button2Color};
                    &:hover {
                        background-color: ${props.theme.button2Hover};
                    }`;
        }
    }}
`;

const Button = ({type, children, onClick}) => {

    return (
        <StyledButton type={type} onClick={onClick}>
            {children}
        </StyledButton>
    );
}

export default Button;