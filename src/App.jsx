import SearchBar from './components/SearchBar';
import GalliMaps from './GalliMaps/GalliMaps';
function App() {

  const mapOptions = {
    center: [27.714933, 85.318129],
    zoom: 12,
    maxZoom: 100,
    minZoom: 1
  }
  return (
    <div>
      <SearchBar />
      <GalliMaps mapOptions={mapOptions} />
    </div>
  )
}

export default App
