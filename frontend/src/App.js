import data from "./data";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <div >
      <header>
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products" >
          {
            data.products.map((product) => {
              return (
                <div className="product" key={product.slug}>
                  <a href={`/product/${product.slug}`}>
                    <img src={product.image} alt={product.name} />
                  </a>
                  <div className="product-info">
                    <a href={`/product/${product.slug}`}>
                      <p>{product.name} </p>
                    </a>
                    <p><strong> ${product.price}</strong> </p>
                    <button>Add to cart</button>
                  </div>
                </div>
              )
            })}
        </div>
      </main>
      </div>
      </Router>
  );
}

export default App;
