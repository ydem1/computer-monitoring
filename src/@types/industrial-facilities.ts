import { MarkerProps } from "react-leaflet";

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

// ==== LAB 1 ====

export type AirConditionIndicatorLab1 = {
  name: AirConditionIndicators;
  unit: string;
  value: number;
};

export type RadiationBackgroundIndicatorLab1 = {
  name: RadiationBackgroundIndicators;
  unit: string;
  value: number;
};

export type IndicatorLab1 =
  | AirConditionIndicatorLab1
  | RadiationBackgroundIndicatorLab1;

export type IndustrialFacilitiesDataLab1 = IndustrialFacilitiesData & {
  indicators: IndicatorLab1[];
};

// ==== LAB 2 ====

export type IndicatorValueLab2 = {
  date: Date;
  value: number;
};

export type AirConditionIndicatorLab2 = {
  name: AirConditionIndicators;
  unit: string;
  values: IndicatorValueLab2[];
};

export type RadiationBackgroundIndicatorLab2 = {
  name: RadiationBackgroundIndicators;
  unit: string;
  values: IndicatorValueLab2[];
};

export type IndicatorLab2 =
  | AirConditionIndicatorLab2
  | RadiationBackgroundIndicatorLab2;

export type IndustrialFacilitiesDataLab2 = IndustrialFacilitiesData & {
  indicators: IndicatorLab2[];
};
