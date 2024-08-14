import styles from "./App.module.css";
import Navbar from "./components/Navbar/NavbarPresentational";
import ProductosContainer from "./components/Productos/ProductosContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomeContainer from "./components/Home/HomeContainer";
import CartContainer from "./components/Cart/CartContainer";
import Usuario from "./components/Usuario/Usuario";
import DetalleProductoContainer from "./components/DetalleProducto/DetalleProductoContainer";
// import NavbarContainer from "./components/Navbar/NavbarContainer";
import CartContextProvider from "./Context/CartContext";
import FormCheckOutContainer from "./components/FormCheckOut/FormCheckOutContainer";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className={styles.appContainer}>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar /> {/* Mover Navbar fuera de Routes */}
          <div className={styles.routeContainer}>
            <Routes>
              <Route path="/" element={<HomeContainer />} />
              <Route
                path="/categoria/:categoriaNombre"
                element={<ProductosContainer />}
              />
              <Route
                path="/detalleProducto/:id"
                element={<DetalleProductoContainer />}
              />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/checkout" element={<FormCheckOutContainer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login/crearUsuario" element={<Usuario />} />
              <Route path="*" element={<h1>Ruta no encontrada</h1>} />
            </Routes>
          </div>
          <Footer /> {/* Mover Footer fuera de Routes */}
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
