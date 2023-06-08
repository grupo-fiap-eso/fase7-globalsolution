import React from "react";
import PostCard from "./PostCard";
import { PostStyle } from "../../styled";
import ImgFome from "../../images/Pagina2-Dados-Fome.jpeg"

const titulo = "Dados da Fome"
const resumo = "Ajude a preencher esse vazio "
const img = ImgFome
const links = '/dados-da-fome'

class Post1Card extends React.Component {
  render() {
    return (
      <div style={{"display": "flex", "justify-content": "space-between"}}>
        {
          (
            this.props.categoriaSelecionada === 'sustentabilidade' ||
            this.props.categoriaSelecionada === 'todas'
          ) && (
            <PostCard
              titulo={titulo}
              src={img}
              resumo={resumo}
              id={1}
            />
          )
        }
      </div>
    )
  }
}

function Post1(){
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
          <a src={links}>Continue lendo...</a>
        
      </div>
    </PostStyle>
    
  )
}

export { Post1Card, Post1 };
