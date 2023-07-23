import { createContext, useEffect, useReducer, useState } from "react";
import Reducer from './Reducer';
import axios from "axios";
import { apiDomain } from "../utils/utilsDomain";

//Initial User
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null

}

//Create Context
export const Context = createContext(INITIAL_STATE);

//Provider component
// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Fetch product data from the backend
        axios.get( `${apiDomain}/products`)
          .then((response) => {
            setProducts(response.data);
          })
          .catch((error) => {
            console.error('Error fetching products:', error);
          });
      }, []);

    useEffect(() => {
        // localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    return (
        <Context.Provider value={{ user: state.user, dispatch, products }}>
            {children}
        </Context.Provider>
    )
}