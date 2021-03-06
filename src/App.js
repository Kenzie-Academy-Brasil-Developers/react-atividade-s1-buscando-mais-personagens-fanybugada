import { useState, useEffect } from "react";
import Characters from "./components/Characters";
import "./App.css";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [page]);

  const nextPage = () => {
    if (page < 34) {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="App">
      <Characters characterList={characterList} />
      <div className="btnContainer">
        <button className="btnPrev" onClick={() => previousPage()}>
          Previous
        </button>
        <button className="btnNext" onClick={() => nextPage()}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
