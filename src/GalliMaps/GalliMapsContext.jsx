import { createContext } from 'react';

const GalliMapsContext = createContext({
  apiToken: null,
  mapObject: null, // Add this to hold the map object
});

export default GalliMapsContext;