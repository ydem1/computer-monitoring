import { MonitoringSubsystem } from "src/@types/industrial-facilities";
import { IOptionSelect } from "src/@types/option-select";

export const MAPS_OPTIONS: IOptionSelect[] = [
  {
    label: "Всі об'єкти промисловості",
    value: 0,
  },
  {
    label: "Радіаційний фон",
    value: MonitoringSubsystem.RADIATION_BACKGROUND,
  },
  {
    label: "Стан повітря",
    value: MonitoringSubsystem.AIR_CONDITION,
  },
];
