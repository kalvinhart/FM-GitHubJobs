import styled from "styled-components";
import "./Spinner.css";

const SpinnerWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 136px);
    padding-top: 100px;
    display: flex;
    justify-content: center;
`;

const Spinner = () => {

    return (
        <SpinnerWrapper>
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </SpinnerWrapper>
    );
}

export default Spinner;