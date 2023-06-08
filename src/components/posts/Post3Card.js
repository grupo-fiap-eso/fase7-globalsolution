import React from "react";
import PostCard from "./PostCard";
import PostImg from "../../images/post3-img.jpeg"

const titulo = "Agricultura Sustentável"
const resumo = "Na aquaponia, ocorre uma simbiose entre peixes e plantas. Os resíduos dos peixes (principalmente amônia) são convertidos em nutrientes pelas bactérias benéficas presentes no sistema de filtragem. Esses nutrientes são então absorvidos pelas plantas, que filtram e purificam a água antes de retorná-la ao tanque dos peixes."
const img = PostImg

function Post3Card() {
  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <PostCard
        titulo={titulo}
        src={img}
        resumo={resumo}
        link="/ods2"
      />
    </div>
  )
}

export default Post3Card;
