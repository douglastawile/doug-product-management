import React from "react";

export default function Spinner() {
  return (
    <div className="text-center my-5">
      <div
        className="spinner-border"
        style={{ width: "6rem", height: "6rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
