import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home"
import Menu from "./components/Menu"
import Ods2 from "./components/Ods2"
import PostPage from './components/PostPage'
import InsegurancaAlimentar from './components/InsegurancaAlimentar'
import Solucao from './components/Solucao'
import DadosDaFome from './components/DadosDaFome'
import FaleConosco from './components/FaleConosco'
import Footer from './components/Footer'
import VideoPitch from './components/Pitch'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Menu/>, <Home/>, <Footer/>]}/>
        <Route path="/home" element={[<Menu/>, <Home/>, <Footer/>]}/>
        <Route path="/posts/:id" element={[<Menu/>, <PostPage/>, <Footer/>]}/>
        <Route path="/dados-da-fome" element={[<Menu/>, <DadosDaFome/>, <Footer/>]}/>
        <Route path="/inseguranca_alimentar" element={[<Menu/>, <InsegurancaAlimentar/>, <Footer/>]}/>
        <Route path="/nossa_solucao" element={[<Menu/>, <Solucao/>, <Footer/>]}/>
        <Route path="/fale-conosco" element={[<Menu/>, <FaleConosco/>, <Footer/>]}/>
        <Route path="/Ods2" element={[<Menu/>, <Ods2/>, <Footer/>]}/>
        <Route path="/pitch" element={[<Menu/>, <VideoPitch/>]}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
