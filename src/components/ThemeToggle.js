import styled from "styled-components";
import "./ThemeToggle.css";

const StyledDiv = styled.div`
    width: 112px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ThemeToggle = (props) => {
    return (
        <StyledDiv>
            <img src="assets/desktop/icon-sun.svg" alt =""/>
            <label class="switch">
                <input className="togglerInput" type="checkbox" onClick={props.setTheme} />
                <span class="slider round"></span>
            </label>
            <img src="assets/desktop/icon-moon.svg" alt =""/>
        </StyledDiv>
    );
}

export default ThemeToggle;