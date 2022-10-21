import "./GoogleMaps.css";
import React from "react";
import { useLoadScript } from '@react-google-maps/api';


function template() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
})
if (!isLoaded) return <div>Loading...</div>
  return (
    <div className="google-maps">
      <h1>GoogleMaps</h1>
    </div>
  );
};

export default template;
