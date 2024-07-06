import { useEffect, useRef, useContext } from 'react';
import GalliMapsContext from './GalliMapsContext.jsx';
import PropTypes from 'prop-types';

const GalliMaps = ({ mapOptions }) => {
    const { apiToken, setMapObject } = useContext(GalliMapsContext); // Destructure setMapObject
    const mapContainerRef = useRef(null);
    mapOptions.container = mapContainerRef.current;

    useEffect(() => {
        const initializeMap = () => {
            if (window.GalliMapPlugin && mapContainerRef.current) {
                try {
                    const map = new window.GalliMapPlugin({
                        accessToken: apiToken,
                        map: mapOptions,
                    });
                    setMapObject(map);
                } catch (error) {
                    console.error('Error initializing GalliMapPlugin:', error);

                }
            } else {
                console.error('GalliMapPlugin is not available on the window object. Retrying...');
                setTimeout(initializeMap, 1000); // Retry after 1 second
            }
        };

        initializeMap();
    }, [apiToken, mapOptions, setMapObject]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div ref={mapContainerRef} id="map" style={{ height: '85vh' }}></div>
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