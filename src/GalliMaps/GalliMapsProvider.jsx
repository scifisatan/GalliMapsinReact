
import { useState } from 'react';
import PropTypes from 'prop-types';
import GalliMapsContext from './GalliMapsContext.jsx';


export const GalliMapsProvider = ({ children, apiToken }) => {
    const [mapObject, setMapObject] = useState(null); // Add state for the map object

    return (
        <GalliMapsContext.Provider value={{ apiToken, mapObject, setMapObject }}>
            {children}
        </GalliMapsContext.Provider>
    );
};

GalliMapsProvider.propTypes = {
    children: PropTypes.node.isRequired,
    apiToken: PropTypes.string.isRequired,
};

