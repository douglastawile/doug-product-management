import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../services/useFetch";
import PageNotFound from "./PageNotFound";
import Spinner from "./Spinner";
import StarRating from "./StarRating";

export default function ProductDetail() {
  const { id } = useParams();
  const { data: product, error, loading } = useFetch(`products/${id}`);

  if (loading) return <Spinner />;
  if (error) throw error;
  if (product.length === 0) return <PageNotFound />;

  return (
    <section className="col-sm-12">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Product: {product.name}</h3>
        </div>
        <article className="row my-3">
          <div className="col-sm-7">
            <div className="card-body">
              <h4 className="card-title">
                <strong>Name:</strong> {product.name}
              </h4>
              <p className="card-text">
                <strong>Description:</strong> {product.description}
              </p>
              <p className="card-text">
                <strong>Code:</strong> {product.code}
              </p>
              <p className="card-text">
                <strong>Available:</strong> {product.availability}
              </p>
              <p className="card-text">
                <strong>Price:</strong> GHc{product.price}
              </p>
              <p className="card-text">
                Rating:
                {product.rating === 0.0 ? (
                  <StarRating value={0.0} />
                ) : product.rating === 0.5 ? (
                  <StarRating value={0.5} />
                ) : product.rating === 1.0 ? (
                  <StarRating value={1.0} />
                ) : product.rating === 1.5 ? (
                  <StarRating value={1.5} />
                ) : product.rating === 2.0 ? (
                  <StarRating value={2.0} />
                ) : product.rating === 2.5 ? (
                  <StarRating value={2.5} />
                ) : product.rating === 3.0 ? (
                  <StarRating value={3.0} />
                ) : product.rating === 3.5 ? (
                  <StarRating value={3.5} />
                ) : product.rating === 4.0 ? (
                  <StarRating value={4.0} />
                ) : product.rating === 4.5 ? (
                  <StarRating value={4.5} />
                ) : product.rating === 5.0 ? (
                  <StarRating value={5.0} />
                ) : null}
                {product.rating}
              </p>
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
      </div>
    </section>
  );
}
