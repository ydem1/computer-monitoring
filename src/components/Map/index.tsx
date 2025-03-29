import React, { FC } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import cn from "classnames";
import "leaflet/dist/leaflet.css";
import { IndustrialFacilitiesData } from "src/@types/industrial-facilities";
import { CENTER_MAP, ZOOM } from "./constants";

interface Props {
  className?: string;
  industrialFacilities: IndustrialFacilitiesData[];
  content: FC<IndustrialFacilitiesData>;
}

export const Map: FC<Props> = ({
  className,
  industrialFacilities,
  content: Content,
}) => (
  <div className={cn("relative h-[80vh] w-full", className)}>
    <MapContainer className="z-0 h-full w-full" center={CENTER_MAP} zoom={ZOOM}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.osm.ch/switzerland/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup chunkedLoading>
        {industrialFacilities.map((marker) => (
          <Marker key={marker.id} position={marker.position}>
            <Popup>
              <Content {...marker} />
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  </div>
);
