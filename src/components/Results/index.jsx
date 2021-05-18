import './style.css';

const Results = ({date, error}) => {
    return(
        <div>
            {
                error? 
                    <div className="error">
                        <p>Not Found</p>
                    </div>
                :
                date.map((cur) => (
                <div className="card">
                    <img src={cur.owner.avatar_url} alt={cur.full_name} />
                    <div>
                        <a href={cur.html_url}>{cur.full_name}</a>
                        <p>{cur.description}</p>
                    </div>
                </div>))
            }
        </div>
    );
}

export default Results;