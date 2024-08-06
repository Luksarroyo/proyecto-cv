import styles from "./App.module.css";
import Navbar from "./components/Navbar/NavbarPresentational";
import ProductosContainer from "./components/Productos/ProductosContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomeContainer from "./components/Home/HomeContainer";
import Form from "./components/Form/Form";
import CartContainer from "./components/Cart/CartContainer";
import Usuario from "./components/Usuario/Usuario";
import DetalleProductoContainer from "./components/DetalleProducto/DetalleProductoContainer";
// import NavbarContainer from "./components/Navbar/NavbarContainer";
import CartContextProvider from "./Context/CartContext";
import FormCheckOutContainer from "./components/FormCheckOut/FormCheckOutContainer";
function App() {
  return (
    // Como es tu archivo principal, tenes que envolver a la aplicacion en un clase con tus estilos CSS basicos para que la app se vea bien
    <div className={styles.appContainer}>
      {/* aca definis el layout principal de tu aplicación, todo estara contenido dentro de esta div */}
      <BrowserRouter>
        <CartContextProvider>
          {/* <Navbar /> */}
          <Routes>
            <Route element={<Navbar />}>
              <Route element={<Footer />}>
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
                <Route path="/login" element={<Form />} />
                {/* <Route path="/cart" element= {<NavbarContainer/>}/> */}
                <Route path="/login/crearUsuario" element={<Usuario />} />
                <Route path="*" element={<h1>Ruta no encontrada</h1>} />
              </Route>
            </Route>
          </Routes>
          {/* <Footer /> */}
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
