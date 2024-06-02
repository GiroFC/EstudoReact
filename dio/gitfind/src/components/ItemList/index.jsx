import React from "react";
import "./styles.css";

export default function ItemList({ title, description }) {
  return (
    <div>
      <div className="itemList">
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      <hr />
    </div>
  );
}
