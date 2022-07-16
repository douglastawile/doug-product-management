import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../services/useFetch";
import Spinner from "./Spinner";
import ProductTable from "./ProductTable";
import FilterSearch from "./FilterSearch";
import PageNotFound from "./PageNotFound";

export default function Products() {
  const [filterText, setFilterText] = useState("");
  const [showImage, setShowImage] = useState(false);
  const { category } = useParams();

  const {
    data: products,
    error,
    loading,
  } = useFetch("products?category=" + category);

  function handleShowImage() {
    setShowImage((showImage) => !showImage);
  }

  if (error) throw error;
  if (loading) return <Spinner />;
  if (products.length === 0) return <PageNotFound />;

  return (
    <section className="col-sm-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Product Lists</h4>
        </div>
        <div className="card-body">
          <FilterSearch filterText={filterText} setFilterText={setFilterText} />
          <ProductTable
            products={products}
            filterText={filterText}
            showImage={showImage}
            handleShowImage={handleShowImage}
            category={category}
          />
        </div>
      </div>
    </section>
  );
}
