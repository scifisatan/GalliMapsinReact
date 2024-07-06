import PropTypes from 'prop-types';
import GalliMapsContext from '../GalliMaps/GalliMapsContext';
import { useRef, useEffect, useState, useContext } from 'react';
import { apiClient } from '../api/client';
import SearchResultItem from './SearchResultItem';
import SearchResultsContainer from './SearchResultsContainer';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');

    const debounceTimeout = useRef(null);
    const [currentLocation, setCurrentLocation] = useState({ lat: null, lng: null });
    const { apiToken } = useContext(GalliMapsContext);
    const [apiResponse, setApiResponse] = useState([])



    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setCurrentLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            }, (error) => {
                console.error("Error obtaining location", error);
            });
        }
    }, []);

    function debounce(func, delay) {
        return function (...args) {
            if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
            debounceTimeout.current = setTimeout(() => {
                func(...args);
                debounceTimeout.current = null;
            }, delay);
        };
    }

    function getAutoComplete() {
        if (searchInput.length < 3) {
            return
        }
        if (currentLocation.lat && currentLocation.lng) {
            apiClient.get(`search/autocomplete?accessToken=${apiToken}&word=${encodeURIComponent(searchInput)}&lat=${currentLocation.lat}&lng=${currentLocation.lng}`)
                .then(response => {

                    setApiResponse(response.data.data)
                })
                .catch(error => {
                    console.error("API call error", error);
                });
        }
    }
    const debouncedSearch = debounce(getAutoComplete, 250);

    const handleInputChange = (event) => {

        setSearchInput(event.target.value);
        debouncedSearch()
    };



    return (
        <div style={{ padding: '0.5em' }}>
            <input
                type="text"
                placeholder="Search..."
                value={searchInput}
                onChange={handleInputChange}
                style={{ borderRadius: '5px' }}
            />
            {searchInput && apiResponse && < SearchResultsContainer >

                <ul>
                    {apiResponse.map(item => (
                        <SearchResultItem key={item.id} placeDetails={item} />
                    ))}
                </ul>
            </SearchResultsContainer>}
        </div >
    );

};

SearchBar.propTypes = {
    searchInput: PropTypes.string.isRequired,
    setSearchInput: PropTypes.func.isRequired,
};

export default SearchBar;