import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../services/useFetch";
import Spinner from "./Spinner";

export default function ProductDetail() {
  const { id } = useParams();
  const { data: product, error, loading } = useFetch(`/products/${id}`);

  if (loading) return <Spinner />;
  if (error) throw error;

  return (
    <setion className="col-sm-12">
      <article className="row my-3">
        <div className="col-sm-7">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Product: {product.name}</h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <p className="card-text">{product.description}</p>
              <p className="card-text">{product.code}</p>
              <p className="card-text">{product.availability}</p>
              <p className="card-text">{product.price}</p>
              <p className="card-text">{product.rating}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <img
            src={`/images/${product.image}`}
            alt={product.category}
            className="img-fluid my-5"
          />
        </div>
      </article>
    </setion>
  );
}
