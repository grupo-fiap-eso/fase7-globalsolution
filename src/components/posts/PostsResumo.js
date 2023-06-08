
import { PostStyle } from '../../styled'
import Post1Card from "./Post1Card";
import Post2Card from "./Post3Card";
import Post3Card from "./Post2Card";
 
function PostsResumo(){
  return (
    <PostStyle>
      <div class="row posts">
        <div class="row secao-tres">
            <h2>Por que FoodCare ?</h2>
            <p class="paragrafo-superior">
              Nossa empresa se preocupa com um dos fatores que mais causa transtornos mundiais, a fome. 
              Nos importamos uns com os outros ao ponto de nos impor sobre essa realidade visando suprir e combater
              esse mal que ainda assola nosso mundo.
              Por isso, a FoodCare se propõe a entender como esse tema vem se agravando para que possamos juntos
              erradicá-lo com a melhor solução possível. 
            </p>
            
        </div>
        <div style={{
          "display": "flex",
          "flex-wrap": "wrap",
          "flex-direction": "row",
          "justify-content": "center"
        }}>
          <Post1Card />
          <Post2Card />
          <Post3Card />
        </div>

      </div>
    </PostStyle>
  );
};

export default PostsResumo;
