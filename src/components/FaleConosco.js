import { FaleConoscoStyle } from '../styled';

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
