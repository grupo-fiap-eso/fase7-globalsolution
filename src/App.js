import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import Menu from "./components/Menu"
import Ods2 from "./components/Ods2"


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Menu/>, <Home/>]}/>
        <Route path="/home" element={[<Menu/>, <Home/>]}/>
        <Route path="/Ods2" element={[<Menu/>, <Ods2/>]}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
