import "./Map.css";
import React, { useCallback, useMemo, useRef, useState } from "react";
import Places from "./Places";
import Distance from "./Distance";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from "@react-google-maps/api";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
// const LatLngLiteral = google.maps.LatLngLiteral
// const DirectionResult = google.maps.DirectionResult
// const MapOptions  = google.maps.MapOptions

export default function Map() {
  const [office, setOffice] = useState();
  const mapRef = useRef();
  const center = useMemo(() => ({ lat: 43, lng: -80 }), []);
  const options = useMemo(
    () => ({
      mapId: "230c3f1a8d4357d5",
      disableDefaultUI: false,
      clickableIcons: true,
    }),
    []
  );
  const onLoad = useCallback((map) => (mapRef.current = map), []);
  return (
    <div className=" container-fluid ">
      <MDBRow>
        <span className=" d-flex justify-content-center"  >
          <Places
            setOffice={(position) => {
              setOffice(position);
              mapRef.current?.panTo(position);
            }}
          />
        </span>
        <MDBCol  className="">
          <GoogleMap
            zoom={10}
            center={center}
            options={options}
            onLoad={onLoad}
            mapContainerClassName="map-container "
          >
            {office && (
              <>
                <Marker 
                position={office} 
                />
                <Circle center={office} radius={15000} options={closeOptions}/>
              </>
            )}
          </GoogleMap>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

const defaultOption = {
  strokeOpacity: 8.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  visible: true,
};

const closeOptions = {
  ...defaultOption,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "green",
  fillColor: "green",
};
const middleOption = {
  ...defaultOption,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "green",
  fillColor: "green",
};
const farOption = {
  ...defaultOption,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "green",
  fillColor: "green",
};
const generateHouse = (positions) => {
  const _houses = [];
  for (let i = 0; i < _houses.length; i++) {
    const direction = Math.random() < 0.5 ? -2 : 2;
    _houses.push({
      lat: positions.lat + Math.random() / direction,
      lng: positions.lng + Math.random() / direction,
    });
  }
  return _houses;
};
