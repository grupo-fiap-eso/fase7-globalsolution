import Africa from "../images/clima_africa.jpg"
import Guerra from "../images/guerra_ucrania.jpeg"
import Conflitos from "../images/conflitos_politicos.jpg"
import { PostStyle } from "../styled"


function InsegurancaAlimentar() {
    return (
      <PostStyle>
        <div className="row">
          <p className="titulo display-4">
            Insegurança Alimentar
          </p>
        </div>
        <div className="row post-content">
          <h2> O que é insegurança alimentar?</h2>
            <p>
              A insegurança alimentar acontece quando as pessoas não têm acesso regular e permanente a alimentos em quantidade e qualidade suficiente para sua sobrevivência, como define a Organização das Nações Unidas para a Alimentação e a Agricultura (FAO).
              <br></br>
              Isso quer dizer que a pessoa em estado de insegurança alimentar passa por incertezas de quando, como e quanto irá comer em sua próxima refeição, colocando em risco sua nutrição, saúde e bem-estar.
            </p>

            <h2>Tipos de Definição Alimentar</h2>

            <h3 className="left">Moderada:</h3>
            <p>
                Os indivíduos tem uma limitação para obter alimentos devido a fatores como renda ou acesso aos próprios alimentos.
            </p>

            <h3 className="left">Grave:</h3>
            <p>
                Os indivíduos não têm acesso à comida durante dias
            </p>

            <h3 className="left">Crônica:</h3>
            <p>
                Os indivíduos passam por grandes períodos de incerteza em relação as suas refeições
            </p>

            <h3 className="left">Aguda:</h3>
            <p>
                Os indivíduos não possuem alimentos suficientes, ameaçando a vida e os colocando em risco de desnutrição.
            </p>

            <h3>GLOBAL REPORT ON FOOD CRISES - 2023</h3>
            <p>O Global Report é um documento colaborativo de várias organizações parceiras que reúne dados gerais e detalhados sobre a insegurança alimentar aguda em países com crises alimentares. Este documento foi publicado pela Food Security Information Network (FSIN) em apoio à Global Network against Food Crises (GNAFC).</p>

            <a href="https://www.fsinplatform.org/global-report-food-crises-2023" target="_blank">Clique aqui para acessar ao relatório completo.</a>

            <div className="section-box-verde">
              <div className="fase fase1">
                <h2>Fase 1 - Mínima</h2>
              </div>
              <h5>Os agregados familiares são capazes de satisfazer as necessidades alimentares e não alimentares essenciais sem recorrer a estratégias atípicas e insustentáveis ​​de acesso a alimentos e rendimentos.</h5>
            </div>

            <div className="section-box-verde">
              <div className="fase fase2">
                <h2>Fase 2 - Estressado</h2>
              </div>
              <h5>As famílias têm um consumo alimentar minimamente adequado, mas são incapazes de arcar com algumas despesas não alimentares essenciais sem se engajar em estratégias de enfrentamento do estresse.</h5>
            </div>

            <div className="section-box-verde">
              <div className="fase fase3">
                <h2>Fase 3 - Crise</h2>
              </div>
              <h5>As famílias têm lacunas no consumo de alimentos com desnutrição aguda alta ou acima do normal OU esgotamento acelerado dos meios de subsistência OU recorrem a estratégias de enfrentamento de crises.</h5>
            </div>

            <div className="section-box-verde">
              <div className="fase fase4">
                <h2>Fase 4 - Emergência</h2>
              </div>
              <h5>As famílias têm grandes lacunas no consumo de alimentos, resultando em desnutrição aguda muito alta e mortalidade excessiva OU enfrentam perda extrema de meios de subsistência OU recorrem a estratégias de sobrevivência de emergência.</h5>
            </div>

            <div className="section-box-verde">
              <div className="fase fase5">
                <h2>Fase 5 - Catástrofe/Fome</h2>
              </div>
              <h5>Os agregados familiares têm uma extrema falta de alimentos e/ou outras necessidades básicas. Fome, morte, miséria e níveis extremamente críticos de desnutrição aguda são evidentes.</h5>
            </div>

            <div style={{ position: 'relative', width: '80%', paddingTop: '50%', justifyContent: 'center' }}>
              <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0', margin: '0' }}
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFlFki20TM&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
              </iframe>
            </div>
            <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFlFki20TM&#x2F;view?utm_content=DAFlFki20TM&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>

            <h1>Motivos que Causam a Insegurança Alimentar</h1>

            <div style={{
              display: "flex",
              flexWrap: "nowrap",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "auto"
            }}>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <div class="card ">
                  <img class="image" src={Africa} alt="postimg" />
                  <p style={{
                    fontSize: "23px",
                    fontWeight: "900",
                    color: "#424141",
                    textIndent: "initial"
                  }}>Clima Desfavorável</p>
                  <p>
                    <font style={{ verticalAlign: 'inherit' }}>
                      A combinação de fatores climáticos extremos resulta em baixa produtividade agrícola, escassez de recursos naturais e dificuldade de subsistência para as populações locais. A fome se torna uma realidade nessas regiões, pois a produção de alimentos é insuficiente para suprir as necessidades básicas da população.
                    </font>
                  </p>
                </div>
              </div>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <div class="card ">
                  <img class="image" src={Guerra} alt="postimg" />
                  <p style={{
                    fontSize: "23px",
                    fontWeight: "900",
                    color: "#424141",
                    textIndent: "initial"
                  }}>Zonas de Conflito</p>
                  <p>
                    <font style={{ verticalAlign: 'inherit' }}>
                      Nas zonas de guerra, a produção, o plantio e o transporte são diretamente afetados pela destruição evidente. Sem um solo fértil, estrutura e uma rota segura, a região enfrenta um grave problema de insegurança alimentar.
                    </font>
                  </p>
                </div>
              </div>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <div class="card ">
                  <img class="image" src={Conflitos} alt="postimg" />
                  <p style={{
                    fontSize: "23px",
                    fontWeight: "900",
                    color: "#424141",
                    textIndent: "initial"
                  }}>Conflitos Políticos</p>
                  <p>
                    <font style={{ verticalAlign: 'inherit' }}>
                      Os conflitos políticos têm um impacto significativo na ocorrência da fome em várias partes do mundo. Quando ocorrem instabilidades políticas, disputas de poder e violência, isso geralmente leva à interrupção dos sistemas de produção de alimentos, distribuição e acesso aos recursos básicos, resultando em insegurança alimentar e fome.
                    </font>
                  </p>
                </div>
              </div>
            </div>

            <script src="//my.visme.co/visme-embed.js"></script><div class="visme_d" data-title="Top 10 Countries Map" data-url="rxjkep1z-untitled-project" data-w="1920" data-full-h="false" data-h="1080" data-domain="my"></div><p style={{width:'142px' ,borderRadius:'3px' ,padding:'3px' ,fontSize:'12px' ,fontFamily:'Arial' ,color:'#314152' ,whiteSpace:'nowrap' }}>Feito com <a href="https://www.visme.co/?vc=Made-With-Visme&amp;utm_medium=Embed" target="_blank" rel="noreferrer" style={{fontWeight:'600' ,textDecoration:'none' ,fontSize:'12px' ,fontFamily:'Arial' ,color:'#314152' ,whiteSpace:'nowrap' }}>Visme</a></p>
        </div >
    </PostStyle>
  )
}


export default InsegurancaAlimentar;
