
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductosContainer from "./components/Productos/ProductosContainer"
import Navbar from "./components/Navbar/NavbarPresentational";
import Footer from "./components/Footer/Footer";
import HomeContainer from "./components/Home/HomeContainer";
import Form from "./components/Form/Form";
import CartContainer from "./components/cart/CartContainer";
import Usuario from "./components/Usuario/Usuario";
import DetalleProductoContainer from "./components/DetalleProducto/DetalleProductoContainer";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element= {<Navbar/>}>
            <Route element={<Footer/>}>
              <Route path="/" element= {<HomeContainer/>}/>
              <Route path="/categoria/:categoriaNombre" element= {<ProductosContainer/>}/>
              <Route path="/detalleProducto/:id" element= {<DetalleProductoContainer/>}/>
              <Route path="/cart" element= {<CartContainer/>}/>
              <Route path="/login" element= {<Form/>}/>
              <Route path="/login/crearUsuario" element= {<Usuario/>}/>
              <Route path="*" element={<h1>Ruta no encontrada</h1>}/>
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
