import CharCard from "../CharCard";
import "./style.css";

function Characters({ characterList }) {
  return (
    <div className="container">
      <h1>Rick and Morty Awesome Characters</h1>
      <ul className="container-cards">
        {characterList.map((personagem) => (
          <li key={personagem.id}>
            <CharCard personagem={personagem} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Characters;
