
import PostsResumo from "./posts/PostsResumo";
import { CardsStyle } from "../styled";
import Sustentabilidade from "../images/sustentabilidade.png"
import { StyleSecao } from "../styled";
import ImgCentro from "../images/Aquaponia.jpg"
import imgP1 from "../images/imgP1.png"
import imgP2 from "../images/imgP2.png"
import imgP3 from "../images/imgP3.png"

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
    <div className=" primeira-secao">
      <div>
        <img src={ImgCentro} alt="" style={img} />
      </div>
    </div>

    <StyleSecao>
      <section id="home" className="segunda-secao">
        <div className="content">
          <h2>Nossa Missão</h2>
          <p><strong>A Food Care</strong> tem como missão fornecer, às áreas afetadas
              pela fome, desnutrição e pobreza, uma melhor qualidade de vida. Através da nossa produção em larga
              escala de lentilha, a protagonista no combate à desnutrição e com o sistema de aquaponia, exportaremos
              nossos brotos para regiões com maiores necessidades para o combate à desnutrição mundial!

          </p>
          <a href="#" className="link">Mais</a>
        </div>
        <img src={Sustentabilidade} className="imagem" />
      </section>
    </StyleSecao>

    <PostsResumo />

    <CardsStyle>
      <section className="impactos">
        <div className="impactos-text">
          <h3>Modelo de Receita</h3>
          <p>O custo de produção cresce de acordo com a demanda do sistema a ser implantado
          </p>
        </div>
        <div className="row" style={{
          alignItems: 'stretch',
          marginInline: '0',
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignContent: 'flex-end',
          maxWidth: '1100px',
          width: '100%',
          margin: 'auto',
        }}>
          <div className="card">
            <img className="card-img-top" src={imgP1} alt="Card image"/>
            <div className="card-body">
              <h5 className="card-title">Aquaponia na Esteira de Produção</h5>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={imgP2} alt="Card image"/>
            <div className="card-body">
              <h5 className="card-title">Aquaponia no Reaproveitamento de alimentos (grãos)</h5>
            </div>
          </div>
            <div className="card">
              <img className="card-img-top" src={imgP3} alt="Card image"/>
              <div className="card-body">
                <h5 className="card-title">Sistema Independente com ia</h5>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={imgP3} alt="Card image"/>
              <div className="card-body">
                <h5 className="card-title">Ecossistema aquático</h5>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={imgP3} alt="Card image"/>
                <div className="card-body">
                  <h5 className="card-title">Parcerias com Organizações Mundiais</h5>
                </div>
            </div>
          </div> 
        </section>
      </CardsStyle>
    </div>
  )
}

export default Home;
