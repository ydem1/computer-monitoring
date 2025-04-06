import { MarkerProps } from "react-leaflet";

export enum AirConditionIndicators {
  CO2_EMISSIONS = "Викиди CO₂",
  NOX_EMISSIONS = "Викиди NOₓ",
  SO2_EMISSIONS = "Викиди SO₂",
  DUST_EMISSIONS = "Викиди пилу",
  DIOXINS_EMISSIONS = "Викиди діоксинів",
  HEAVY_METALS_EMISSIONS = "Викиди важких металів",
  ENERGY_CONSUMPTION = "Енергоспоживання",
  EFFICIENCY = "Ефективність",
}

export enum RadiationBackgroundIndicators {
  BACKGROUND_DOSE = "Фонова доза",
  ENERGY_CONSUMPTION = "Енергоспоживання",
  EFFICIENCY = "Ефективність",
}

export type AirConditionIndicator = {
  name: AirConditionIndicators;
  value: number;
  unit: string;
};

export type RadiationBackgroundIndicator = {
  name: RadiationBackgroundIndicators;
  value: number;
  unit: string;
};

export type Indicator = AirConditionIndicator | RadiationBackgroundIndicator;

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
};

export type IndustrialFacilitiesDataLab1 = IndustrialFacilitiesData & {
  indicators: Indicator[];
  statistics: Statistics[];
};

export type IndustrialFacilitiesDataLab2 = IndustrialFacilitiesData & {
  indicators: Indicator[];
  statistics: Statistics[];
};
