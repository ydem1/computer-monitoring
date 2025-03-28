import React, { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import cn from "classnames";
import "leaflet/dist/leaflet.css";
import { CENTER_MAP, ZOOM } from "./constants";

interface Props {
  className?: string;
}

export const Map: FC<Props> = ({ className }) => (
  <div className={cn("w-full h-[80vh]", className)}>
    <MapContainer className="h-full w-full" center={CENTER_MAP} zoom={ZOOM}>
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
      />
    </MapContainer>
  </div>
);
