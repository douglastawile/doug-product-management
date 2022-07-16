import React from "react";

const getStar = (value) => {
  switch (value) {
    case 0:
      return <i className={"bi bi-star me-2 text-warning"}></i>;
    case 50:
      return <i className="bi bi-star-half me-2 text-warning"></i>;
    case 100:
      return <i className="bi bi-star-fill me-2 text-warning"></i>;
    default:
      return;
  }
};

const getStars = (value) => {
  switch (parseFloat(value)) {
    case 0.0:
      return [0, 0, 0, 0, 0];
    case 0.5:
      return [50, 0, 0, 0, 0];
    case 1.0:
      return [100, 0, 0, 0, 0];
    case 1.5:
      return [100, 50, 0, 0, 0];
    case 2.0:
      return [100, 100, 0, 0, 0];
    case 2.5:
      return [100, 100, 50, 0, 0];
    case 3.0:
      return [100, 100, 100, 0, 0];
    case 3.5:
      return [100, 100, 100, 50, 0];
    case 4.0:
      return [100, 100, 100, 100, 0];
    case 4.5:
      return [100, 100, 100, 100, 50];
    case 5.0:
      return [100, 100, 100, 100, 100];
    default:
      return;
  }
};

export default function StarRating({ value }) {
  return (
    <>
      {getStars(value).map((value) => {
        return <span key={Math.random()}>{getStar(value)}</span>;
      })}
    </>
  );
}
