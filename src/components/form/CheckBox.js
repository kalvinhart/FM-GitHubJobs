import styled from "styled-components";
import "./CheckBox.css";

const StyledLabel = styled.label`
    color: ${props => props.theme.titleColor};
    font-weight: 700;
`;

const CheckBox = (props) => {
    return (
        <StyledLabel className="checkbox-container">{props.text}
            <input type="checkbox" onChange={(e) => props.setInputs({...props.inputs, fullTime: !props.inputs.fullTime})} />
            <span className="checkmark"></span>
        </StyledLabel>
    );
}

export default CheckBox;