import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home"
import Menu from "./components/Menu"
import PostPage from './components/PostPage'
import Dados from './components/Dados'
import Solucao from './components/Solucao'
import DadosDaFome from './components/DadosDaFome'
import FaleConosco from './components/FaleConosco'
import Footer from './components/Footer'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Menu/>, <Home/>, <Footer/>]}/>
        <Route path="/home" element={[<Menu/>, <Home/>, <Footer/>]}/>
        <Route path="/posts/:id" element={[<Menu/>, <PostPage/>, <Footer/>]}/>
        <Route path="/dados-da-fome" element={[<Menu/>, <DadosDaFome/>, <Footer/>]}/>
        <Route path="/inseguranca_alimentar" element={[<Menu/>, <Dados/>, <Footer/>]}/>
        <Route path="/nossa_solucao" element={[<Menu/>, <Solucao/>, <Footer/>]}/>
        <Route path="/fale-conosco" element={[<Menu/>, <FaleConosco/>, <Footer/>]}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
