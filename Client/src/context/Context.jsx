import { createContext, useEffect, useReducer } from "react";
import Reducer from './Reducer';

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
    useEffect(() => {
        // localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    return (
        <Context.Provider value={{ user: state.user, dispatch }}>
            {children}
        </Context.Provider>
    )
}