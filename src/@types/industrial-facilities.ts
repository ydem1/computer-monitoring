import { MarkerProps } from "react-leaflet";

export type Indicator = { name: string; value: string };

export type Statistics = { hour: string; value: number };

export enum MonitoringSubsystem {
  RADIATION_BACKGROUND = "Радіаційний фон",
  AIR_CONDITION = "Стан повітря",
}

export type IndustrialFacilitiesData = MarkerProps & {
  id: number;
  name: string;
  description: string;
  monitoringSubsystem: MonitoringSubsystem;
  indicators: Indicator[];
  statistics: Statistics[];
};
