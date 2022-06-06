import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Products/Product/Product";
import Products from "./components/Products/Products";
import { AuthContext } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [isAuth]=useContext(AuthContext);
  return (
    <div className="App">
      {
        isAuth?(  <Login />):( 
        <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Products />} />
          <Route
            path="/"
            element={
             
                <Product />
          
            }
          />
        </Routes>
      </>)
      }
    
     
    </div>
  );
}

export default App;
