import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import Menu from "./components/Menu"


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Menu/>, <Home/>]}/>
        <Route path="/home" element={[<Menu/>, <Home/>]}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
