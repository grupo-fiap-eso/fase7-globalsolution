import styled from 'styled-components'

export const Exemplo = styled.div`
  *{
    background-color: #174105;
    padding: 1px 20px; 
    border-radius: 5px;
    width: 100%;
    float: center;
  }
`

export const Pagina2Style = styled.h1`
  *{
    .titulo{
      margin: 50px auto 8px;
      text-align: center;
      max-width: 1300px;
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
    padding: 15px 30px;
    font-size: 16px;
    border: 1px solid rgb(96, 108, 56);
    background-color: rgb(96 108 56 / 13%);
    border-radius: 10px;
    float: right;
  }

  .titulo{
    margin: 15px auto;
    width: fit-content;
    font-size: 40px;
  }
  .subtitulo{
    max-width: 900px;
    margin: auto;
    text-align: center;
    font-size: 16px;
  }
`;
