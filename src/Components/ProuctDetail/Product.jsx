import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchProduct,
  removeSelectedProduct,
  selectProduct,
} from "../../redux/action/productsActions";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const { productId } = useParams();
  // const numberedProduct = parseInt(productId);
  // console.log(typeof numberedProduct);
  const product = useSelector((state) => state.product);
  console.log(product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct(productId));
    } else {
      return <h1>"Product not found"</h1>;
    }

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.values(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={product.image} />
              </div>
              <div className="column rp">
                <h1>{product.title}</h1>
                <h2>
                  <a className="ui teal tag label">${product.price}</a>
                </h2>
                <h3 className="ui brown block header">{product.category}</h3>
                <p>{product.description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
