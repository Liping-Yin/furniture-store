import React, { useState } from "react";
import ProductCard from "./ProductCard";
import FilterButton from "./FilterButton";
export default function Products() {
  const [filter, setFilter] = useState("ALL");
  const FILTER_NAMES = ["ALL", "SOFA", "LAMP LIGHT", "CHAIR"];

  return (
    <section className="section section--products">
      <div className="section__header container">
        <div className="section__title">PRODUCTS</div>
        <div className="section__filter">
          <p className="filter-title"> POPULAR PRODUCTS: </p>
          {FILTER_NAMES.map((name) => (
            <FilterButton
              key={name}
              isPressed={name === filter ? true : false}
              name={name}
              setFilter={(name) => setFilter(name)}
            />
          ))}
        </div>
      </div>

      <div className="products container">
        <ProductCard
          imgUrl="/images/yellow_chair.png"
          alt="yellow chair"
          description={{
            title: "WOMAN CHAIR(HSD 3356)",
            intro:
              " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, tempore.",
            originPrice: 99,
            currentPrice: 80,
          }}
        />
        <ProductCard
          imgUrl="/images/blue_chair.png"
          alt="blue chair"
          description={{
            title: "WOMAN CHAIR(HSD 3356)",
            intro:
              " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, tempore.",
            originPrice: 99,
            currentPrice: 80,
          }}
        />
        <ProductCard
          imgUrl="/images/green_chair.png"
          alt="green chair"
          description={{
            title: "WOMAN CHAIR(HSD 3356)",
            intro:
              " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, tempore.",
            originPrice: 99,
            currentPrice: 80,
          }}
        />
      </div>
    </section>
  );
}
