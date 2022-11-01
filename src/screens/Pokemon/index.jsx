import { useState } from "react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container.jsx";
import { Saudacao, Contador } from "./styles.js";

export const Pokemon = () => {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState("visitante");

  return (
    <Container>
      <Contador>{contador}</Contador>
      <Saudacao>Bem vindo, {nome}</Saudacao>
      {/* <ul>
        {pokemons.map((pokemon) => {
          return <li key={pokemon.id}>{pokemon.name.english}</li>;
        })}
      </ul> */}
      <Button
        onClick={() =>
          setNome((prev) => {
            if (prev === "yan") {
              return "marcos";
            }
            return "yan";
          })
        }
        backgroundColor="white"
        fontSize={100}
        padding="10px"
        name="Mudar nome"
      />
      <Button
        onClick={() => setContador((prev) => prev + 1)}
        backgroundColor="green"
        fontSize={40}
        padding="10px"
        name="+"
      />
      <Button
        onClick={() => setContador((prev) => prev - 1)}
        backgroundColor="red"
        fontSize={80}
        padding="10px"
        name="-"
      />
    </Container>
  );
};
