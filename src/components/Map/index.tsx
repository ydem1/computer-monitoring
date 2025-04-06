import React, { FC, ReactElement } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import cn from "classnames";
import "leaflet/dist/leaflet.css";
import { CENTER_MAP, ZOOM } from "./constants";

interface Props {
  className?: string;
  children: ReactElement;
}

export const Map: FC<Props> = ({ className, children }) => (
  <div className={cn("relative h-screen w-full", className)}>
    <MapContainer className="z-0 h-full w-full" center={CENTER_MAP} zoom={ZOOM}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.osm.ch/switzerland/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup chunkedLoading>{children}</MarkerClusterGroup>
    </MapContainer>
  </div>
);
