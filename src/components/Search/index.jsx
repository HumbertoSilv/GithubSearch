import { useState } from 'react';
import './style.css';
const Search = ({date, setFound}) => {
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        const match = date.filter((cur) => cur.company.toLocaleLowerCase() === search.toLocaleLowerCase().trim());
        setFound(match);
    }
    return(
        <div className="container">
            <input 
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}
                placeholder="Digite o nome do repositório">    
            </input>
            <button onClick={handleSearch}>Pesquisar</button>
        </div>
    );
}

export default Search;