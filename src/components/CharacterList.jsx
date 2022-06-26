import { useEffect, useState } from "react";
import Character from "./Character";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Rick and Morty</h1>
      {characters.map((character) => {
        return <Character key={character.id} character={character} />;
      })}
    </div>
  );
};

export default CharacterList;
