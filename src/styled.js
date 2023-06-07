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
export const PostStyle = styled.div`
  div .terceira-secao{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
`