
import PropTypes from 'prop-types';

const SearchResultsContainer = ({ children }) => {
    return (
        <div style={{ position: 'fixed', top: '50px', left: 0, width: '100%', maxHeight: '25vh', overflowY: 'scroll', backgroundColor: 'white', zIndex: 999 }}>
            {children}
        </div>
    );
};

SearchResultsContainer.propTypes = {
    children: PropTypes.node.isRequired
};

export default SearchResultsContainer;