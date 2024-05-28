import Layaut from "./components/layaut";
import Navbar from "./components/navbar";
import {Navigate, Route, Routes} from "react-router-dom";
import Inicio from "./pages/inicio";
import Populares from "./pages/populares";
import Perfil from "./pages/perfil";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="bg-secundary min-h-screen">
        <Navbar></Navbar>
        <Layaut>
          
            <Routes>
              <Route path='/' element={<Inicio></Inicio>}></Route>
              <Route path='/populares' element={<Populares></Populares>}></Route>
              <Route path='/perfil' element={<Perfil></Perfil>}></Route>
              <Route path='/*' element={<Navigate to="/"></Navigate>}></Route>
            </Routes>
         </Layaut>
        <Footer/>
      </div>

    </>
  )
}

export default App
