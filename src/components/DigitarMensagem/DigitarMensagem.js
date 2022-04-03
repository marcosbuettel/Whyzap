import React from 'react';
import {
  BoxExibirMensagem,
  BoxInputs,
  BoxRemetente,
  BoxDigitarMensagem,
  BoxMensagem,
  BoxMensagemEnviadaEu,
  MensagemEnviada,
  MensagemEnviadaEu,
} from '../Estilos/EstiloDosComponentes';

export default class DigitarMensagem extends React.Component {
  state = {
    inputRemetente: '',
    inputMensagem: '',
    mensagens: [],
  };

  escolherRemetente = (event) => {
    this.setState({ inputRemetente: event.target.value });
  };

  escreverMensagem = (event) => {
    this.setState({ inputMensagem: event.target.value });
  };

  enviarMensagem = (event) => {
    if (this.state.inputRemetente !== '' && this.state.inputMensagem !== '') {
      //AQUI EU VERIFICO SE FOI APERTADO O ENTER OU O BOTÃO FOI CLICADO
      if (event.key === 'Enter' || event === 'clicado') {
        const mensagemRecebida = {
          remetente: this.state.inputRemetente,
          mensagem: this.state.inputMensagem,
          id: Math.random(),
        };

        const novaMensagem = [...this.state.mensagens, mensagemRecebida];
        this.setState({ mensagens: novaMensagem });
        this.setState({
          inputRemetente: '',
          inputMensagem: '',
        });
      }
    }
  };

  removerMensagem = (idMensagem) => {
    //CRIANDO UM ALERT DE CONFIRMAÇÃO PARA REMOVER A MENSAGEM
    var confirmacao = window.confirm('Confirmar exclusão da mensagem?');

    if (confirmacao === true) {
      const atualizarMensagens = this.state.mensagens.filter((mensagem) => {
        return idMensagem !== mensagem.id;
      });
      this.setState({ mensagens: atualizarMensagens });
    }
  };

  render() {
    const exibirMensagens = this.state.mensagens.map((mensagem) => {
      //SE O REMETENTE DA MENSAGEM FOR DIFERENTE DE "EU"
      //A MENSAGEM É EXIBIDA NORMALMENTE NO LADO ESQUERDO
      //SENAO ELA É EXIBIDA DENTRO DA BoxMensagemEnviadaEu
      //QUEM TEM O FLEX-DIRECTION = ROW-REVERSE
      if (mensagem.remetente !== 'eu') {
        return (
          <MensagemEnviada
            onDoubleClick={() => {
              this.removerMensagem(mensagem.id);
            }}
            key={mensagem.id}
          >
            <b>{mensagem.remetente}</b>
            <br />
            {mensagem.mensagem}
          </MensagemEnviada>
        );
      } else {
        return (
          <BoxMensagemEnviadaEu
            onDoubleClick={() => {
              this.removerMensagem(mensagem.id);
            }}
            key={mensagem.id}
          >
            <MensagemEnviadaEu>{mensagem.mensagem}</MensagemEnviadaEu>
          </BoxMensagemEnviadaEu>
        );
      }
    });

    return (
      <>
        <BoxExibirMensagem>{exibirMensagens}</BoxExibirMensagem>

        <BoxInputs>
          <BoxRemetente
            onChange={this.escolherRemetente}
            value={this.state.inputRemetente}
          />
          <BoxDigitarMensagem
            onChange={this.escreverMensagem}
            value={this.state.inputMensagem}
            onKeyPress={this.enviarMensagem}
          />
          <BoxMensagem
            onKeyPress={this.handleKeyPress}
            onClick={() => {
              this.enviarMensagem('clicado');
            }}
          >
            ENVIAR
          </BoxMensagem>
        </BoxInputs>
      </>
    );
  }
}
