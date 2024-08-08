import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Category from "./Pages/Category";
import HeaderAndFooter from "./Components/HeaderAndFooter";
import "./stylesheets/main.css";

export type Paths = "/" | "products" | "categories";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HeaderAndFooter />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productName" element={<Product />} />
          <Route path="/categories" element={<Category />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
