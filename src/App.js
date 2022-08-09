import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";
import ShowPrev from "./components/ButtonPrev";
import ShowNext from "./components/ButtonNext";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);
  const [infoPage, setInfosPage] = useState();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => res.json())
      .then((json) => {
        setCharacterList(json.results);
        setInfosPage(json.info.pages);
      });
  }, [page]);

  const prev = () => {
    setPage(page - 1);
  };
  const next = () => {
    setPage(page + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container-botoes">
          <div className="dive">
            <ShowPrev prev={prev} page={page} />
          </div>
          <div className="dive">
            <ShowNext next={next} page={page} infoPage={infoPage} />
          </div>
        </div>
        <Characters characterList={characterList} />
      </header>
    </div>
  );
}

export default App;
