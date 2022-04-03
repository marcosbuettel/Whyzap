import styled from 'styled-components';

//ESTILO PARA A PARTE QUE TODAS AS MENSAGENS VÃO SER EXIBIDAS NA TELA
export const BoxExibirMensagem = styled.section`
  height: 90%;
  overflow-y: auto;
`;

//ESTILO PARA OS INPUTS QUE FICAM NA PARTE INFERIOR
export const BoxInputs = styled.section`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BoxRemetente = styled.input`
  height: 65%;
  width: 10%;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 20px;
`;

export const BoxDigitarMensagem = styled.input`
  height: 65%;
  width: 75%;
  border: none;
  border-radius: 5px;
  margin: 0 5px;
  padding: 5px;
  font-size: 20px;
`;

export const BoxMensagem = styled.button`
  height: 80%;
  width: 10%;
  border: none;
  border-radius: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    transition: 1s;
    background-color: #cae7a5;
  }
`;

//ESTILO PARA FAZER A MENSAGEM QUE FOI ENVIADA COMO REMETENTE "EU"
//IR PARA O LADO DIREITO
export const BoxMensagemEnviadaEu = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const MensagemEnviada = styled.p`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  word-wrap: break-word;
  width: fit-content;
  max-width: 50%;
`;

export const MensagemEnviadaEu = styled.p`
  background-color: #c0f5aa;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  word-wrap: break-word;
  width: fit-content;
  max-width: 50%;
`;
