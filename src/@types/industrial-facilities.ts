import { MarkerProps } from "react-leaflet";

export type Indicator = { name: string; value: string };

export type IndustrialFacilitiesData = MarkerProps & {
  id: number;
  name: string;
  description: string;
  monitoringSubsystem: string;
  indicators: Indicator[];
};
