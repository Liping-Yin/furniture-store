import React from "react";

export default function ProductCard({ imgUrl, alt = "", description }) {
  const { title, intro, originPrice, currentPrice } = description;
  return (
    <article className="product container">
      <img className="product__pic" src={imgUrl} alt={alt} />
      <h3 className="product__title">{title} </h3>
      <p className="product__introduction">{intro}</p>
      <div className="product__prices ">
        <p className="product__price--current">${currentPrice}</p>
        <p className="product__price--origin">${originPrice}</p>
      </div>
    </article>
  );
}
