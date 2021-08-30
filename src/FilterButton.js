import React from "react";

export default function FilterButton({ setFilter, name, isPressed }) {
  return (
    <button
      type="button"
      className="btn btn--toggle"
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
      <span>{name}</span>
    </button>
  );
}
