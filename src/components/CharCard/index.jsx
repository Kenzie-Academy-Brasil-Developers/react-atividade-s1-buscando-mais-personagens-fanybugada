import "./index.css";

function CharCard({ characterList }) {
  return (
    <div
      className="charCard"
      key={characterList.id}
      style={
        characterList.status === "Alive"
          ? { background: "#8fbc8f" }
          : { background: "#cd5c5c" }
      }
    >
      <h2>{characterList.name}</h2>
      <img src={characterList.image} alt={characterList.name} />
      <p>Specie: {characterList.species}</p>
      <p>Gender: {characterList.gender}</p>
    </div>
  );
}

export default CharCard;
