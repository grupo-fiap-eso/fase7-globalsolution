import ciclo08 from "../images/ciclo08.png"
import  ODS2 from "../images/ODS2.png"
import ODS12 from "../images/ODS12.png"
import ODS17 from "../images/ODS17.png"
import { PostStyle } from "../styled"

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

    const titulo = "TITULO"
    const resumo = "RESUMO/Subtitulo"


            function Ods2(){
                return (
                  <PostStyle>
                    <div class="row">
                      <p class="titulo display-4">
                      Agricultura Sustentável 
                      </p>
                      <p class="subtitulo display-7">                  
                      Objetivos de Desenvolvimento Sustentável 
                      </p>
                      <div class="img-container">                        
                      </div>
                    </div>
              
                    <div class="row post-content">
                      <p>
                      Na aquaponia, ocorre uma simbiose entre peixes e plantas. Os resíduos dos peixes (principalmente amônia) são convertidos em nutrientes pelas bactérias benéficas presentes no sistema de filtragem. Esses nutrientes são então absorvidos pelas plantas, que filtram e purificam a água antes de retorná-la ao tanque dos peixes. É um ciclo fechado de nutrientes, em contraste com a agricultura convencional, que requer adição regular de fertilizantes externos.
                      Utilizando significativamente menos água do que a agricultura convencional. Isso ocorre porque a água é recirculada continuamente no sistema e não há necessidade de irrigação constante ou perdas por evaporação. A água utilizada na aquaponia é reutilizada várias vezes, resultando em uma redução significativa no consumo de água em comparação com a agricultura tradicional.
                      A aquaponia é considerada uma prática agrícola sustentável devido a vários aspectos. Além do uso eficiente da água, ela também reduz o consumo de energia, pois não requer irrigação constante nem transporte de alimentos de longas distâncias. Além disso, a aquaponia não utiliza fertilizantes químicos e minimiza o uso de pesticidas, reduzindo a poluição da água e os impactos negativos no solo e nos ecossistemas circundantes.
                      É possível cultivar uma maior quantidade de plantas em uma área menor, devido à verticalização dos sistemas e à utilização eficiente do espaço. Isso resulta em uma maior densidade de cultivo em comparação com as plantações convencionais, onde as plantas são espaçadas para permitir um crescimento adequado e o acesso à luz solar.                          </p>
                      <p>
                      <br></br>
                      
                      <img src={ciclo08} alt="logo" style={img_card} />                       
                                       
                      </p>
                      <ol>
                        
                          <p>
                          <h2>Como estamos tratando erradicação da fome com a nossa empresa?</h2>
                          </p>
                          A aquaponia pode desempenhar um papel significativo na erradicação da fome no mundo, atendendo à meta do ODS 2 (Objetivo de Desenvolvimento Sustentável) de acabar com a fome, alcançar a segurança alimentar e melhorar a nutrição. Aqui estão algumas maneiras pelas quais a aquaponia pode contribuir:
                          Produção de alimentos nutritivos: A aquaponia permite o cultivo de uma ampla variedade de alimentos, como hortaliças, ervas e até mesmo frutas em determinadas configurações. Esses alimentos são ricos em nutrientes essenciais, como vitaminas, minerais e proteínas. Ao garantir o acesso a alimentos nutritivos, a aquaponia pode ajudar a combater a desnutrição em crianças, mulheres grávidas e lactantes, adolescentes e idosos.
                          Produção local e sustentável: A aquaponia pode ser implementada em áreas urbanas e rurais, permitindo a produção local de alimentos. Isso reduz a dependência de importações e contribui para a segurança alimentar, especialmente em regiões onde a produção tradicional de alimentos enfrenta desafios, como escassez de água ou falta de terra cultivável. A produção local também reduz as emissões de gases de efeito estufa associadas ao transporte de alimentos.
                          Eficiência no uso de recursos: A aquaponia utiliza menos água em comparação com os métodos tradicionais de agricultura, uma vez que a água é recirculada no sistema. Isso é particularmente importante em áreas onde a escassez de água é um problema. Além disso, a aquaponia aproveita os nutrientes dos peixes, reduzindo a necessidade de fertilizantes químicos. Portanto, é um sistema altamente eficiente que utiliza recursos de maneira sustentável.
                          Combinação de proteínas e vegetais: A aquaponia permite a produção de peixes e vegetais em um único sistema integrado. Isso significa que a aquaponia pode fornecer uma fonte de proteína de alta qualidade, proveniente da criação de peixes, além de alimentos vegetais. Essa combinação é importante para atender às necessidades nutricionais das pessoas, especialmente de crianças em idade de crescimento e de grupos vulneráveis, como as mulheres grávidas e lactantes.
                          Escalabilidade e acessibilidade: A aquaponia pode ser implementada em diferentes escalas, desde pequenos sistemas domésticos até projetos comerciais em larga escala. Isso significa que pode ser adaptada às necessidades e recursos de diferentes comunidades e regiões. Além disso, os custos operacionais da aquaponia podem ser relativamente baixos, especialmente quando comparados a outras formas de agricultura intensiva.                        
                          <br></br>
                         
                          <img src={ODS2} alt="logo" style={img_card} />   <img src={ODS12} alt="logo" style={img_card} />   <img src={ODS17} alt="logo" style={img_card} />  
                          
                        
                        
                          <p>
                          <h2>Aumento da população Mundial</h2>
                          </p>
                          A população mundial continua a crescer, embora a taxa de crescimento esteja diminuindo em comparação com décadas anteriores. Em 2021, a população global estimada estava próxima de 7,9 bilhões de pessoas. Projeções indicam que a população mundial pode chegar a cerca de 9,7 bilhões até 2050. É importante ressaltar que o crescimento populacional varia entre diferentes regiões e países, com alguns experimentando taxas de crescimento mais rápidas do que outros.
                         
                         <br></br>
                         <iframe width="496" height="600" src="https://www.youtube.com/embed/pPjyWSLG40Q" title="Crescimento da população mundial nos últimos 250 anos #CrescimentoPopulacional #DemografiaMundial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>   
                                                  
                      </ol>
                      
                    </div>
                   
                  </PostStyle>
                )
              }
    



export default Ods2