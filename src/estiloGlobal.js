import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lora', serif;
  }

  body{
    background-color: #3b8d1814;
  }
  nav{
    min-height: 65px;
    align-items: center;
    padding: 15px 100px;
    font-size: 12px;
  }

  .navbar{
    background-color: #3b8d18 
  }

  footer{
    width: 100%;
    bottom: 0;
    position: relative;
    background: linear-gradient(to right, #1d5207, #091b01);
    color: #fff;
    padding: 100px 0 30px;
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
    margin-bottom: 40px;
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
