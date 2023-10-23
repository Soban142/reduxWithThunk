import axios from "axios";
import ActionTypes from "../constants/actionTypes.js";

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get("https://fakestoreapi.com/products");

  console.log(res);
  dispatch({
    type: ActionTypes.FETCH_PRODUCTS,
    payload: res.data,
  });
};

export const fetchProduct = (id) => async (dispatch) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);

  console.log(res);
  dispatch({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: res.data,
  });
};

export const setProduct = (products) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: products,
  };
};

export const selectProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
