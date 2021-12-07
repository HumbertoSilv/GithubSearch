import { useState } from "react";
import Results from "./components/Results";
import Search from "./components/Search";
import Loading from "./components/Loading";
import { Images } from "./components/Images";

function App() {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const filter = () => {
    setLoading(true)
    fetch(`https://api.github.com/repos/${search}`)
      .then((response) => response.json())
      .then((response) => {
        response.message ?
          setError(true, setLoading(false)) 
          :
          setdata(response, setLoading(false), setError(false)) 
          setSuccess(true)
      })
      
  }

  return (
    <div>
      <Search filter={filter} data={data} search={search} setSearch={setSearch}/>
      {loading && <Loading/>}
      {success && <Results data={data} error={error}/>}
      <Images />
    </div>
  );
}

export default App;
