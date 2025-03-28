import React, { FC } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import cn from "classnames";
import "leaflet/dist/leaflet.css";
import { CENTER_MAP, IndustrialFacilities, ZOOM } from "./constants";

interface Props {
  className?: string;
}

export const Map: FC<Props> = ({ className }) => (
  <div className={cn("relative h-[80vh] w-full", className)}>
    <MapContainer className="z-0 h-full w-full" center={CENTER_MAP} zoom={ZOOM}>
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
      />
      <MarkerClusterGroup chunkedLoading>
        {IndustrialFacilities.map((marker) => (
          <Marker key={marker.id} position={marker.position}>
            <Popup>
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">{marker.name}</span>
                <span className="text-sm text-gray-600">
                  {marker.description}
                </span>
                <span className="text-sm">
                  <strong>Підсистема моніторингу:</strong>{" "}
                  {marker.monitoringSubsystem}
                </span>
                <div className="mt-2">
                  <span className="font-semibold">Показники:</span>
                  <ul className="list-disc pl-4">
                    {marker.indicators.map((indicator, index) => (
                      <li key={index} className="text-sm">
                        <strong>{indicator.name}:</strong> {indicator.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  </div>
);
