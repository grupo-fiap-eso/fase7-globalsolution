import styled from 'styled-components'

export const DivEtiquetas = styled.div`
  *{
    background-color: #174105;
    padding: 1px 20px; 
    border-radius: 5px;
    width: 100%;
    float: center;
  }
  form{
    width: 50%; padding: 1px; margin: 0 auto;
  }
  fieldset{
    padding: 20px;
  }
  legend{
    color: white;
    font-size: 20px; text-align: center; padding: 0px; 
  }
  label{
    color: white;
    display: flex; flex-direction: column; margin-bottom: 10px
  }
  input{
    background-color: white;
    padding: 5px 20px; border-radius: 5px; border: 100px;
  }
  button{
    background: white;
    border-radius: 2px; width: 12%; 
    margin: 0px 45%;
    text-align: center;
  }
`

export const PostStyle = styled.div`
  .posts .secao-tres h2{
    color: #283618;
    padding-top: 18vh;
    padding-bottom: 5vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .posts .paragrafo-superior{
    padding-left: 20vh;
    padding-bottom: 8vh ;
  }
  .section-box-verde{
    border: 1px solid rgb(40, 54, 24);
    padding: 0;
  }

  *{
    margin: 55px 0px 8px;
    text-align: center;
    .titulo{
        margin: 50px auto 8px;
        text-align: center;
        max-width: 1300px;
    }
    .subtitulo{
      margin: 0px auto 10px;
      text-align: center;
      max-width: 60%;
    }
    .img-container{
      max-width: 900px;
      margin: 40px auto;
      img {
        width: inherit;
      }
    }
  }
  .post-content{
    text-align: justify !important;
    max-width: 900px;
    margin: 40px auto;
    p, ol, li{
      text-indent: 3em;
      text-align: justify;
      margin: 15px auto 0px;
    }
  }

  .fase{
    padding-left: 10px;
    color: white;
    margin-top: 0;
    h2{
      margin-top: 0;
    }
  }

  .fase1{
    background-color: rgb(255, 163, 114);
  }

  .fase2{
    background-color: rgb(255, 108, 62);
  }

  .fase3{
    background-color: rgb(255, 0, 0);
  }

  .fase4{
    background-color: rgb(189, 0, 3);
  }

  .fase5{
    background-color: rgb(127, 0, 0);
  }

  a.fale-conosco{
    color: rgba(40,55,24,0.69);
    text-decoration: none;
  }
`
export const CardsStyle = styled.div`

.impactos{
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #d9ba73;
  min-height: 200px;
  padding: 20px 10px;
}

.impactos-text{
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.impactos-text h3{
  font-size: 3em;
  color: #283618;
}

.impactos-text p{
  max-width: 700px;
  text-align: center;
  color: #283618;
  font-size: 1.1em;
  line-height:1.5em;
}

.impactos .content{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 20px;
  margin: 30px 0;
}

.impactos .content .impactos-cards{
  background: #57533D;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid #57533D;

}

.impactos .content .impactos-cards:hover{
  border: 2px solid #FEFAE0;

}


`

export const StyleSecao = styled.div`

#home{
  position: relative;
      width: 100%;
      minHeight: 100vh;
      display: flex;
      justifyContent: space-between;
      alignItems: center;
      padding: 100px;
}

#home::before{
  content: '';
  position: absolute;
  bottom: 0;
  right: 50px;
  width: 50vw;
  height: 25vw;
  background: #66552D;
  border-top-right-radius: 25vw;
  border-top-left-radius: 25vw;
}

#home .content{
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 650px;
  z-index: 10;
}

#home .content h2{
  position: relative;
  font-size: 2em;
  color: #283618;
}

#home .content p{
  position: relative;
  color: #000;
  font-size: 1.2em;
  line-height: 1.6em;
}

.link{
  position: relative;
  display: inline-block;
  font-size: 1.2em;
  max-width: 100px;
  background: #66552D;
  color: #FEFAE0;
  text-align: center;
  border-radius: 10px;
  padding: 15px 18px;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-decoration: none;
  margin-top: 10px;
}

.imagem{
  position: absolute;
  bottom: 0;
  right: 100px;
  max-height: 90vh;

}
`

export const DadosDaFomeStyle = styled.div`
  *{
    .titulo{
      margin: 50px auto 8px;
      text-align: center;
      max-width: 1300px;
      font-size: 40px;
      width: 100%;
    }

    .img-container{
      max-width: 900px;
      margin: 0 auto;
      img {
        margin-top: 30px;
        width: inherit;
      }
    }

    .card {
      margin: 15px 0 30px;
      margin: 15px 0px 30px;
      width: 100%;
      padding: 15px;
    }
  }

  .post-content{
    text-align: justify !important;
    max-width: 900px;
    margin: 40px auto;
    font-size: 16px;
  }

  .section-colapsible-content{
    img{
      width: 150px;
      float: left;
    }
    img.prato{
      margin: 0 50px 50px 0px;
    }
    img.odm{
      width: 100%;
      margin: 0px 0px 25px 0px;
    }
    img.brasil{
      margin: 0px 50px 200px 0px;
    }
  }
`;

export const FaleConoscoStyle = styled.h1`
  *{
    font-size: 20px;
  }

  p{
    margin-bottom: 1px;
  }

  form{
    display: flex;
    max-width: 600px;
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    border: 1px solid #606C38;
    margin: 25px auto;
    padding: 50px 42px;
    border-radius: 20px;
  }

  .link{
    position: relative;
    display: inline-block;
    font-size: 1.2em;
    max-width: 100px;
    background: #66552D;
    color: #FEFAE0;
    text-align: center;
    border-radius: 10px;
    padding: 15px 18px;
    font-weight: 400;
    letter-spacing: 0.05em;
    text-decoration: none;
    margin-top: 10px;
  }

  .input-container{
    margin: 0px 0 15px 0;
    min-width: 90%;
  }

  input[type=text], input[type=number], textarea{
    width: 100%;
    outline: none;
  }

  .required-input {
    border: 1px solid red;
  }

  p.alerta-required{
    color: red;
    font-size: 12px; !important;
  }

  .hide{
    display: none;
  }

  input[type=submit]{
    padding: 15px 20px;
    font-size: 16px;
    border: 1px solid rgb(96, 108, 56);
    border-radius: 10px;
    float: right;
  }

  .titulo{
    margin: 15px auto;
    width: fit-content;
    font-size: 40px;
  }
  .subtitulo{
    max-width: 500px;
    margin: auto;
    text-align: center;
    font-size: 16px;
  }
`;
