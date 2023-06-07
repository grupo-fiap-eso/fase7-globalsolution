import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import Menu from "./components/Menu"
import Pagina2 from './components/Pagina2'
import FaleConosco from './components/FaleConosco'


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Menu/>, <Home/>]}/>
        <Route path="/home" element={[<Menu/>, <Home/>]}/>
        <Route path="/fale-conosco" element={[<Menu/>, <FaleConosco/>]}/>
        <Route path="/pagina2" element={[<Menu/>, <Pagina2/>]}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
