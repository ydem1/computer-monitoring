import {
  AirConditionIndicators,
  IndustrialFacilitiesDataLab1,
  IndustrialFacilitiesDataLab2,
  MonitoringSubsystem,
  RadiationBackgroundIndicators,
} from "src/@types/industrial-facilities";

// Kyiv
export const CENTER_MAP: [number, number] = [50.45466, 30.5238];
export const ZOOM = 13;

export const INDUSTRIAL_FACILITIES_LAB_1: IndustrialFacilitiesDataLab1[] = [
  {
    id: 1,
    position: [50.45268, 30.441119],
    name: "ПАТ Науково-виробниче підприємство 'Більшовик '",
    description:
      "Машинобудівне підприємство. Викиди пилу та промислових газів.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      { name: AirConditionIndicators.CO2_EMISSIONS, value: 150, unit: "т/рік" },
      { name: AirConditionIndicators.NOX_EMISSIONS, value: 40, unit: "т/рік" },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        value: 20,
        unit: "МВт/рік",
      },
      { name: AirConditionIndicators.EFFICIENCY, value: 70, unit: "%" },
    ],
  },
  {
    id: 2,
    position: [50.390327, 30.662176],
    name: "Завод Енергія",
    description: "Спалює тверді побутові відходи. Викиди CO₂, NOₓ, діоксинів.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      { name: AirConditionIndicators.CO2_EMISSIONS, value: 300, unit: "т/рік" },
      {
        name: AirConditionIndicators.DIOXINS_EMISSIONS,
        value: 5,
        unit: "т/рік",
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        value: 50,
        unit: "МВт/рік",
      },
      { name: AirConditionIndicators.EFFICIENCY, value: 85, unit: "%" },
    ],
  },
  {
    id: 3,
    position: [50.386374, 30.531646],
    name: "Інститут ядерних досліджень НАН України",
    description:
      "Виконує дослідження з ядерної енергетики, потребує контролю радіаційного фону.",
    monitoringSubsystem: MonitoringSubsystem.RADIATION_BACKGROUND,
    indicators: [
      {
        name: RadiationBackgroundIndicators.BACKGROUND_DOSE,
        value: 0.12,
        unit: "мкЗв/год",
      },
      {
        name: RadiationBackgroundIndicators.ENERGY_CONSUMPTION,
        value: 30,
        unit: "МВт/рік",
      },
      { name: RadiationBackgroundIndicators.EFFICIENCY, value: 90, unit: "%" },
    ],
  },
  {
    id: 4,
    position: [50.135675, 30.668116],
    name: "Київський картонно-паперовий комбінат",
    description: "Переробка макулатури, значні викиди пилу в атмосферу.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      {
        name: AirConditionIndicators.DUST_EMISSIONS,
        value: 100,
        unit: "т/рік",
      },
      { name: AirConditionIndicators.CO2_EMISSIONS, value: 200, unit: "т/рік" },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        value: 40,
        unit: "МВт/рік",
      },
      { name: AirConditionIndicators.EFFICIENCY, value: 75, unit: "%" },
    ],
  },
  {
    id: 5,
    position: [50.440586, 30.496291],
    name: "Станція теплопостачання №1 (СТ-1, раніше ТЕЦ-3)",
    description: "Забезпечує теплопостачання, викиди парникових газів.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      {
        name: AirConditionIndicators.CO2_EMISSIONS,
        value: 500,
        unit: "т/рік",
      },
      { name: AirConditionIndicators.SO2_EMISSIONS, value: 50, unit: "т/рік" },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        value: 60,
        unit: "МВт/рік",
      },
      { name: AirConditionIndicators.EFFICIENCY, value: 80, unit: "%" },
    ],
  },
  {
    id: 6,
    position: [50.446859, 30.642501],
    name: "Дарницька ТЕЦ",
    description: "Теплова електростанція. Основні викиди – CO₂, SO₂, NOₓ.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      {
        name: AirConditionIndicators.CO2_EMISSIONS,
        value: 700,
        unit: "т/рік",
      },
      { name: AirConditionIndicators.NOX_EMISSIONS, value: 100, unit: "т/рік" },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        value: 80,
        unit: "МВт/рік",
      },
      { name: AirConditionIndicators.EFFICIENCY, value: 85, unit: "%" },
    ],
  },
  {
    id: 7,
    position: [50.529794, 30.66726],
    name: "ТЕЦ-6",
    description:
      "Найбільша ТЕЦ Києва, споживає природний газ, значні викиди CO₂.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      {
        name: AirConditionIndicators.CO2_EMISSIONS,
        value: 1000,
        unit: "т/рік",
      },
      {
        name: AirConditionIndicators.NOX_EMISSIONS,
        value: 150,
        unit: " т/рік",
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        value: 100,
        unit: "МВт/рік",
      },
      { name: AirConditionIndicators.EFFICIENCY, value: 90, unit: "%" },
    ],
  },
  {
    id: 8,
    position: [50.397113, 30.567504],
    name: "ТЕЦ-5. КП 'КИЇВТЕПЛОЕНЕРГО'",
    description: "Забезпечує теплом Київ. Основні викиди – CO₂, NOₓ, SO₂.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      {
        name: AirConditionIndicators.CO2_EMISSIONS,
        value: 900,
        unit: "т/рік",
      },
      {
        name: AirConditionIndicators.NOX_EMISSIONS,
        value: 120,
        unit: "т/рік",
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        value: 90,
        unit: "МВт/рік",
      },
      { name: AirConditionIndicators.EFFICIENCY, value: 88, unit: "%" },
    ],
  },
  {
    id: 9,
    position: [50.491009, 30.461835],
    name: "АТ 'Київський вітамінний завод'",
    description:
      "Хімічне виробництво, контроль викидів у повітря та можливих радіаційних матеріалів.",
    monitoringSubsystem: MonitoringSubsystem.RADIATION_BACKGROUND,
    indicators: [
      {
        name: RadiationBackgroundIndicators.BACKGROUND_DOSE,
        value: 0.15,
        unit: "мкЗв/год",
      },
      {
        name: RadiationBackgroundIndicators.ENERGY_CONSUMPTION,
        value: 25,
        unit: "МВт/рік",
      },
      { name: RadiationBackgroundIndicators.EFFICIENCY, value: 92, unit: "%" },
    ],
  },
  {
    id: 10,
    position: [50.449734, 30.682962],
    name: "Дарницький вагоноремонтний завод",
    description:
      "Виробництво та ремонт вагонів. Викиди важких металів та аерозолів у повітря.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      {
        name: AirConditionIndicators.HEAVY_METALS_EMISSIONS,
        value: 10,
        unit: "т/рік",
      },
      {
        name: AirConditionIndicators.CO2_EMISSIONS,
        value: 100,
        unit: " т/рік",
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        value: 35,
        unit: "МВт/рік",
      },
      { name: AirConditionIndicators.EFFICIENCY, value: 78, unit: "%" },
    ],
  },
];

export const INDUSTRIAL_FACILITIES_LAB_2: IndustrialFacilitiesDataLab2[] = [
  {
    id: 1,
    position: [50.45268, 30.441119],
    name: "ПАТ Науково-виробниче підприємство 'Більшовик '",
    description:
      "Машинобудівне підприємство. Викиди пилу та промислових газів.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      { name: AirConditionIndicators.CO2_EMISSIONS, value: 150, unit: "т/рік" },
      { name: AirConditionIndicators.NOX_EMISSIONS, value: 40, unit: "т/рік" },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        value: 20,
        unit: "МВт/рік",
      },
      { name: AirConditionIndicators.EFFICIENCY, value: 70, unit: "%" },
    ],
    statistics: [
      { hour: "08:00", value: 35 },
      { hour: "09:00", value: 40 },
      { hour: "10:00", value: 42 },
      { hour: "11:00", value: 39 },
      { hour: "12:00", value: 45 },
      { hour: "13:00", value: 50 },
      { hour: "14:00", value: 48 },
      { hour: "15:00", value: 52 },
      { hour: "16:00", value: 47 },
      { hour: "17:00", value: 44 },
    ],
  },
  {
    id: 2,
    position: [50.390327, 30.662176],
    name: "Завод Енергія",
    description: "Спалює тверді побутові відходи. Викиди CO₂, NOₓ, діоксинів.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      { name: AirConditionIndicators.CO2_EMISSIONS, value: 300, unit: "т/рік" },
      {
        name: AirConditionIndicators.DIOXINS_EMISSIONS,
        value: 5,
        unit: "т/рік",
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        value: 50,
        unit: "МВт/рік",
      },
      { name: AirConditionIndicators.EFFICIENCY, value: 85, unit: "%" },
    ],
    statistics: [
      { hour: "08:00", value: 28 },
      { hour: "09:00", value: 33 },
      { hour: "10:00", value: 37 },
      { hour: "11:00", value: 34 },
      { hour: "12:00", value: 40 },
      { hour: "13:00", value: 42 },
      { hour: "14:00", value: 45 },
      { hour: "15:00", value: 38 },
      { hour: "16:00", value: 36 },
      { hour: "17:00", value: 32 },
    ],
  },
  {
    id: 3,
    position: [50.386374, 30.531646],
    name: "Інститут ядерних досліджень НАН України",
    description:
      "Виконує дослідження з ядерної енергетики, потребує контролю радіаційного фону.",
    monitoringSubsystem: MonitoringSubsystem.RADIATION_BACKGROUND,
    indicators: [
      {
        name: RadiationBackgroundIndicators.BACKGROUND_DOSE,
        value: 0.12,
        unit: "мкЗв/год",
      },
      {
        name: RadiationBackgroundIndicators.ENERGY_CONSUMPTION,
        value: 30,
        unit: "МВт/рік",
      },
      { name: RadiationBackgroundIndicators.EFFICIENCY, value: 90, unit: "%" },
    ],
    statistics: [
      { hour: "08:00", value: 0.1 },
      { hour: "09:00", value: 0.11 },
      { hour: "10:00", value: 0.12 },
      { hour: "11:00", value: 0.13 },
      { hour: "12:00", value: 0.15 },
      { hour: "13:00", value: 0.14 },
      { hour: "14:00", value: 0.16 },
      { hour: "15:00", value: 0.12 },
      { hour: "16:00", value: 0.13 },
      { hour: "17:00", value: 0.14 },
    ],
  },
  {
    id: 4,
    position: [50.135675, 30.668116],
    name: "Київський картонно-паперовий комбінат",
    description: "Переробка макулатури, значні викиди пилу в атмосферу.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      {
        name: AirConditionIndicators.DUST_EMISSIONS,
        value: 100,
        unit: "т/рік",
      },
      { name: AirConditionIndicators.CO2_EMISSIONS, value: 200, unit: "т/рік" },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        value: 40,
        unit: "МВт/рік",
      },
      { name: AirConditionIndicators.EFFICIENCY, value: 75, unit: "%" },
    ],
    statistics: [
      { hour: "08:00", value: 20 },
      { hour: "09:00", value: 22 },
      { hour: "10:00", value: 25 },
      { hour: "11:00", value: 23 },
      { hour: "12:00", value: 30 },
      { hour: "13:00", value: 28 },
      { hour: "14:00", value: 26 },
      { hour: "15:00", value: 24 },
      { hour: "16:00", value: 21 },
      { hour: "17:00", value: 19 },
    ],
  },
  {
    id: 5,
    position: [50.440586, 30.496291],
    name: "Станція теплопостачання №1 (СТ-1, раніше ТЕЦ-3)",
    description: "Забезпечує теплопостачання, викиди парникових газів.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      {
        name: AirConditionIndicators.CO2_EMISSIONS,
        value: 500,
        unit: "т/рік",
      },
      { name: AirConditionIndicators.SO2_EMISSIONS, value: 50, unit: "т/рік" },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        value: 60,
        unit: "МВт/рік",
      },
      { name: AirConditionIndicators.EFFICIENCY, value: 80, unit: "%" },
    ],
    statistics: [
      { hour: "08:00", value: 15 },
      { hour: "09:00", value: 18 },
      { hour: "10:00", value: 22 },
      { hour: "11:00", value: 20 },
      { hour: "12:00", value: 25 },
      { hour: "13:00", value: 23 },
      { hour: "14:00", value: 21 },
      { hour: "15:00", value: 19 },
      { hour: "16:00", value: 16 },
      { hour: "17:00", value: 14 },
    ],
  },
  {
    id: 6,
    position: [50.446859, 30.642501],
    name: "Дарницька ТЕЦ",
    description: "Теплова електростанція. Основні викиди – CO₂, SO₂, NOₓ.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      {
        name: AirConditionIndicators.CO2_EMISSIONS,
        value: 700,
        unit: "т/рік",
      },
      { name: AirConditionIndicators.NOX_EMISSIONS, value: 100, unit: "т/рік" },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        value: 80,
        unit: "МВт/рік",
      },
      { name: AirConditionIndicators.EFFICIENCY, value: 85, unit: "%" },
    ],
    statistics: [
      { hour: "08:00", value: 50 },
      { hour: "09:00", value: 55 },
      { hour: "10:00", value: 58 },
      { hour: "11:00", value: 54 },
      { hour: "12:00", value: 60 },
      { hour: "13:00", value: 63 },
      { hour: "14:00", value: 57 },
      { hour: "15:00", value: 59 },
      { hour: "16:00", value: 53 },
      { hour: "17:00", value: 50 },
    ],
  },
  {
    id: 7,
    position: [50.529794, 30.66726],
    name: "ТЕЦ-6",
    description:
      "Найбільша ТЕЦ Києва, споживає природний газ, значні викиди CO₂.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      {
        name: AirConditionIndicators.CO2_EMISSIONS,
        value: 1000,
        unit: "т/рік",
      },
      {
        name: AirConditionIndicators.NOX_EMISSIONS,
        value: 150,
        unit: " т/рік",
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        value: 100,
        unit: "МВт/рік",
      },
      { name: AirConditionIndicators.EFFICIENCY, value: 90, unit: "%" },
    ],
    statistics: [
      { hour: "08:00", value: 50 },
      { hour: "09:00", value: 55 },
      { hour: "10:00", value: 58 },
      { hour: "11:00", value: 54 },
      { hour: "12:00", value: 60 },
      { hour: "13:00", value: 63 },
      { hour: "14:00", value: 57 },
      { hour: "15:00", value: 59 },
      { hour: "16:00", value: 53 },
      { hour: "17:00", value: 50 },
    ],
  },
  {
    id: 8,
    position: [50.397113, 30.567504],
    name: "ТЕЦ-5. КП 'КИЇВТЕПЛОЕНЕРГО'",
    description: "Забезпечує теплом Київ. Основні викиди – CO₂, NOₓ, SO₂.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      {
        name: AirConditionIndicators.CO2_EMISSIONS,
        value: 900,
        unit: "т/рік",
      },
      {
        name: AirConditionIndicators.NOX_EMISSIONS,
        value: 120,
        unit: "т/рік",
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        value: 90,
        unit: "МВт/рік",
      },
      { name: AirConditionIndicators.EFFICIENCY, value: 88, unit: "%" },
    ],
    statistics: [
      { hour: "08:00", value: 50 },
      { hour: "09:00", value: 55 },
      { hour: "10:00", value: 58 },
      { hour: "11:00", value: 54 },
      { hour: "12:00", value: 60 },
      { hour: "13:00", value: 63 },
      { hour: "14:00", value: 57 },
      { hour: "15:00", value: 59 },
      { hour: "16:00", value: 53 },
      { hour: "17:00", value: 50 },
    ],
  },
  {
    id: 9,
    position: [50.491009, 30.461835],
    name: "АТ 'Київський вітамінний завод'",
    description:
      "Хімічне виробництво, контроль викидів у повітря та можливих радіаційних матеріалів.",
    monitoringSubsystem: MonitoringSubsystem.RADIATION_BACKGROUND,
    indicators: [
      {
        name: RadiationBackgroundIndicators.BACKGROUND_DOSE,
        value: 0.15,
        unit: "мкЗв/год",
      },
      {
        name: RadiationBackgroundIndicators.ENERGY_CONSUMPTION,
        value: 25,
        unit: "МВт/рік",
      },
      { name: RadiationBackgroundIndicators.EFFICIENCY, value: 92, unit: "%" },
    ],
    statistics: [
      { hour: "08:00", value: 50 },
      { hour: "09:00", value: 55 },
      { hour: "10:00", value: 58 },
      { hour: "11:00", value: 54 },
      { hour: "12:00", value: 60 },
      { hour: "13:00", value: 63 },
      { hour: "14:00", value: 57 },
      { hour: "15:00", value: 59 },
      { hour: "16:00", value: 53 },
      { hour: "17:00", value: 50 },
    ],
  },
  {
    id: 10,
    position: [50.449734, 30.682962],
    name: "Дарницький вагоноремонтний завод",
    description:
      "Виробництво та ремонт вагонів. Викиди важких металів та аерозолів у повітря.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      {
        name: AirConditionIndicators.HEAVY_METALS_EMISSIONS,
        value: 10,
        unit: "т/рік",
      },
      {
        name: AirConditionIndicators.CO2_EMISSIONS,
        value: 100,
        unit: " т/рік",
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        value: 35,
        unit: "МВт/рік",
      },
      { name: AirConditionIndicators.EFFICIENCY, value: 78, unit: "%" },
    ],
    statistics: [
      { hour: "08:00", value: 50 },
      { hour: "09:00", value: 55 },
      { hour: "10:00", value: 58 },
      { hour: "11:00", value: 54 },
      { hour: "12:00", value: 60 },
      { hour: "13:00", value: 63 },
      { hour: "14:00", value: 57 },
      { hour: "15:00", value: 59 },
      { hour: "16:00", value: 53 },
      { hour: "17:00", value: 50 },
    ],
  },
];
