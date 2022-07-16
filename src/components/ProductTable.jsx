/* eslint-disable array-callback-return */

import React from "react";
import { Link } from "react-router-dom";

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
              <td>{product.price}</td>
              <td>
                <i className="bi bi-star-fill me-1 text-warning"></i>
                {product.rating}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
