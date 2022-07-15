import React from "react";

export default function FilterSearch() {
  return (
    <form>
      <label htmlFor="filter" className="me-2 my-2">
        Filter by:
      </label>
      <input type="text" id="filter" name="filter" placeholder="Search..." />
    </form>
  );
}
