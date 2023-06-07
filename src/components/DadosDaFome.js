import DadosFomeImg from '../images/Pagina2-Dados-Fome.jpeg'
import PratoIcon from '../images/prato.svg'
import ODMImage from '../images/ODM.png'
import BrasilImg from '../images/brasil.png'
import SectionColapsible from './SectionColapsible';
import { DadosDaFomeStyle } from '../styled';

const titulo = "Dados da Fome"

function DadosDaFome() {
  return (
    <DadosDaFomeStyle>
      <div className="row">
        <p className="titulo">
          {titulo}
        </p>
        <div className="img-container">
          <img className="image" src={DadosFomeImg} alt="postimg"/>
        </div>
      </div>

      <div className="row post-content">
        <div className='row'>
          <p>
            Combater a fome e alcançar a segurança alimentar para todos é um objetivo mundial e tema central da Organização para a Alimentação e Agricultura, do inglês Food and Agriculture Organization (FAO), pertencente à Organização das Nações Unidas (ONU)
          </p>
          <p>
            O principal objetivo da FAO, juntamente a outras organizações internacionais e governos locais, é garantir que as pessoas tenham acesso regular a alimentos de qualidade e a quantidades suficientes para levar uma vida ativa e saudável.
          </p>
    
        <SectionColapsible
          aberta = {false}
          title="Mapa da Fome"
        >
          <div className='section-colapsible-content'>
            <img src={PratoIcon} className='prato'/>
            <p>
              É uma ferramenta que apresenta o número de pessoas que enfrentam a fome e a insegurança alimentar no mundo. O Mapa aponta os países em que existem populações que não têm acesso à alimentação, têm acesso inadequado ou insuficiente para uma vida saudável.
            </p>
            <p>
              O Mapa da Fome é publicado pela FAO anualmente no relatório “O estado da segurança alimentar e da nutrição no mundo”, esse relatório apresenta a fome e a insegurança alimentar no mundo, por região e por país.
            </p>
          </div>

        </SectionColapsible>

        <p>
          Um país entra no Mapa da Fome quando mais de 2,5% de sua população enfrenta falta crônica de alimentos e, para identificar esse percentual e outros número relacionados a fome e a insegurança alimentar, a FAO utiliza indicadores tais como:
        </p>
        <ul>
          <li>
            <p>
              <b>
                Profundidade da fome, &nbsp;
              </b>
              a qual é medida pela estimativa de pessoas que enfrentam a fome ou têm alimentação insuficiente e inadequada;
            </p>
          </li>
          <li>
            <p>
              <b>
              Desnutrição, &nbsp;
              </b>
              a qual considera não somente pessoas que não têm acesso à alimentação, mas também aquelas que têm acesso insuficiente e/ou inadequado;
            </p>
          </li>
          <li>
            <p>
              <b>
              População, &nbsp;
              </b>
              consiste na identificação de populações em situação de vulnerabilidade e que, consequentemente, enfrentam a fome, tais como mulheres e crianças.
            </p>
          </li>
        </ul>

        <p>
          No ano 2000 surgiram os Objetivos de Desenvolvimento do Milênio (ODM) quando líderes mundiais se reuniram na ONU para discutir o combate à pobreza, criando assim oito ODM, dentre eles, o combate à fome. Assim, a partir do ano 2000, o Mapa da Fome passou a indicar os avanços ou retrocessos mundiais no alcance do ODM.
        </p>
        <p>
          O ODM esteve em vigor até 2014 e, a partir de 2015, foi substituído pelos Objetivos de Desenvolvimento Sustentável (ODS) um conjunto de 17 metas mundiais estabelecidas pela Assembleia Geral das Nações Unidas, sendo a segunda meta o alcance da fome zero e agricultura sustentável.
        </p>

        <p>
          De acordo com a ONU, o objetivo é “Até 2030, acabar com a fome e garantir o acesso de todas as pessoas, em particular os pobres e as pessoas em situação de vulnerabilidade, incluindo crianças, a alimentos seguros, nutritivos e suficientes durante todo o ano”.
        </p>

        <SectionColapsible
          aberta = {false}
          title="Objetivos de Desenvolvimento do Milênio (ODM)"
        >
          <div className='section-colapsible-content'>

            <img src={ODMImage} className='odm'/>
              <p>
                <b>
                  Objetivo 2. Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável
                </b>
              </p>
              <p>
                <b>
                  2.1 &nbsp;
                </b>
                Até 2030, acabar com a fome e garantir o acesso de todas as pessoas, em particular os pobres e pessoas em situações vulneráveis, incluindo crianças, a alimentos seguros, nutritivos e suficientes durante todo o ano
              </p>
              <p>
                <b>
                  2.2 &nbsp;
                </b>
                Até 2030, acabar com todas as formas de desnutrição, incluindo atingir, até 2025, as metas acordadas internacionalmente sobre nanismo e caquexia em crianças menores de cinco anos de idade, e atender às necessidades nutricionais dos adolescentes, mulheres grávidas e lactantes e pessoas idosas
              </p>
              <p>
                <b>
                  2.3 &nbsp;
                </b>
                Até 2030, dbrar a produtividade agrícola e a renda dos pequenos produtores de alimentos, particularmente das mulheres, povos indígenas,agricultores familiares, pastores e pescadores, inclusive por meio de acesso seguro e igual à terra, outros recursos produtivos e insumos, conhecimento, serviços financeiros, mercados e oportunidades de agregação de valor e de emprego não agrícola
              </p>
          </div>
        </SectionColapsible>

        <p>
          O relatório da FAO publicado no ano de 2022 mostra que o Brasil está novamente no Mapa da Fome. Através de uma média feita de 2019 a 2021, o relatório mostra que a fome atingiu 4,1% da população brasileira, levando 8,6 milhões de pessoas à desnutrição e 15,4 milhões de pessoas a insegurança alimentar severa.
        </p>
        <p>
          Dos 166 países analisados pela FAO entre 2019 e 2021, 118 deles entraram no Mapa da Fome, e somente 48 deles não entraram. Nesse ranking, o Brasil ocupa o 94º lugar no Mapa da Fome, ficando atrás de países como Argentina, Chile, Costa Rica, Japão e Ucrânia.
        </p>
        <p>
          Estima-se que, em 2030, 670 milhões de pessoas ainda poderão enfrentar a fome devido aos fatores climáticos, políticos, econômicos e sociais, e cerca de 30 milhões dessas pessoas, são aquelas impactadas pelos efeitos decorrentes e duradouros da Covid-19 da pandemia da COVID-19.
        </p>
        <SectionColapsible
          aberta = {false}
          title="O Brasil no Mapa da Fome"
        >
          <div className='section-colapsible-content'>
            <img src={BrasilImg} className='brasil'/>
            <p>
              Com a recriação do Conselho Nacional de Segurança Alimentar e Nutricional (Consea) em 2023, uma das principais ferramentas para retirar o Brasil do Mapa da fome no ano de 2014.
            </p>
            <p>
              O Consea é responsável por garantir a existência de uma política de Segurança Alimentar atrvés de atividades como:
            </p>
            <ul>
              <li>
                <p>
                  O controle de estoques de alimentos;
                </p>
              </li>
              <li>
                <p>
                  Programa de cisternas;
                </p>
              </li>
              <li>
                <p>
                  Agricultura familiar com a articulação entre campo e cidade;
                </p>
              </li>
              <li>
                <p>
                  Rotulagem de alimentos;
                </p>
              </li>
              <li>
                <p>
                  Monitoramento de ações e políticas públicas;
                </p>
              </li>
              <li>
                <p>
                  Assim, espera-se que, o Consea, junto a outras políticas econômicas e sociais, consigam retirar o Brasil do Mapa da Fome novamente.
                </p>
              </li>
            </ul>
          </div>
        </SectionColapsible>
        </div>          
      </div>
    </DadosDaFomeStyle>
  )
}

export default DadosDaFome
