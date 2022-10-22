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
import zIndex from "@mui/material/styles/zIndex";

export default function Map() {
  const [office, setOffice] = useState();
  const [direction, setDirection] = useState();
  const mapRef = useRef();
  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);

  const options = useMemo(
    () => ({
      mapId: "230c3f1a8d4357d5",
      disableDefaultUI: false,
      clickableIcons: true,
    }),
    []
  );
  const onLoad = useCallback((map) => (mapRef.current = map), []);
  const houses = useMemo(() => generateHouse(center), [center]);

  // const fetchDirections = (house) => {
  //   if (!office) return;

  //   // const service = new google.maps.DirectionsService();
  //   service.route(
  //     {
  //       origin: house,
  //       destination: office,
  //       travelMode: google.maps.travelMode.DRIVING
  //     },
  //     (result, status) => {
  //       if (status === "OK" && result) {
  //         setDirection(result);
  //       }
  //     }
  //   );
  // };
  return (
    <div className=" container-fluid ">
      <div>
        <div className=" d-flex justify-content-center">
          <Places
            setOffice={(position) => {
              setOffice(position);
              mapRef.current?.panTo(position);
            }}
          />
        </div>
        <div className="map">
          <GoogleMap
            zoom={10}
            center={center}
            options={options}
            onLoad={onLoad}
            mapContainerClassName="map-container"
          >
            {direction && (
              <DirectionsRenderer
                directions={direction}
                options={{
                  polylineOptions: {
                    zIndex: 50,
                    strokeColor: "#1976D2",
                    strokeWeight: 5,
                  },
                }}
              />
            )}
            {office && (
              <>
                <Marker position={office} />
                <MarkerClusterer>
                  {(clusterer) =>
                    houses.map((house) => (
                      <Marker
                        key={house.lat}
                        position={house}
                        clusterer={clusterer}
                        // onClick={()=>{fetchDirections(house)}}
                      />
                    ))
                  }
                </MarkerClusterer>
                <Circle center={office} radius={2000} options={closeOptions} />
                <Circle center={office} radius={4000} options={middleOption} />
                <Circle center={office} radius={8000} options={farOption} />
              </>
            )}
          </GoogleMap>
        </div>
      </div>
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
  fillOpacity: 0.09,
  strokeColor: "green",
  fillColor: "green",
};
const middleOption = {
  ...defaultOption,
  zIndex: 1,
  fillOpacity: 0.08,
  strokeColor: "orange",
  fillColor: "orange",
};
const farOption = {
  ...defaultOption,
  zIndex: 1,
  fillOpacity: 0.07,
  strokeColor: "red",
  fillColor: "red",
};
const generateHouse = (positions) => {
  const _houses = [];
  for (let i = 0; i < 100; i++) {
    const direction = Math.random() < 0.1 ? -2 : 2;
    _houses.push({
      lat: positions.lat + Math.random() / direction,
      lng: positions.lng + Math.random() / direction,
    });
    console.log(_houses);
  }
  return _houses;
};
