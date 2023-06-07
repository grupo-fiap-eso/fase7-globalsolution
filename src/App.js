import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home"
import Menu from "./components/Menu"
import PostPage from './components/PostPage'
import Dados from './components/Dados'
import Solucao from './components/Solucao'
import DadosDaFome from './components/DadosDaFome'
import FaleConosco from './components/FaleConosco'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        
        <Route path="/home" element={[<Menu/>, <Home/>]}/>
        <Route path="/posts/:id" element={[<Menu/>, <PostPage/>]}/>
        <Route path="/dados-da-fome" element={[<Menu/>, <DadosDaFome/>]}/>
        <Route path="/inseguranca_alimentar" element={[<Menu/>, <Dados/>]}/>
        <Route path="/nossa_solucao" element={[<Menu/>, <Solucao/>]}/>
        <Route path="/fale-conosco" element={[<Menu/>, <FaleConosco/>]}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
