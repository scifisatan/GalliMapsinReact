import { useContext } from "react";
import GalliMapContext from "./GalliMapsContext.jsx";
export const useGalliMapsContext = () => {
    const context = useContext(GalliMapContext);
    if (context === undefined) {
        throw new Error('useGalliMapContext must be used within a GalliMapProvider');
    }
    return context;
};
