import "./GoogleMaps.css";
import React from "react";
import { useLoadScript } from '@react-google-maps/api';
import {Map} from '../../features/index'
 const googleMapsApiKeys =process.env.REACT_APP_ANI_MAPA_API_KEY
 const libraries = ["places"]
function GoogleMaps() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey : googleMapsApiKeys,
    libraries,
})

if (!isLoaded) return <div>Loading...</div>
  return (
    <div className="">
      <Map/>
    </div>
  );
};

export default GoogleMaps;
