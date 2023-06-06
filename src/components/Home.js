import Logo from "../images/logo2.png"

function Home() {
    return (
        <div>
            HOME
            <footer>
                <div class="row">
                    <div class="col">
                        <img src={Logo} alt="logo" class="logo-footer" />
                        <div class="icons-footer">
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-whatsapp"></i>
                            <i class="fa-solid fa-envelope"></i>

                        </div>

                    </div>
                    <div class="col">
                        <h4>Home</h4>
                        <ul>
                            <li><a href="">Forum</a></li>
                            <li><a href="">Comunidade</a></li>
                        </ul>

                    </div>
                    <div class="col">
                        <h4>Home</h4>
                        <ul>
                            <li><a href="">Forum</a></li>
                            <li><a href="">Comunidade</a></li>
                        </ul>

                    </div>

                </div>
            </footer>
        </div>
    )
}
  
export default Home;
  