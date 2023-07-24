import React, { createContext, useEffect, useReducer, useState } from "react";
import Reducer from './Reducer';
import axios from "axios";
import { apiDomain } from "../utils/utilsDomain";

// Initial User
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null
}

// Create Context
export const Context = createContext(INITIAL_STATE);

// Provider component
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the backend
    axios.get(`${apiDomain}/products`)
      .then((response) => {
        // Assuming you have five image URLs corresponding to the products
        const imageUrls = [
          'https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1274-297x223.jpg',
          'https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1270-297x223.jpg',
          'https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1268-297x223.jpg',
          'https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1275-297x223.jpg',
          'https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-297x223.jpg',
          'https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1273-297x223.jpg',
          'https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1271-297x223.jpg',
          'https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1268-297x223.jpg',
          'https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1271-297x223.jpg'

        ];

        // Add the ImageURL property to each product object
        const productsWithImageURL = response.data.map((product, index) => ({
          ...product,
          ImageURL: imageUrls[index], // Set the ImageURL based on the index
        }));

        setProducts(productsWithImageURL);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    // localStorage.setItem("user", JSON.stringify(state.user))
  }, [state.user]);

  return (
    <Context.Provider value={{ user: state.user, dispatch, products }}>
      {children}
    </Context.Provider>
  );
}
