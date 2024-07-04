import { useEffect, useRef } from 'react';
import { useGalliMapsContext } from './useGalliMapsContext.jsx';
import PropTypes from 'prop-types';

const GalliMaps = ({ mapOptions }) => {

    const mapContainerRef = useRef(null);
    const apiToken = useGalliMapsContext();
    mapOptions.container = mapContainerRef.current

    useEffect(() => {
        if (window.GalliMapPlugin && mapContainerRef.current) {
            const galliMapsObject = {
                accessToken: apiToken,
                map: mapOptions,
            };

            try {
                new window.GalliMapPlugin(galliMapsObject);
            } catch (error) {
                console.error('Error initializing GalliMapPlugin:', error);
            }
        } else {
            console.error('GalliMapPlugin is not available on the window object');
        }
    }, [apiToken, mapOptions]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div ref={mapContainerRef} style={{ height: '85vh' }}></div>
        </div>
    );
};



GalliMaps.propTypes = {
    mapOptions: PropTypes.shape({
        center: PropTypes.arrayOf(PropTypes.number).isRequired,
        zoom: PropTypes.number.isRequired,
        maxZoom: PropTypes.number,
        minZoom: PropTypes.number,
        container: PropTypes.instanceOf(Element), // This is optional as it will be set by the component
    }).isRequired,
};


export default GalliMaps;