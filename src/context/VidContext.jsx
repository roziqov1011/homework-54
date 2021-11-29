import { createContext, useState } from "react";
const VidContext = createContext();
function VidProvider( { children } ){
    const [movies, setMovies] = useState([])
    return(
        <>
            <VidContext.Provider value={{movies, setMovies}}>{children}</VidContext.Provider>
        </>
    )
}
export {
    VidProvider,
    VidContext
}