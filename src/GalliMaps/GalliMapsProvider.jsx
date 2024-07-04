
import PropTypes from 'prop-types';

import GalliMapsContext from './GalliMapsContext.jsx';


export const GalliMapsProvider = ({ children, apiToken }) => {
    return (
        <GalliMapsContext.Provider value={apiToken}>
            {children}
        </GalliMapsContext.Provider>
    );
};

GalliMapsProvider.propTypes = {
    children: PropTypes.node.isRequired,
    apiToken: PropTypes.string.isRequired,
};

