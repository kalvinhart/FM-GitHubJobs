import {ResultsGrid} from "./styles/JobStyles";
import {Text} from "./styles/Typography";
import JobCard from "./JobCard";
import Spinner from "./Spinner";
import Button from "./Button";

const Results = ({isLoading, results, setResults}) => {
    const {selectedData} = results;

    let jobResults;
    if (selectedData.length > 0) {
        jobResults = selectedData.map(job => (
            <JobCard
                key={job.id}
                details={job}
            />
        ));
    } else {
        jobResults = <Text>No results found.</Text>;
    }

    const handleClick = (e) => {
        if (results.numResults < results.data.length) {
            const newNum = results.numResults + 10;
            console.log(newNum);
            setResults({...results, numResults: newNum, selectedData: results.data.slice(0, newNum)});
        } else {
            return;
        }
    };

    return (
        <>
            {isLoading ? 
                   <Spinner/> 
            :
                <>
                    <ResultsGrid>
                        {jobResults}
                    </ResultsGrid>
                    {results.filtered ? "" : 
                        results.selectedData.length < results.data.length ? <Button type={1} onClick={handleClick}>Load More</Button> : ""}
                </>
            }
        </>
    );
}

export default Results;