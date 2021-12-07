import './style.css';
const Search = ({data, search, setSearch, filter}) => {

    return(
        <div className="container">
            <input 
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}
                placeholder="usuário/repositório">    
            </input>
            <button onClick={() => filter()}>Pesquisar</button>
        </div>
    );
}

export default Search;