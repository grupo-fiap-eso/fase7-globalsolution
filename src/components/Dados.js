import Africa from "../images/clima_africa.jpg"
import Guerra from "../images/guerra_ucrania.jpeg"
import Conflitos from "../images/conflitos_politicos.jpg"


function Dados() {

    const cards = {
        border: '1px solid blue',
        padding: '3px 5px'

    }

    const cards2_geral = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        border: '2px solid green',

    }
    const cards2 = {
        float: 'left',
        paddingTop: '5px',
        margin: '20px',
        textAlign: 'center',
        borderRight: '2px solid green',
        paddingRight: '10px'


    }

    const img_card = {
        height: '250px',
        width: '250px'
    }

    return (
        <div style={{ justifyContent: 'center', margin: '20px', }}>
            <h1>Insegurança Alimentar</h1>
            <h2> O que é insegurança alimentar?</h2>
            <p>
                A insegurança alimentar acontece quando as pessoas não têm acesso regular e permanente a alimentos em quantidade e qualidade suficiente para sua sobrevivência, como define a Organização das Nações Unidas para a Alimentação e a Agricultura (FAO).
                <br></br>
                Isso quer dizer que a pessoa em estado de insegurança alimentar passa por incertezas de quando, como e quanto irá comer em sua próxima refeição, colocando em risco sua nutrição, saúde e bem-estar.
            </p>

            <h2>Tipos de Definição Alimentar</h2>

            <h3>Moderada:</h3>
            <p>
                Os indivíduos tem uma limitação para obter alimentos devido a fatores como renda ou acesso aos próprios alimentos.
            </p>

            <h3>Grave:</h3>
            <p>
                Os indivíduos não têm acesso à comida durante dias
            </p>

            <h3>Crônica:</h3>
            <p>
                Os indivíduos passam por grandes períodos de incerteza em relação as suas refeições
            </p>

            <h3>Aguda:</h3>
            <p>
                Os indivíduos não possuem alimentos suficientes, ameaçando a vida e os colocando em risco de desnutrição.
            </p>

            <h3>GLOBAL REPORT ON FOOD CRISES - 2023</h3>
            <p>O Global Report é um documento colaborativo de várias organizações parceiras que reúne dados gerais e detalhados sobre a insegurança alimentar aguda em países com crises alimentares. Este documento foi publicado pela Food Security Information Network (FSIN) em apoio à Global Network against Food Crises (GNAFC).</p>

            <a href="https://www.fsinplatform.org/global-report-food-crises-2023" target="_blank">Clique aqui para acessar ao relatório completo.</a>

            <div style={cards}>
                <div style={{ backgroundColor: '#ffa372', borderRadius: '5px', paddingLeft: '10px', color: 'white' }}>
                    <h2>Fase 1 - Mínima</h2>
                </div>
                <h5>Os agregados familiares são capazes de satisfazer as necessidades alimentares e não alimentares essenciais sem recorrer a estratégias atípicas e insustentáveis ​​de acesso a alimentos e rendimentos.</h5>
            </div>

            <div style={cards}>
                <div style={{ backgroundColor: '#ff6c3e', borderRadius: '5px', paddingLeft: '10px', color: 'white' }}>
                    <h2>Fase 2 - Estressado</h2>
                </div>
                <h5>As famílias têm um consumo alimentar minimamente adequado, mas são incapazes de arcar com algumas despesas não alimentares essenciais sem se engajar em estratégias de enfrentamento do estresse.</h5>
            </div>

            <div style={cards}>
                <div style={{ backgroundColor: '#ff0000', borderRadius: '5px', paddingLeft: '10px', color: 'white' }}>
                    <h2>Fase 3 - Crise</h2>
                </div>
                <h5>As famílias têm lacunas no consumo de alimentos com desnutrição aguda alta ou acima do normal OU esgotamento acelerado dos meios de subsistência OU recorrem a estratégias de enfrentamento de crises.</h5>
            </div>

            <div style={cards}>
                <div style={{ backgroundColor: '#bd0003', borderRadius: '5px', paddingLeft: '10px', color: 'white' }}>
                    <h2>Fase 4 - Emergência</h2>
                </div>
                <h5>As famílias têm grandes lacunas no consumo de alimentos, resultando em desnutrição aguda muito alta e mortalidade excessiva OU enfrentam perda extrema de meios de subsistência OU recorrem a estratégias de sobrevivência de emergência.</h5>
            </div>

            <div style={cards}>
                <div style={{ backgroundColor: '#7f0000', borderRadius: '5px', paddingLeft: '10px', color: 'white' }}>
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



            <div style={cards2_geral}>

                <div style={cards2}>
                    <img src={Africa} alt="logo" style={img_card} />
                    <h4>Clima Desfavorável</h4>
                    <p>A combinação de fatores climáticos extremos resulta em baixa produtividade agrícola, escassez de recursos naturais e dificuldade de subsistência para as populações locais. A fome se torna uma realidade nessas regiões, pois a produção de alimentos é insuficiente para suprir as necessidades básicas da população </p>
                </div>

                <div style={cards2}>
                    <img src={Guerra} alt="logo" style={img_card} />
                    <h4>Zonas de Conflito</h4>
                    <p>Nas zonas de guerra, a produção, o plantio e o transporte são diretamente afetados pela destruição evidente. Sem um solo fértil, estrutura e uma rota segura, a região enfrenta um grave problema de insegurança alimentar.</p>
                </div>



                <div style={cards2}>
                    <img src={Conflitos} alt="logo" style={img_card} />
                    <h4>Conflitos Pólíticos</h4>
                    <p>Os conflitos políticos têm um impacto significativo na ocorrência da fome em várias partes do mundo. Quando ocorrem instabilidades políticas, disputas de poder e violência, isso geralmente leva à interrupção dos sistemas de produção de alimentos, distribuição e acesso aos recursos básicos, resultando em insegurança alimentar e fome.</p>
                </div>
            </div>

            <script src="//my.visme.co/visme-embed.js"></script><div class="visme_d" data-title="Top 10 Countries Map" data-url="rxjkep1z-untitled-project" data-w="1920" data-full-h="false" data-h="1080" data-domain="my"></div><p style={{width:'142px' ,borderRadius:'3px' ,padding:'3px' ,fontSize:'12px' ,fontFamily:'Arial' ,color:'#314152' ,whiteSpace:'nowrap' }}>Feito com <a href="https://www.visme.co/?vc=Made-With-Visme&amp;utm_medium=Embed" target="_blank" rel="noreferrer" style={{fontWeight:'600' ,textDecoration:'none' ,fontSize:'12px' ,fontFamily:'Arial' ,color:'#314152' ,whiteSpace:'nowrap' }}>Visme</a></p>

            
        

        </div >


    )
}


export default Dados