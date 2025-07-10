import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 25.4304, // Example: Prayagraj Kumbh Mela coordinates
  lng: 81.7708,
};

function App() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {/* Future: add heatmaps, toilets, vendors, etc. */}
      </GoogleMap>
    </LoadScript>
  );
}

export default App;