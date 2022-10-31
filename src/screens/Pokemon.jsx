import { pokemons } from "../data/pokemon.js";
import { Button } from "../components/Button.jsx";
import { Container } from "../components/Container.jsx";

export const Pokemon = () => {
  const nome = "Jorge";
  const bemVindo = <h1>Bem vindo, {nome}</h1>;

  return (
    <Container>
      <div>
        {bemVindo}
        <ul>
          {pokemons.map((pokemon) => {
            return <li key={pokemon.id}>{pokemon.name.english}</li>;
          })}
        </ul>
        <Button backgroundColor="green" fontSize={14} padding="40px" name="Button" />
        <Button backgroundColor="blue" fontSize={16} padding="10px" name="Bacate" />
      </div>
    </Container>
  );
};
