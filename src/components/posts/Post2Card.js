import React from "react";
import PostCard from "./PostCard";
import PostImg from "../../images/Pagina2-Dados-Fome.jpeg"

const titulo = "Dados da Fome"
const resumo = "Combater a fome e alcançar a segurança alimentar para todos é um objetivo mundial e tema central da Organização para a Alimentação e Agricultura, do inglês Food and Agriculture Organization (FAO), pertencente à Organização das Nações Unidas (ONU)"
const img = PostImg

function Post2Card() {
  return (
    <div style={{"display": "flex", "justify-content": "space-between"}}>
      <PostCard
        titulo={titulo}
        src={img}
        resumo={resumo}
        link="/dados-da-fome"
      />
    </div>
  )
}

export default Post2Card;
