import './style.css';
const Search = ({date, search, setSearch, filter}) => {

    return(
        <div className="container">
            <input 
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}
                placeholder="Digite o nome do repositório">    
            </input>
            <button onClick={() => filter()}>Pesquisar</button>
        </div>
    );
}

export default Search;