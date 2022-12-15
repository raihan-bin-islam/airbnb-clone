import React, { useEffect, useRef, useState, forwardRef } from "react";
import ReactDOMServer from "react-dom/server";
import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  Rectangle,
  SVGOverlay,
  Tooltip,
} from "react-leaflet";
import VectorTileLayer from "react-leaflet-vector-tile-layer";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import AirbnbMapMarker from "@components/svg/AirbnbMapMarker";
import Image from "next/image";
import aribnbMarker from "../svg/airbnb-map-marker.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import MarkerIcon from "./marker/MarkerIcon";

import data from "../../data/places.json";
import MapCard from "./card/MapCard";

let DefaultMarkerIcon = (id, price, active, ref) => {
  return L.divIcon({
    className: "custom-icon",
    html: ReactDOMServer.renderToString(
      <MarkerIcon price={price} id={id} active={active} ref={ref} />
    ),
  });
};

const CustomMap = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const [activeId, setActiveId] = useState(0);

  const { results } = data;
  const position = [0, 0];
  const location = [61.002413, 69.909451];
  // const markerPosition = [location[0] + 0.0005, location[1] - 0.0015];
  // const locationBounds = [
  //   [38.12935, 13.07521],
  //   [38.12935, 13.07521],
  // ];
  const outerBounds = [
    [84.980497, Number.NEGATIVE_INFINITY],
    [-85.683691, Number.POSITIVE_INFINITY],
  ];

  const fillBlueOptions = { fillColor: "#FF5A5F", color: "none" };

  const getMapZoom = () => {
    return mapRef?.current?.getZoom();
  };
  useEffect(() => {
    console.log("activeId: ", activeId);
  }, [activeId]);
  useEffect(() => {
    console.log("markerRef: ", markerRef);
  }, [markerRef]);

  const filteredResult = results.filter(
    ({ id: resultId }, index) => resultId === activeId
  )[0];
  const { id, address, type, bedrooms, images, price, rating } =
    filteredResult ?? [];

  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  return (
    <div className="relative flex items-center justify-center w-full h-full mx-auto">
      <MapContainer
        ref={mapRef}
        center={location}
        zoom={4}
        scrollWheelZoom={true}
        wheelDebounceTime={100}
        wheelPxPerZoomLevel={1000}
        minZoom={2}
        maxBounds={outerBounds}
        maxBoundsViscosity={1}
        whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
        whenReady={() => {}}
      >
        <VectorTileLayer styleUrl="https://api.maptiler.com/maps/8e7ec3e1-8366-4419-894e-574966e5ef42/style.json?key=U1ddFjr0VgrmEM1OvIr1" />

        {/* <Circle center={location} pathOptions={fillBlueOptions} radius={300} /> */}
        {results?.map(
          (
            { id, address, type, bedrooms, images, price, rating, lat, lng },
            index
          ) => (
            <Marker
              key={id}
              position={[lat, lng]}
              icon={DefaultMarkerIcon(
                id,
                price.total,
                id === activeId,
                markerRef
              )}
              eventHandlers={{
                click: (e) => {
                  setActiveId(id);
                  console.log(markerRef.current);
                },
              }}
            >
              <Popup>
                <MapCard
                  id={id}
                  address={address}
                  price={price.total}
                  type={type}
                  bedrooms={bedrooms}
                  images={images}
                  rating={rating}
                />
              </Popup>
            </Marker>
          )
        )}
      </MapContainer>
    </div>
  );
};

export default CustomMap;
