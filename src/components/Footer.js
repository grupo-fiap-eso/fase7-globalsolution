import Logo from "../images/Logo.png"

const links = {
    textDecoration: 'none',
    color: '#fff'
}

function Footer(){
  return(
    <footer>
      <div className="row">
          <div className="col">
            <img src={Logo} alt="logo" className="logo-footer" />
            <div className="icons-footer">
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-solid fa-envelope"></i>
            </div>

          </div>
          <div className="col">
            <h4><a href="/home" style={links}>Home</a></h4>
            <ul>
                <li><a href="/dados-da-fome">Dados da Fome</a></li>
                <li><a href="/inseguranca_alimentar">Insegurança Alimentar</a></li>
                <li><a href="/nossa_solucao">Nossa Solução</a></li>
            </ul>


          </div>
          <div className="col">
            <ul>
              <li><h4><a href="/fale-conosco">Fale Conosco</a></h4></li>
            </ul>

          </div>
      </div>
  </footer>
  )
}

export default Footer;
