import React, { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import VectorTileLayer from "react-leaflet-vector-tile-layer";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import MarkerIcon from "./marker/MarkerIcon";

import data from "../../data/places.json";
import MapCard from "./card/MapCard";

let DefaultMarkerIcon = (id: number, price: number, active: boolean) => {
  return L.divIcon({
    className: "custom-icon",
    html: ReactDOMServer.renderToString(
      <MarkerIcon price={price} id={id} active={active} />
    ),
  });
};
const CustomMap = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const [activeId, setActiveId] = useState(0);

  const { results } = data;
  const location = L.latLng(61.002413, 69.909451);
  const swBounds = L.latLng([85, -900]);
  const neBounds = L.latLng(-85.05115, 900);
  const locationBounds = L.latLngBounds(swBounds, neBounds);

  // const locationBounds = [
  //   [85, -900],
  //   [-85.05115, 900],
  // ];

  // const fillBlueOptions = { fillColor: "#FF5A5F", color: "none" };

  // const filteredResult = results.filter(
  //   ({ id: resultId }, index) => resultId === activeId
  // )[0];
  // const { id, address, type, bedrooms, images, price, rating } =
  //   filteredResult ?? [];

  // const rectangle = [
  //   [51.49, -0.08],
  //   [51.5, -0.06],
  // ];

  return (
    <div className="relative flex items-center justify-center w-full h-full mx-auto">
      <MapContainer
        // ref={mapRef}
        center={location}
        zoom={4}
        scrollWheelZoom={true}
        // wheelDebounceTime={100}
        // wheelPxPerZoomLevel={1000}
        minZoom={2}
        maxBounds={locationBounds}
        maxBoundsViscosity={1}
        // whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
        // whenReady={() => {}}
      >
        <VectorTileLayer styleUrl="https://api.maptiler.com/maps/8e7ec3e1-8366-4419-894e-574966e5ef42/style.json?key=U1ddFjr0VgrmEM1OvIr1" />
        {/* <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}@2x.png?key=U1ddFjr0VgrmEM1OvIr1"
        /> */}

        {/* <Circle center={location} pathOptions={fillBlueOptions} radius={300} /> */}
        {results?.map(
          (
            { id, address, type, bedrooms, images, price, rating, lat, lng },
            index
          ) => (
            <Marker
              key={id}
              position={[lat, lng]}
              icon={DefaultMarkerIcon(id, price.total, id === activeId)}
              eventHandlers={{
                click: (e) => {
                  setActiveId(id);
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
