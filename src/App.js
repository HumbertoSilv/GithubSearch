import { useEffect, useState } from "react";
import Results from "./components/Results";
import Search from "./components/Search";

function App() {
  const [date, setdate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState()

  useEffect (() => {
    fetch("https://jobhunt-api.herokuapp.com/jobs")
      .then((respponse) => respponse.json())
      .then((response) => setdate(response), setLoading(false))
  }, [])
  return (
    <div>
      <Search date={date} setFound={setFound}/>
      { loading && <h2>Loading...</h2>}
      <Results date={date} found={found}/>
    </div>
  );
}

export default App;
