import React, { useState } from 'react';
import styled from 'styled-components'
import '../js/script'

const FaleConoscoStyle = styled.h1`
  *{
    font-size: 20px;
  }

  p{
    margin-bottom: 1px;
  }

  form{
    display: flex;
    max-width: 600px;
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    border: 1px solid #606C38;
    margin: 25px auto;
    padding: 50px 42px;
    border-radius: 20px;
  }

  .input-container{
    margin: 0px 0 15px 0;
    min-width: 90%;
  }

  input[type=text], input[type=number], textarea{
    width: 100%;
    outline: none;
  }

  .required-input {
    border: 1px solid red;
  }

  p.alerta-required{
    color: red;
    font-size: 12px; !important;
  }

  .hide{
    display: none;
  }

  input[type=submit]{
    padding: 15px 30px;
    font-size: 16px;
    border: 1px solid rgb(96, 108, 56);
    background-color: rgb(96 108 56 / 13%);
    border-radius: 10px;
    float: right;
  }

  .titulo{
    margin: 15px auto;
    width: fit-content;
    font-size: 40px;
  }
  .subtitulo{
    max-width: 900px;
    margin: auto;
    text-align: center;
    font-size: 16px;
  }
`;

function FaleConosco() {
  return (
    <FaleConoscoStyle>
      <p className="titulo"> Fale Conosco </p>
      <p className="subtitulo"> Entre em contato conosco e compartilhe suas dúvidas, sugestões e feedback para construirmos juntos uma experiência ainda melhor! </p>
      <div className="row">
        <form id='form-fale-conosco'>
          <div className='input-container'>
            <p>Nome *</p>
            <input type="text" id='nome' placeholder="Nome" />
            <p id="nome" className='alerta-required hide'>Campo Obrigatório</p>
          </div>
          
          <div className='input-container'>
            <p>Email *</p>
            <input type="text" id="email" placeholder="Email" />
            <p id="email" className='alerta-required hide'>Campo Obrigatório</p>
          </div>
          
          <div className='input-container'>
            <p>Telefone *</p>
            <input type="text" id="tel" placeholder="Telefone" />
            <p id="tel" className='alerta-required hide'>Campo Obrigatório</p>
          </div>

          <div className='input-container'>
            <p>Idade *</p>
            <input type="number" id="idade" placeholder="Idade" min={0}/>
            <p id="idade" className='alerta-required hide'>Campo Obrigatório</p>
          </div>
          
          <div className='input-container'>
            <p>Mensagem *</p>
            <textarea rows={6} id="mensagem" placeholder="Mensagem" />
            <p id="mensagem" className='alerta-required hide'>Campo Obrigatório</p>
          </div>

          <div className='input-container'>
            <input type="submit" value="Enviar"/>
          </div>
        </form>
      </div>
    </FaleConoscoStyle>
  )
}

export default FaleConosco
