import './style.css';

const Results = ({date, found}) => {

    return(
        <div>
            {
                found === undefined? 
                    date.map((cur) => (
                    <div className="card">
                    <img src={cur.company_logo? cur.company_logo : "https://github.githubassets.com/images/modules/open_graph/github-mark.png"} alt={cur.company} />
                    <div>
                        <a href={cur.url}>{cur.company}</a>
                        <p>{cur.title}</p>
                    </div>
                    </div>
                ))
                :
                    found.map((cur) => (
                    <div className="card">
                    <img src={cur.company_logo? cur.company_logo : "https://github.githubassets.com/images/modules/open_graph/github-mark.png"} alt={cur.company} />
                    <div>
                    <a href={cur.url}>{cur.company}</a>
                        <p>{cur.title}</p>
                    </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Results;