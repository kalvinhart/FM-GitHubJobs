import styled from "styled-components";
import Container from "./Container";
import ThemeToggle from "../ThemeToggle";
import {Link} from "react-router-dom";

const StyledHeader = styled.header`
  width: 100%;
  height: 136px;
  padding-top: 30px;
  background-image: url("../assets/mobile/bg-pattern-header.svg");
  background-size: cover;
`;

const FlexHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = (props) => {
    return (
        <StyledHeader>
            <Container>
                <FlexHeader>
                    <Link to="/"><img src="assets/desktop/logo.svg" alt="DevJobs Logo" /></Link>
                    <ThemeToggle setTheme={props.setTheme}/>
                </FlexHeader>
            </Container>
        </StyledHeader>
    );
}

export default Header;