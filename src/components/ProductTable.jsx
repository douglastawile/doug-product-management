import React from "react";

export default function ProductTable({ products }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <button className="btn btn-primary btn-sm">Show Image</button>
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
          return (
            <tr key={product.id}>
              <td>
                <img
                  src={`/images/${product.image}`}
                  alt={product.name}
                  className="img-fluid"
                  style={{ width: 70, height: 70 }}
                />
              </td>
              <td>{product.name}</td>
              <td>{product.code}</td>
              <td>{product.availability}</td>
              <td>{product.price}</td>
              <td>{product.rating}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
