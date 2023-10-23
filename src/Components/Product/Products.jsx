import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.allProducts.products);

  console.log(products);
  const listOfProducts = products.map((product) => {
    return (
      <div>
        <Link to={`/product/${product.id}`}>
          <div
            class="card"
            style={{ width: "18rem", height: "10%" }}
            key={product.id}
          >
            <img src={product.image} class="card-img-top" alt="Product image" />
            <div class="card-body">
              <h5 class="card-title">{product.title}</h5>
              <p class="card-text">{product.description}</p>

              <a href="#" class="btn btn-primary">
                See Details
              </a>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <div>{listOfProducts}</div>;
};

export default Products;
