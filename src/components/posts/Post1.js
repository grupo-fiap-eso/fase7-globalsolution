import React from "react";
import PostCard from "./PostCard";
import { PostStyle } from "../../styled";
import PostImg from "../../images/post1-img.jpeg"

const titulo = "Insegurança Alimentar"
const resumo = "Pequenas "
const img = PostImg

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
        
      </div>
    </PostStyle>
    
  )
}

export { Post1Card, Post1 };
