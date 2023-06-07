
import PostsResumo from "./posts/PostsResumo";
import { CardsStyle } from "../styled";
import Logo from "../images/logo2.png"
import Sustentabilidade from "../images/sustentabilidade.png"
import { StyleSecao } from "../styled";
import ImgCentro from "../images/Aquaponia.jpg"
import imgP1 from "../images/imgP1.png"
import imgP2 from "../images/imgP2.png"
import imgP3 from "../images/imgP3.png"

const links = {
    textDecoration: 'none',
    color: '#fff'
}

const img = {
    background: 'no-repeat center center fixed',
    LinearGradient: '(rgba(255,255,255,0.5), rgba(255,255,255,0.5))',
    backgroundSize: 'cover',
    height: '92vh',
    width: '100%',
    opacity: '0.7',

}

function Home() {
    return (
        <div>
            <div class=" primeira-secao">
                <div>
                    <img src={ImgCentro} alt="" style={img} />
                </div>
            </div>

            <StyleSecao>

                <section id="home" class="segunda-secao">
                    <div class="content">
                        <h2>Nossa Missão</h2>
                        <p><strong>A Food Care</strong> tem como missão fornecer, às áreas afetadas
                            pela fome, desnutrição e pobreza, uma melhor qualidade de vida. Através da nossa produção em larga
                            escala de lentilha, a protagonista no combate à desnutrição e com o sistema de aquaponia, exportaremos
                            nossos brotos para regiões com maiores necessidades para o combate à desnutrição mundial!

                        </p>
                        <a href="#" class="link">Mais</a>

                    </div>
                    <img src={Sustentabilidade} class="imagem" />
                </section>
            </StyleSecao>

            <PostsResumo />


            <CardsStyle>

                <section class="impactos">
                    <div class="impactos-text">
                        <h3>Modelo de Receita</h3>
                        <p>O custo de produção cresce de acordo com a demanda do sistema a ser implantado
                        </p>
                    </div>
                   <div class="row">
                    <div class="card">
                        <img class="card-img-top" src={imgP1} alt="Card image"/>
                            <div class="card-body">
                                <h5 class="card-title">Aquaponia na Esteira de Produção</h5>
                            </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={imgP2} alt="Card image"/>
                            <div class="card-body">
                                <h5 class="card-title">Aquaponia no Reaproveitamento de alimentos (grãos)</h5>
                            </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={imgP3} alt="Card image"/>
                            <div class="card-body">
                                <h5 class="card-title">Sistema Independente com ia</h5>
                            </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={imgP3} alt="Card image"/>
                            <div class="card-body">
                                <h5 class="card-title">Ecossistema aquático</h5>
                            </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={imgP3} alt="Card image"/>
                            <div class="card-body">
                                <h5 class="card-title">Parcerias com Organizações Mundiais</h5>
                            </div>
                    </div>
                    </div> 

                </section>
            </CardsStyle>

</div>
    )
}

export default Home;
