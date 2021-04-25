import {JobViewWrapper, JobHeader, DetailsWrapper, JobViewCompanyLogo, JobDetail, Location, JobText, HowToApply, ApplyNow} from "../styles/JobStyles";
import {Title, Text} from "../styles/Typography";
import Button from "../Button";
import {formatDate, goToURL} from "../utilities/helpers";

const JobView = ({details, match, location: routeLocation,  history}) => {
    const jobId = match.params.id;
    const job = details.filter(j => j.id === jobId);

    const {
        company,
        company_logo: companyLogo,
        company_url: companyUrl,
        created_at: createdAt,
        location,
        title,
        description,
        how_to_apply: howToApply,
        type,
        url
    } = job[0];

    const jobDescription = {
        __html: description
    };

    const howToApplyText = {
        __html: howToApply
    }

    return (
        <>
            <JobViewWrapper>
                <JobHeader>
                    <JobViewCompanyLogo logo={companyLogo} />
                    <DetailsWrapper>
                        <Title>{company}</Title>
                        <Text>{companyUrl}</Text>
                    </DetailsWrapper>
                    <Button type={2} onClick={() => goToURL(companyUrl)}>Company Site</Button>
                </JobHeader>

                <JobDetail>
                    <DetailsWrapper>
                        <Text>{formatDate(createdAt)} • {type}</Text>
                        <Title>{title}</Title>
                        <Location>{location}</Location>
                    </DetailsWrapper>
                    <Button type={1} onClick={() => goToURL(url)}>Apply Now</Button>
                    <JobText dangerouslySetInnerHTML={jobDescription} />
                </JobDetail>

                <HowToApply>
                    <JobText dangerouslySetInnerHTML={howToApplyText} />
                </HowToApply>

            </JobViewWrapper>
            <ApplyNow>
                <Button type={1} onClick={() => goToURL(url)}>Apply Now</Button>
            </ApplyNow>
        </>
    );
}

export default JobView;