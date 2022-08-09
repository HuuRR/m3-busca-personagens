import "./style.css";

function CharCard({ personagem }) {
  if (personagem.status === "Alive") {
    personagem.status = "Vivo";
  } else if (personagem.status === "Dead") {
    personagem.status = "Morto";
  } else if (personagem.status === "unknown") {
    personagem.status = "Desconhecido";
  }

  if (personagem.name.length > 15) {
    const array = personagem.name.split("");
    const quinze = array.slice(0, 14);
    const string = quinze.join("");
    personagem.name = string + "...";
  }

  return (
    <div className="card">
      {personagem.status === "Morto" ? (
        <div className="card-morto">
          <p>{personagem.name}</p>
          <div>
            <span>Espécie: {personagem.species}</span>
            <span>Situação: {personagem.status}</span>
          </div>
          <img src={personagem.image} alt=""></img>
        </div>
      ) : (
        <div className="card-vivo">
          <p>{personagem.name}</p>
          <div>
            <span>Espécie: {personagem.species}</span>
            <span>Situação: {personagem.status}</span>
          </div>
          <img src={personagem.image} alt=""></img>
        </div>
      )}
    </div>
  );
}

export default CharCard;
