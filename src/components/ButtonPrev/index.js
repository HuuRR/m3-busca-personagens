function ShowPrev({ prev, page }) {
  if (page > 1) {
    return <button onClick={prev}>Anterior</button>;
  }
}

export default ShowPrev;
