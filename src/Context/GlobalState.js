import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";


//initial State

const initialState = {
    transactions:[]
}



//Create Global Context

export const GlobalContext = createContext(initialState)

//Provider Component

export const GlobalProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(AppReducer, initialState)

    //Actions

    const addTransaction = transaction => {
        dispatch({
            type: "add",
            payload: transaction
        })
    }

    const deleteTransaction = (id) => {dispatch({type: "delete", payload: id})}

    return <GlobalContext.Provider value={{ 
        transactions: state.transactions,
        deleteTransaction,
        addTransaction }}>
        {children}
    </GlobalContext.Provider>
}