import { createContext, useEffect, useState } from "react";
import axios from "axios";

export let Data = createContext()

const DataProvider = ({children}) => {

    let [result, setResult] = useState()
    useEffect(() => {
        (async () => {
            let response = await axios('https://fakestoreapi.com/products')
            setResult(response)
        })()
    }, [])

    return (
        <Data.Provider value={{result, setResult}}>
            {children}
        </Data.Provider>
    )
}
export default DataProvider