import { Link } from 'react-router-dom'

function Menu() {
    const link = {
        display: 'inlineBlock',
        textDecoration: 'none',
        padding: '20px',
        color: '#fff',
        fontSize: '1.5em'
    }

    return (
      <header class="header">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link style={link} to='/home'>Home</Link>
              <Link style={link} to='/dados-da-fome'>Dados da Fome</Link>
              <Link style={link} to='/inseguranca_alimentar'>Insegurança Alimentar</Link>
              <Link style={link} to="/ods2">Ods2</Link>
              <Link style={link} to='/nossa_solucao'>Nossa Solução</Link>
              <Link style={link} to='/pitch'>Video Pitch</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}
export default Menu
