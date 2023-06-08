

import PostsResumo from "./posts/PostsResumo";
import { CardsStyle } from "../styled";
import Sustentabilidade from "../images/sustentabilidade.png"
import { StyleSecao } from "../styled";
import imgP1 from "../images/imgP1.png"
import imgP2 from "../images/imgP2.png"
import imgP3 from "../images/imgP3.png"

const Hr = {
    margin: '10vh'
}

function Home() {
    return (
        <div>

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
            <hr style={Hr}></hr>

            <PostsResumo />


            <CardsStyle>

                <section class="impactos">
                    <div class="impactos-text">
                        <h3>MERCADO</h3>
                        <p>Nossas Métricas!
                        </p>
                    </div>
                   <div class="row">
                    <div class="card">
                        <img class="card-img-top" src={imgP1} alt="Card image"/>
                            <div class="card-body">
                                <h5 class="card-title"><strong>6,4%</strong></h5>
                                <p>Taxa de Crescimento Anual 2023 - 2032</p>
                            </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={imgP2} alt="Card image"/>
                            <div class="card-body">
                            <h5 class="card-title"><strong>R$ 80M</strong></h5>
                                <p>Valor de Mercado Global</p>

                            </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={imgP3} alt="Card image"/>
                            <div class="card-body">
                            <h5 class="card-title"><strong>R$ 150M</strong></h5>
                            <p>Valor de Mercado Previsto 2023</p>

                            </div>
                    </div>
                    
                    </div> 

                </section>
            </CardsStyle>

</div>
    )
}

export default Home;