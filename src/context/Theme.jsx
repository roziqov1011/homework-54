import { createContext, useState } from "react";
const Theme = createContext();
function Provider( { children } ){
    const [theme, setTheme] = useState([])
    return(
        <>
            <Theme.Provider value={{theme, setTheme}}>{children}</Theme.Provider>
        </>
    )
}
export {
    Provider,
    Theme
}