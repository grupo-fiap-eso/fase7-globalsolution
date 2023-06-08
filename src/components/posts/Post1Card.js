import React from "react";
import PostCard from "./PostCard";
import PostImg from "../../images/post1-img.jpeg"

const titulo = "Insegurança Alimentar"
const resumo = "Acontece quando as pessoas não têm acesso regular e permanente a alimentos em quantidade e qualidade suficiente para sua sobrevivência, como define a Organização das Nações Unidas para a Alimentação e a Agricultura (FAO)."
const img = PostImg

function Post1Card() {
  return (
    <div style={{"display": "flex", "justify-content": "space-between"}}>
      <PostCard
        titulo={titulo}
        src={img}
        resumo={resumo}
        link="/inseguranca_alimentar"
      />
    </div>
  )
}

export default Post1Card;
