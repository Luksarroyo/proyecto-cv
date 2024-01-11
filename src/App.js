import "./App.css";
import Navbar from "./components/Navbar/NavbarPresentational";
import ProductosContainer from "./components/Productos/ProductosContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductosContainer />
    </div>
  );
}

export default App;
