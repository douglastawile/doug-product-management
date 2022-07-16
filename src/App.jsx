import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";

export default function App() {
  return (
    <div className="container my-2">
      <Header />
      <main className="row">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:category" element={<Products />} />
          <Route path="/:category/:id" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}
