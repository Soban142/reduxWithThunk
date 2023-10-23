import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setProduct } from "../../redux/action/productsActions";
import Products from "../Product/Products";

const Home = () => {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   async function getData() {
  //     const api = await fetch("https://fakestoreapi.com/products");
  //     const res = await api.json();
  //     console.log(res);
  //     dispatch(setProduct(res));
  //     console.log(products);
  //   }
  //   getData();
  // }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [products]);

  return (
    <div style={{ height: "200vh" }}>
      <div
        style={{
          display: "flex",
          // flexWrap: "wrap",
          padding: "10px",
          // flexDirection: "column",
          // flex: "1",
        }}
      >
        <Products />
      </div>
    </div>
  );
};

export default Home;
