import { MonitoringSubsystem } from "src/@types/industrial-facilities";
import { IOptionSelect } from "src/@types/option-select";
import { INDUSTRIAL_FACILITIES_LAB_3 } from "../Map/constants";

export const TYPE_MONITORING: IOptionSelect[] = [
  {
    label: "Всі типи",
    value: "",
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

export const ALL_COMPANIES: IOptionSelect[] = [
  {
    label: "Всі об'єкти промисловості",
    value: "",
  },
  ...INDUSTRIAL_FACILITIES_LAB_3.map(({ name, slug }) => ({
    label: name,
    value: slug,
  })),
];
