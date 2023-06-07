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
    backgroundSize:'cover',
    height: '92vh',
    width: '100%',
    opacity:'0.7',
    
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

        <section id= "home"class="segunda-secao">
            <div class="content">
                <h2>Nossa Missão</h2>
                <p><strong>A Food Care</strong> tem como missão fornecer, às áreas afetadas
                pela fome, desnutrição e pobreza, uma melhor qualidade de vida. Através da nossa produção em larga
                escala de lentilha, a protagonista no combate à desnutrição e com o sistema de aquaponia, exportaremos
                nossos brotos para regiões com maiores necessidades para o combate à desnutrição mundial!

                </p>
                            <a href="#" class="link">Mais</a>

            </div>
            <img src={Sustentabilidade} class="imagem"/>
        </section>
</StyleSecao>

        <PostsResumo />


        <CardsStyle>

        <section class="impactos">
            <div class="impactos-text">
                <h2>Impactos</h2>
                <p>texttexttexttex ttexttextte xttexttextte xttext
                texttext texttexttexttextte  xttexttexttexttext
                texttextte xttexttextt exttexttext
                </p>
            </div>
            <div class="content">
                <div class="impactos-cards">
                    <img src={imgP1}/>
                    <h3>Assunto</h3>
                </div>
                <div class="impactos-cards">
                    <img src={imgP2}/>
                    <h3>Assunto</h3>
                </div>
                <div class="impactos-cards">
                    <img src={imgP3}/>
                    <h3>Assunto</h3>
                </div>

            </div>

        </section>
        </CardsStyle>

</div>
    )
  }
  
  export default Home;
  
