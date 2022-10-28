import { pokemons } from "../data/pokemon.js"
import { Button } from "../components/Button.jsx"

export const Pokemon = () => {

  const nome = "Jorge"
  const bemVindo = <h1>Bem vindo, {nome}</h1>

  return (
    <div>
      {bemVindo}
      <ul>
        {pokemons.map((pokemon) => {
          return (
            <li key={pokemon.id}>{pokemon.name.english}</li>
          )
        })}
      </ul>
      <Button />
    </div>
  )
}