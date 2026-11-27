import { useContext } from "react"; 
import { SpotContext } from "../../context/spotcontext";

export function useSpotContext() {
    const context = useContext(SpotContext)

    if(!context) {
        throw new Error("Le contexte n'est pas disponible sur cette page")
    }

    return context
    
}

