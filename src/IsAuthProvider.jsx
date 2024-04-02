import { createContext, useState } from "react";

export let isAuth = createContext()

const IsAuthProvider = ({children}) => {

    let [user, setUser] = useState(false)

    return (
        <isAuth.Provider value={{user, setUser}}>
            {children}
        </isAuth.Provider>
    )
}

export default IsAuthProvider