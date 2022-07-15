import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Products from "./components/Products";

export default function App() {
  return (
    <div className="container my-2">
      <Header />
      <main className="row">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </div>
  );
}
