import "./App.css";
import Navbar from "./components/Navbar/NavbarPresentational";
import ProductosContainer from "./components/Productos/ProductosContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductosContainer />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
