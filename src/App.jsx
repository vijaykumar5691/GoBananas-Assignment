import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./products/Products";
import Navbar from "./navbar/Navbar";
import About from "./About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
