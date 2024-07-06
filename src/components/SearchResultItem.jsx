import PropTypes from 'prop-types';
import { useContext } from 'react';
import GalliMapsContext from '../GalliMaps/GalliMapsContext';


export default function SearchResultItem({ placeDetails }) {
    const { mapObject } = useContext(GalliMapsContext); // Access the map object

    function goToLocation(placeDetails) {
        console.log(placeDetails)
        console.log(mapObject)
    }
    return (
        <li style={{ listStyleType: 'none', borderBottom: '1px solid #ccc', padding: '0.25em' }}>
            <button onClick={() => { goToLocation(placeDetails) }}>
                {placeDetails.name}
            </button>
        </li>
    )

}

SearchResultItem.propTypes = {
    placeDetails: PropTypes.any.isRequired,
};