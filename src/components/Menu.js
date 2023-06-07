import { Link } from 'react-router-dom'
import Logo from "../images/logo2.png"

function Menu() {
    const link = {
        display: 'inlineBlock',
        textDecoration: 'none',
        padding: '20px',
        color: '#fff',
        fontSize: '1.5em'
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#"><img src={Logo} alt="" style={{ height: '35px' }} /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link style={link} to='/home'>Home</Link>
                        <Link style={link} to="/ods2">Ods2</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Menu
