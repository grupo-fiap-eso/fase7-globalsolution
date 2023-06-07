import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import Menu from "./components/Menu"
import Dados3 from './components/dados3'
import Solucao from './components/solucao'


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Menu/>, <Home/>]}/>
        <Route path="/inseguranca_alimentar" element={[<Menu/>, <Dados3/>]}/>
        <Route path="/nossa_solucao" element={[<Menu/>, <Solucao/>]}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
