import CharCard from "../CharCard";
import "./index.css";

function Characters({ characterList }) {
  return (
    <div>
      <h1>Meus Personagens</h1>
      <ul className="charContainer">
        {characterList.map((char) => (
          <li key={char.id}>
            <CharCard characterList={char}></CharCard>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Characters;
