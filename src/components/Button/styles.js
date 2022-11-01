import styled from "styled-components";

export const Botao = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${(props) => props.padding};
  fontsize: ${(props) => props.fontSize};
`;
