import './App.css';
import React from 'react'
import { GoogleMap, LoadScript ,Polygon} from '@react-google-maps/api';


const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const center = { lat: 24.886, lng: -70.268 }

const paths = [
  { lat: 25.774, lng: -80.19 },
  { lat: 18.466, lng: -66.118 },
  { lat: 32.321, lng: -64.757 },
  { lat: 25.774, lng: -80.19 }
]

const options = {
  fillColor: "lightblue",
  fillOpacity: 0.4,
  strokeColor: "red",
  strokeOpacity: 1,
  strokeWeight: 2,
  clickable: false,
  draggable: true,
  editable: true,
  geodesic: false,
  zIndex: 1
}

const onLoad = polygon => {
  console.log("polygon: ", polygon);
}


function App() {
  return (
<LoadScript
      googleMapsApiKey="AIzaSyA8ekvarLy5isA-5eITym_Ez-R8iT0j8j8"
    >
       <GoogleMap
    id="marker-example"
    mapContainerStyle={mapContainerStyle}
    zoom={5}
    center={center}
  >
    <Polygon
      onLoad={onLoad}
      paths={paths}
      options={options}
    />
  </GoogleMap>
    </LoadScript>
  );
}

export default App;
