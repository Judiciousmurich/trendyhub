import React, { createContext, useEffect, useReducer, useState } from "react";
import Reducer from './Reducer';
import axios from "axios";
import { apiDomain } from "../utils/utilsDomain";


// Initial User and CartItems
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
}

// Create Context
export const Context = createContext({
  ...INITIAL_STATE,
});

// Provider component
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([])


  const getCartItems = async () => {
    try {
      const response = await axios.get(`${apiDomain}/cart`);
      dispatch({ type: "SET_CART_ITEMS", payload: response.data });
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    // Fetch product data from the backend
    axios.get(`${apiDomain}/products`)
      .then((response) => {
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

        const productsWithImageURL = response.data.map((product, index) => ({
          ...product,
          ImageURL: imageUrls[index], 
        }));

        setProducts(productsWithImageURL);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);
  // Fetch cart items
  useEffect(() => {
    getCartItems();
  }, []);


  const handleAddToCart = async (product_id) => {
    try {
     
      await axios.post(`${apiDomain}/cart`, { product_id });

      getCartItems();

    
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  
  useEffect(() => {
  }, [state.user]);

  return (
    <Context.Provider value={{ user: state.user, cartItems, dispatch, products, handleAddToCart, setCartItems }}>
      {children}
    </Context.Provider>
  );
}
