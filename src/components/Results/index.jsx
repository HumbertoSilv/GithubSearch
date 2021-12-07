import './style.css';

const Results = ({data, error}) => {
    const capitalize = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }

    return(
        <div>
            {
            error? 
                <div className="error">
                    <p>😕 Repository Not Found...</p>
                </div>
            :
            <div className="card">
                <img src={data.owner.avatar_url} alt={data.full_name} />
                <div>
                    <a target="_blank" rel='noreferrer' href={data.html_url}>{data.full_name.toUpperCase()}</a>
                    <p>{data.description}</p>
                    <h2>Created: <span>{data.created_at}</span> </h2>
                    <h2>Forks: <span>{data.forks}</span></h2>
                    <h2>Language: <span>{capitalize(data.language)}</span></h2>
                    <h2>Visibility: <span>{capitalize(data.visibility)}</span></h2>
                </div>
            </div>
            }
        </div>
    );
}

export default Results;