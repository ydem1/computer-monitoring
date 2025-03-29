import React, { FC } from "react";
import "leaflet/dist/leaflet.css";
import { IndustrialFacilitiesData } from "src/@types/industrial-facilities";

export const PopupDetail: FC<IndustrialFacilitiesData> = ({
  name,
  description,
  monitoringSubsystem,
  indicators,
}) => (
  <div className="flex flex-col gap-2">
    <span className="text-lg font-bold">{name}</span>
    <span className="text-sm text-gray-600">{description}</span>
    <span className="text-sm">
      <strong>Підсистема моніторингу:</strong> {monitoringSubsystem}
    </span>
    <div className="mt-2">
      <span className="font-semibold">Показники:</span>
      <ul className="list-disc pl-4">
        {indicators.map((indicator, index) => (
          <li key={index} className="text-sm">
            <strong>{indicator.name}:</strong> {indicator.value} {indicator.unit}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
