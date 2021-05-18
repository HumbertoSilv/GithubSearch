import { useState } from "react";
import Results from "./components/Results";
import Search from "./components/Search";
import Loading from "./components/Loading";

function App() {
  const [date, setdate] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);

  const filter = () => {
    setLoading(true)
    fetch(`https://api.github.com/repos/${search}`)
      .then((response) => response.json())
      .then((response) => {
        response.message ?
          setError(true, setLoading(false)) 
          :
          setdate([response], setLoading(false), setError(false)) 
      })
  }

  return (
    <div>
      <Search filter={filter} date={date} search={search} setSearch={setSearch}/>
      {loading && <Loading/>}
      <Results date={date} error={error} setLoading={setLoading} setError={setError}/>
    </div>
  );
}

export default App;
