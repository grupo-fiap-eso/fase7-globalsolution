import React from "react";
import PostCard from "./PostCard";
import PostImg from "../../images/post2-img.jpeg"

const titulo = "Mapa da Fome"
const resumo = "A ."
const img = PostImg

class Post2Card extends React.Component {
  render() {
    return (
      <div style={{"display": "flex", "justify-content": "space-between"}}>
        {
          (
            this.props.categoriaSelecionada === 'sociedade' ||
            this.props.categoriaSelecionada === 'todas'
          ) && (
            <PostCard
              titulo={titulo}
              src={img}
              resumo={resumo}
              id={2}
            />
          )
        }
      </div>
    )
  }
}

function Post2(){
  return (
    
      <div class="row green">
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

     
  )
}

export { Post2Card, Post2 };
