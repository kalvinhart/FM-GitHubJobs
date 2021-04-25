import {CompanyLogo, StyledJobCard, Location} from "./styles/JobStyles";
import {Title, Text} from "./styles/Typography";
import {Link} from "react-router-dom";
import {formatDate, trimTitle} from "./utilities/helpers";



const JobCard = ({details}) => {
    const {
        company,
        company_logo: companyLogo,
        created_at: createdAt,
        id,
        location,
        title,
        type
    } = details;

    return (
        <StyledJobCard>
            {companyLogo ? <CompanyLogo logo={companyLogo}/> : ""}
            <Text>{formatDate(createdAt)} • {type}</Text>
            <Link to={`/job/${id}`}>
                <Title>{trimTitle(title)}</Title>
            </Link>
            <Text>{company}</Text>
            <Location>{location}</Location>
        </StyledJobCard>
    );
}

export default JobCard;