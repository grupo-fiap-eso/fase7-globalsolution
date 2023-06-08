import React from "react";
import PostCard from "./PostCard";
import { PostStyle } from "../../styled";
import PostImg from "../../images/ciclo08.png"

const titulo = "Agricultura Sustentável"
const resumo = "Ojetivos de um Desenvolvimento Sustentável"
const img = PostImg

class Post3Card extends React.Component {
  render() {
    return (
      <div style={{"display": "flex", "justify-content": "space-between"}}>
        {
          (
            this.props.categoriaSelecionada === 'meio-ambiente' ||
            this.props.categoriaSelecionada === 'todas'
          ) && (
            <PostCard
              titulo={titulo}
              src={img}
              resumo={resumo}
              id={3}
            />
          )
        }
      </div>
    )
  }
}

function Post3(){
  return (
    <PostStyle>
      <div class="row">
        <p class="titulo display-4">
          {titulo}
        </p>
        <p class="subtitulo display-7">
          {resumo}
        </p>
        <div class="img-container">
          <img class="image" src={img} alt="postimg"/>
        </div>
      </div>

      <div class="row post-content">
        <p>
          Nosso planeta abriga uma incrível diversidade de vida e paisagens deslumbrantes. No entanto, essa riqueza natural está enfrentando ameaças cada vez mais sérias devido à atividade humana. É crucial reconhecermos a importância da preservação ambiental e assumirmos a responsabilidade de proteger e conservar a natureza.
        </p>
        <p>
          Neste contexto, vamos explorar algumas formas de contribuir para a conservação da fauna e flora, bem como valorizar e apreciar as áreas naturais ao nosso redor. Juntos, podemos fazer a diferença e garantir um futuro sustentável para as gerações vindouras.
        </p>
        <ol>
          <li>
            <p>
              Plantio de árvores: Valorize a flora plantando árvores em espaços adequados. Além de ajudarem a purificar o ar, as árvores fornecem sombra e abrigo para diversas espécies de animais.
            </p>
          </li>
          <li>
            <p>
              Conscientização sobre fauna: Estejam atentos à vida animal ao seu redor. Respeitem os habitats naturais e evitem a degradação dos ecossistemas. Informe-se sobre a importância da conservação da fauna local.
            </p>
          </li>
          <li>
            <p>
              Visitas a áreas naturais: Aproveitem para desfrutar das belezas naturais em parques, reservas e áreas de preservação. Ao visitar esses locais, lembre-se de seguir as regras de proteção ambiental e deixar apenas pegadas.
            </p>
          </li>
          <li>
            <p>
              Redução do desperdício: Evite o desperdício de alimentos, água e energia. Planeje suas compras de forma consciente, comprando apenas o necessário e priorizando produtos com embalagens recicláveis. Utilize a água de forma responsável, consertando vazamentos e adotando práticas de reutilização, como a captação de água da chuva. Desligue os aparelhos eletrônicos quando não estiverem em uso e adote hábitos de economia de energia, como a utilização de lâmpadas de baixo consumo.
            </p>
          </li>
        </ol>
        <p>
          Vamos nos conectar com o mundo natural, valorizando e preservando a natureza. Cada ação conta e juntos podemos fazer a diferença para um planeta mais saudável e equilibrado!
        </p>
      </div>
    </PostStyle>
  )
}

export { Post3Card, Post3 };
