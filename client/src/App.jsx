import {Route, Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Views/Home"
import NavBar from "./Components/Home/NavBar"
import Admin from "./Views/Admin"
import './App.css'

function App() {

  return (
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </div>
  )
}

export default App
