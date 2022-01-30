import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Product from "./pages/Product";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
