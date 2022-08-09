import "./style.css";
function ShowNext({ next, page, infoPage }) {
  if (page < infoPage) {
    return <button onClick={next}>Próximo</button>;
  }
}

export default ShowNext;
