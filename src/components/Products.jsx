import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { getProducts } from "../services/productsApi";
import ProductTable from "./ProductTable";
import FilterSearch from "./FilterSearch";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts("bluetooth")
      .then((response) => setProducts(response))
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error) throw error;
  if (loading) return <Spinner />;

  return (
    <section className="col-sm-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Product Lists</h4>
        </div>
        <div className="card-body">
          <FilterSearch />
          <ProductTable products={products} />
        </div>
      </div>
    </section>
  );
}
