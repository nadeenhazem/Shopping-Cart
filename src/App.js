import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Store from "./Pages/Store";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";
import "./App.css";
import CartProvider from "./context/CartContext";
function App() {
  return (
    <CartProvider>
      <NavBar />
      <Container className="mb4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </CartProvider>
  );
}

export default App;
