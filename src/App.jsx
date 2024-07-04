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
      <h1 style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.5em',
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.5em',
        margin: '0'
      }}>
        Galli Maps in React
      </h1>
      <GalliMaps mapOptions={mapOptions} />
    </div>
  )
}

export default App
