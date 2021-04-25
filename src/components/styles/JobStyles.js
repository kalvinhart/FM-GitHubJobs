import styled from "styled-components";


// Results Page
export const CompanyLogo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(30px, -50%);
    height: 50px;
    width: 50px;
    background-color: var(--clr-white);
    background-image: ${props => `url("${props.logo}");`}
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 5px;
    overflow: hidden;
`;

export const ResultsGrid = styled.div`
    padding: 40px 0;
`;

export const StyledJobCard = styled.div`
    position: relative;
    height: 228px;
    width: 100%;
    padding: 30px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.background};

    &:not(:last-child) {
        margin-bottom: 60px;
    }

    & > *:not(:first-child) {
        margin-bottom: 10px;
    }
`;

export const Location = styled.p`
    color: var(--clr-violet);
    font-weight: bold;
`;


// Job Detail Page
export const JobViewWrapper = styled.div`
    width: 100%;
    padding-bottom: 96px;
    transform: translateY(-20px);
    border-radius: 5px;
`;

export const JobViewCompanyLogo = styled(CompanyLogo)`
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const JobHeader = styled.div`
    position: relative;
    width: 100%;
    height: 205px;
    padding: 30px;
    margin-bottom: 20px;
    background-color: ${props => props.theme.background};
    border-radius: 5px;
`;

export const JobDetail = styled.div`
    width: 100%;
    padding: 30px;
    margin-bottom: 20px;
    background-color: ${props => props.theme.background};
    border-radius: 5px;

    & > *:not(:last-child) {
        margin-bottom: 40px;
    }
`;

export const DetailsWrapper = styled.div`
    margin-bottom: 30px;
`;

export const JobText = styled.div`
    & p,
    & h1,
    & h2,
    & h3,
    & h4,
    & ul,
    & ol {
        color: ${props => props.theme.titleColor};
        line-height: 26px;
        word-wrap: break-word;
    }

    & p > strong,
    & h1,
    & h2,
    & h3,
    & h4, {
        display: inline-block;
        margin-top: 10px;
    }
    
    & li::marker {
        color: var(--clr-violet);
        font-weight: bold;
    }

    & a {
        color: var(--clr-violet);

        &:hover {
            color: var(--clr-light-violet);
        }
    }
`;

export const HowToApply = styled.div`
    width: 100%;
    padding: 30px;
    margin-bottom: 20px;
    background-image: url("../assets/mobile/bg-pattern-detail-footer.svg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;

    & ${JobText} p,
    & ${JobText} a {
        color: var(--clr-white);
    }

    & ${JobText} a {
        font-weight: bold;
        text-decoration: underline;
    }
`;

export const ApplyNow = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 96px;
    padding: 24px;
    background-color: ${props => props.theme.background};
`;