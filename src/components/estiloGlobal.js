import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  *{
    font-family: 'Lora', serif;
  }

  body{
    background-color: #FEFAE0;
  }

  .navbar{
    background-color: #283618;

  }

  nav{
    min-height: 65px;
    align-items: center;
    padding: 15px 100px;
    font-size: 12px;
  }

  .primeira-secao{
    margin-top: 1%;
    background-color: #3b8d184d;
    box-sizing: border-box;
    display: block;
  }

  .p-md-5{
    padding: 3rem;
  }

  .rounded{
    border-radius: 20px;
  }

  .p-4{
    padding: 1.5rem;
  }
  .mb-4{
    margin-bottom: 1.5rem;
  }

  .link1{
    text-decoration: none;
    color: #183909;
    font-weight:400;
  }

  .segunda-secao{
    margin-top: 100px;
    box-sizing: border-box;
  }

  .terceira-secao{
    margin-top: 90px;
  }

  button {
    padding: 7px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .home-artigos{
    padding: 0;
    position: relative;
  }

  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: auto;
  }

  .card {
    border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    padding: 30px;
    margin: 20px;
    width: 300px;
    transition: all 0.3s ease-out;
  }

  .card:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
   
  .card p {
    color: #a3a5ae;
    font-size: 16px;
  }


  .green {
    border-left: 3px solid #3bb54a;
  }


  div .comunidade{
    margin-top: 5%;
    background-color: #dfecf84d;
    border-radius: 20px;
    padding-bottom: 60px;
  }


  div .comentarios{
    width: 70%;
    padding: 20px;
    background-color: #fffffff9;
    border: 2px solid #aaabab57;
    margin-left: 16%;
  }


  footer{
    width: 100%;
    bottom: 0;
    position: relative;
    background-color: #283618;
    color: #fff;
    padding: 20px 0;
    font-size: 13px;
    line-height: 20px;
  }

  footer .row{
    width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }

  footer .col{
    flex-basis: 25%;
    padding: 10px;
  }

  footer .logo-footer{
    width: 40%;
    margin-bottom: 30px;
  }

  footer .col h4{
    width: fit-content;
    margin-bottom: 10px;
    position: relative;
  }

  footer ul li{
    list-style: none;
    margin-bottom: 12px;
  }

  footer ul li a{
    text-decoration: none;
    color: #fff;
  }

  .icons-footer i{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    font-size: 10px;
    color: #a3a5ae;
    background: #fff;
    margin-left: 10px;
  }
`
export default globalStyle

