import ProductCard from "./ProductCard";
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="navigation">
          <div className="container">
            <div className="logo">
              <span>F</span>urniture
            </div>
            <nav className="nav nav--desktop">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact&nbsp;us</a>
                </li>
                <li>
                  <a href="/" className="btn btn--primary" role="button">
                    Log&nbsp;in
                  </a>
                </li>
              </ul>
            </nav>
            <div className="nav nav--mobile">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path
                  d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"
                  fill="#fdfcfc"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="hero__left">
            <h1 className="hero__title">Lorem ipsum dolor sit amet. </h1>
            <p>
              <span className="hero__slogan">
                BEAUTY IS WHATEVER BRINGS PERFECT
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              debitis!
            </p>
            <div className="hero__links">
              <a href="/" className="btn btn--primary" role="button">
                BUY NOW
              </a>
              <a href="/" className="btn btn--secondary" role="button">
                READ MORE
              </a>
            </div>
          </div>
          <div className="hero__right">
            <img
              className="hero__pic"
              src="/images/blue_chair.png"
              alt="chair"
            />
          </div>
        </div>
      </header>
      <main>
        <section className="products-section ">
          <div className="section__header container">
            <div className="section__title">PRODUCTS</div>
            <div className="section__filter">
           <select name="products" id="product-selection">
             <option value="popular">POPULAR</option></select>t
            </div>
          </div>

          <div className="products container">
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
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
