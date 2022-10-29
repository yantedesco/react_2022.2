export const Button = () => {
const estilo = {
        color: "white",
        backgroundColor: "red",
        borderRadius: "10px",
        height: "25px",
        width: "50px"
      }

    return (
        <button style={estilo} onClick={() => null}>Botão</button>
    )
}