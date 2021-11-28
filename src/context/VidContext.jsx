import { createContext, useState } from "react";
const VidContext = createContext();
function VidProvider( { children } ){
    const [movie, setMovie] = useState([])
    return(
        <>
            <VidContext.Provider value={{movie, setMovie}}>{children}</VidContext.Provider>
        </>
    )
}
export {
    VidProvider,
    VidContext
}