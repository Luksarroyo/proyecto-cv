import "./App.css";
import FetchingData from "./components/FetchingData/FetchingData";
import Navbar from "./components/Navbar/NavbarPresentational";
import ProductosContainer from "./components/Productos/ProductosContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductosContainer />
      <FetchingData/>
    </div>
  );
}

export default App;
