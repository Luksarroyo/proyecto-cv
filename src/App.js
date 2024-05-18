
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductosContainer from "./components/Productos/ProductosContainer"
import Navbar from "./components/Navbar/NavbarPresentational";
import Footer from "./components/Footer/Footer";
import HomeContainer from "./components/Home/HomeContainer";
import Home from "./components/Home/Home";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element= {<Navbar/>}>
            <Route element={<Footer/>}>
              <Route path="/" element= {<HomeContainer/>}/>
              <Route path="/categoria/:name" element= {<ProductosContainer/>}/>
              {/* <Route path="/productos" element={<ProductosContainer/>}/> */}

              <Route path="/productos"/>

              <Route path="*" element={<h1>Ruta no encontrada</h1>}/>
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
