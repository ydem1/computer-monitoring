import React, { FC } from "react";
import "leaflet/dist/leaflet.css";
import { IndustrialFacilitiesData } from "src/@types/industrial-facilities";

export const PopupDetail: FC<IndustrialFacilitiesData> = ({
  name,
  description,
  monitoringSubsystem,
  indicators,
}) => <div className="flex flex-col gap-2">{name}</div>;
