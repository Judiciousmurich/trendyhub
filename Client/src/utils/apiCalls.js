import axios from "axios";
import { apiDomain } from "./utilsDomain";


// PRODUCTS


// CREATE
export const createProduct = async (product) => {
  try {
    // axios request
    const { data } = await axios.post(apiDomain + "/products", product);
    return data;
  } catch (error) {
    console.error(error);
  }
};

// UPDATE
export const updateProduct = async (updatedProduct, productID) => {
  try {
    // axios request
    const { data } = await axios.put(
      apiDomain + "/products/" + productID,
      updatedProduct
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

//DELETE

export const deleteProduct = async (productID) => {
  try {
    const { data } = await axios.delete(apiDomain + "/products/" + productID);
    return data;
  } catch (error) {
    console.error(error);
  }
};

//GETPRODUCTBYID
export const getProductById = async (productID) => {
  try {
    const { data } = await axios.get(apiDomain + "/products/" + productID);
    return data;
  } catch (error) {
    console.error(error);
  }
};

//GETPRODUCT
export const getProducts = async () => {
  try {
    const { data } = await axios.get(apiDomain + "/products");
    return data;
  } catch (error) {
    console.error(error);
  }
};


