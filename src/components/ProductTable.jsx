/* eslint-disable array-callback-return */

import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function ProductTable({
  products,
  filterText,
  showImage,
  handleShowImage,
  category,
}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <button
              className="btn btn-primary btn-sm"
              onClick={handleShowImage}
            >
              {showImage ? "Hide Image" : "Show Image"}
            </button>
          </th>
          <th>Products</th>
          <th>Code</th>
          <th>Available</th>
          <th>Price</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          if (
            product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
          ) {
            return;
          }

          return (
            <tr key={product.id}>
              <td>
                {showImage && (
                  <img
                    src={`/images/${product.image}`}
                    alt={product.name}
                    className="img-fluid"
                    style={{ width: 70, height: 70 }}
                  />
                )}
              </td>
              <td>
                <Link
                  to={`/${category}/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  {product.name}
                </Link>
              </td>
              <td>{product.code}</td>
              <td>{product.availability}</td>
              <td>GHc{product.price}</td>
              <td>
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
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
