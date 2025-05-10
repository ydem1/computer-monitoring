import {
  AirConditionIndicators,
  IndustrialFacilitiesDataLab1,
  IndustrialFacilitiesDataLab2,
  IndustrialFacilitiesDataLab3,
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
    name: "ПАТ Науково-виробниче підприємство 'Більшовик'",
    description:
      "Машинобудівне підприємство. Викиди пилу та промислових газів.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      {
        name: AirConditionIndicators.CO2_EMISSIONS,
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 12.5 },
          { date: new Date("2024-04-30"), value: 12.1 },
          { date: new Date("2024-07-31"), value: 12.9 },
          { date: new Date("2024-10-31"), value: 12.3 },
        ],
      },
      {
        name: AirConditionIndicators.NOX_EMISSIONS,
        unit: "т/місяць",
        values: [
          { date: new Date("2024-02-28"), value: 3.3 },
          { date: new Date("2024-05-31"), value: 3.2 },
          { date: new Date("2024-08-31"), value: 3.5 },
          { date: new Date("2024-11-30"), value: 3.3 },
        ],
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-03-31"), value: 1.7 },
          { date: new Date("2024-06-30"), value: 1.8 },
          { date: new Date("2024-09-30"), value: 1.6 },
          { date: new Date("2024-12-31"), value: 1.8 },
        ],
      },
      {
        name: AirConditionIndicators.EFFICIENCY,
        unit: "%",
        values: [
          { date: new Date("2024-01-31"), value: 70 },
          { date: new Date("2024-04-30"), value: 72 },
          { date: new Date("2024-07-31"), value: 68 },
          { date: new Date("2024-10-31"), value: 71 },
        ],
      },
    ],
  },
  {
    id: 2,
    position: [50.390327, 30.662176],
    name: "Завод Енергія",
    description: "Спалює тверді побутові відходи. Викиди CO₂, NOₓ, діоксинів.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      {
        name: AirConditionIndicators.CO2_EMISSIONS,
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 25.0 },
          { date: new Date("2024-03-31"), value: 24.2 },
          { date: new Date("2024-06-30"), value: 25.8 },
          { date: new Date("2024-09-30"), value: 24.6 },
          { date: new Date("2024-12-31"), value: 25.4 },
        ],
      },
      {
        name: AirConditionIndicators.DIOXINS_EMISSIONS,
        unit: "кг/місяць",
        values: [
          { date: new Date("2024-02-28"), value: 416.7 },
          { date: new Date("2024-05-31"), value: 400.0 },
          { date: new Date("2024-08-31"), value: 433.3 },
          { date: new Date("2024-11-30"), value: 408.3 },
        ],
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 4.2 },
          { date: new Date("2024-04-30"), value: 4.0 },
          { date: new Date("2024-07-31"), value: 4.3 },
          { date: new Date("2024-10-31"), value: 4.1 },
          { date: new Date("2024-12-31"), value: 4.3 },
        ],
      },
      {
        name: AirConditionIndicators.EFFICIENCY,
        unit: "%",
        values: [
          { date: new Date("2024-03-31"), value: 85 },
          { date: new Date("2024-06-30"), value: 83 },
          { date: new Date("2024-09-30"), value: 86 },
          { date: new Date("2024-12-31"), value: 84 },
        ],
      },
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
        unit: "мкЗв/год",
        values: [
          { date: new Date("2024-01-05"), value: 0.12 },
          { date: new Date("2024-02-10"), value: 0.11 },
          { date: new Date("2024-03-15"), value: 0.13 },
          { date: new Date("2024-04-20"), value: 0.12 },
          { date: new Date("2024-05-25"), value: 0.11 },
          { date: new Date("2024-06-30"), value: 0.12 },
          { date: new Date("2024-07-05"), value: 0.13 },
          { date: new Date("2024-08-10"), value: 0.12 },
          { date: new Date("2024-09-15"), value: 0.11 },
          { date: new Date("2024-10-20"), value: 0.12 },
        ],
      },
      {
        name: RadiationBackgroundIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 2.5 },
          { date: new Date("2024-04-30"), value: 2.3 },
          { date: new Date("2024-07-31"), value: 2.7 },
          { date: new Date("2024-10-31"), value: 2.4 },
        ],
      },
      {
        name: RadiationBackgroundIndicators.EFFICIENCY,
        unit: "%",
        values: [
          { date: new Date("2024-02-28"), value: 90 },
          { date: new Date("2024-05-31"), value: 88 },
          { date: new Date("2024-08-31"), value: 91 },
          { date: new Date("2024-11-30"), value: 89 },
        ],
      },
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
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 8.3 },
          { date: new Date("2024-03-31"), value: 7.9 },
          { date: new Date("2024-05-31"), value: 8.8 },
          { date: new Date("2024-08-31"), value: 8.2 },
          { date: new Date("2024-10-31"), value: 8.5 },
        ],
      },
      {
        name: AirConditionIndicators.CO2_EMISSIONS,
        unit: "т/місяць",
        values: [
          { date: new Date("2024-02-28"), value: 16.7 },
          { date: new Date("2024-04-30"), value: 16.3 },
          { date: new Date("2024-06-30"), value: 17.1 },
          { date: new Date("2024-09-30"), value: 16.5 },
        ],
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-03-31"), value: 3.3 },
          { date: new Date("2024-06-30"), value: 3.2 },
          { date: new Date("2024-09-30"), value: 3.5 },
          { date: new Date("2024-12-31"), value: 3.3 },
        ],
      },
      {
        name: AirConditionIndicators.EFFICIENCY,
        unit: "%",
        values: [
          { date: new Date("2024-01-31"), value: 75 },
          { date: new Date("2024-05-31"), value: 73 },
          { date: new Date("2024-08-31"), value: 76 },
          { date: new Date("2024-11-30"), value: 74 },
        ],
      },
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
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 41.7 },
          { date: new Date("2024-03-31"), value: 40.0 },
          { date: new Date("2024-05-31"), value: 43.3 },
          { date: new Date("2024-07-31"), value: 40.8 },
          { date: new Date("2024-09-30"), value: 42.5 },
          { date: new Date("2024-11-30"), value: 41.3 },
        ],
      },
      {
        name: AirConditionIndicators.SO2_EMISSIONS,
        unit: "т/місяць",
        values: [
          { date: new Date("2024-02-28"), value: 4.2 },
          { date: new Date("2024-04-30"), value: 4.0 },
          { date: new Date("2024-06-30"), value: 4.3 },
          { date: new Date("2024-08-31"), value: 4.1 },
        ],
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 5.0 },
          { date: new Date("2024-04-30"), value: 4.8 },
          { date: new Date("2024-07-31"), value: 5.2 },
          { date: new Date("2024-10-31"), value: 4.9 },
        ],
      },
      {
        name: AirConditionIndicators.EFFICIENCY,
        unit: "%",
        values: [
          { date: new Date("2024-03-31"), value: 80 },
          { date: new Date("2024-06-30"), value: 78 },
          { date: new Date("2024-09-30"), value: 81 },
          { date: new Date("2024-12-31"), value: 79 },
        ],
      },
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
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 58.3 },
          { date: new Date("2024-02-28"), value: 56.7 },
          { date: new Date("2024-03-31"), value: 60.0 },
          { date: new Date("2024-04-30"), value: 57.5 },
          { date: new Date("2024-05-31"), value: 59.2 },
          { date: new Date("2024-07-31"), value: 57.9 },
          { date: new Date("2024-08-31"), value: 58.8 },
          { date: new Date("2024-09-30"), value: 57.1 },
          { date: new Date("2024-10-31"), value: 59.6 },
          { date: new Date("2024-11-30"), value: 58.3 },
        ],
      },
      {
        name: AirConditionIndicators.NOX_EMISSIONS,
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 8.3 },
          { date: new Date("2024-04-30"), value: 7.9 },
          { date: new Date("2024-07-31"), value: 8.8 },
          { date: new Date("2024-10-31"), value: 8.2 },
        ],
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-02-28"), value: 6.7 },
          { date: new Date("2024-05-31"), value: 6.5 },
          { date: new Date("2024-08-31"), value: 6.8 },
          { date: new Date("2024-11-30"), value: 6.6 },
        ],
      },
      {
        name: AirConditionIndicators.EFFICIENCY,
        unit: "%",
        values: [
          { date: new Date("2024-03-31"), value: 85 },
          { date: new Date("2024-06-30"), value: 83 },
          { date: new Date("2024-09-30"), value: 86 },
          { date: new Date("2024-12-31"), value: 84 },
        ],
      },
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
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 83.3 },
          { date: new Date("2024-02-28"), value: 81.7 },
          { date: new Date("2024-03-31"), value: 85.0 },
          { date: new Date("2024-04-30"), value: 82.5 },
          { date: new Date("2024-05-31"), value: 84.2 },
          { date: new Date("2024-06-30"), value: 82.9 },
          { date: new Date("2024-07-31"), value: 83.8 },
        ],
      },
      {
        name: AirConditionIndicators.NOX_EMISSIONS,
        unit: "т/місяць",
        values: [
          { date: new Date("2024-02-28"), value: 12.5 },
          { date: new Date("2024-05-31"), value: 12.1 },
          { date: new Date("2024-08-31"), value: 12.9 },
          { date: new Date("2024-11-30"), value: 12.3 },
        ],
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 8.3 },
          { date: new Date("2024-04-30"), value: 8.2 },
          { date: new Date("2024-07-31"), value: 8.5 },
          { date: new Date("2024-10-31"), value: 8.3 },
        ],
      },
      {
        name: AirConditionIndicators.EFFICIENCY,
        unit: "%",
        values: [
          { date: new Date("2024-03-31"), value: 90 },
          { date: new Date("2024-06-30"), value: 88 },
          { date: new Date("2024-09-30"), value: 91 },
          { date: new Date("2024-12-31"), value: 89 },
        ],
      },
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
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 75.0 },
          { date: new Date("2024-03-31"), value: 73.3 },
          { date: new Date("2024-05-31"), value: 76.7 },
          { date: new Date("2024-07-31"), value: 74.2 },
          { date: new Date("2024-09-30"), value: 75.8 },
        ],
      },
      {
        name: AirConditionIndicators.NOX_EMISSIONS,
        unit: "т/місяць",
        values: [
          { date: new Date("2024-02-28"), value: 10.0 },
          { date: new Date("2024-05-31"), value: 9.6 },
          { date: new Date("2024-08-31"), value: 10.4 },
          { date: new Date("2024-11-30"), value: 9.8 },
        ],
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 7.5 },
          { date: new Date("2024-04-30"), value: 7.3 },
          { date: new Date("2024-07-31"), value: 7.7 },
          { date: new Date("2024-10-31"), value: 7.4 },
        ],
      },
      {
        name: AirConditionIndicators.EFFICIENCY,
        unit: "%",
        values: [
          { date: new Date("2024-03-31"), value: 88 },
          { date: new Date("2024-06-30"), value: 86 },
          { date: new Date("2024-09-30"), value: 89 },
          { date: new Date("2024-12-31"), value: 87 },
        ],
      },
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
        unit: "мкЗв/год",
        values: [
          { date: new Date("2024-01-10"), value: 0.15 },
          { date: new Date("2024-02-15"), value: 0.14 },
          { date: new Date("2024-03-20"), value: 0.16 },
          { date: new Date("2024-04-25"), value: 0.15 },
          { date: new Date("2024-05-30"), value: 0.14 },
          { date: new Date("2024-06-30"), value: 0.15 },
          { date: new Date("2024-07-31"), value: 0.16 },
          { date: new Date("2024-08-31"), value: 0.15 },
        ],
      },
      {
        name: RadiationBackgroundIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-02-28"), value: 2.1 },
          { date: new Date("2024-05-31"), value: 2.0 },
          { date: new Date("2024-08-31"), value: 2.2 },
          { date: new Date("2024-11-30"), value: 2.0 },
        ],
      },
      {
        name: RadiationBackgroundIndicators.EFFICIENCY,
        unit: "%",
        values: [
          { date: new Date("2024-01-31"), value: 92 },
          { date: new Date("2024-04-30"), value: 90 },
          { date: new Date("2024-07-31"), value: 93 },
          { date: new Date("2024-10-31"), value: 91 },
        ],
      },
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
        unit: "кг/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 833.3 },
          { date: new Date("2024-03-31"), value: 791.7 },
          { date: new Date("2024-05-31"), value: 875.0 },
          { date: new Date("2024-07-31"), value: 816.7 },
          { date: new Date("2024-09-30"), value: 850.0 },
          { date: new Date("2024-11-30"), value: 825.0 },
        ],
      },
      {
        name: AirConditionIndicators.CO2_EMISSIONS,
        unit: "т/місяць",
        values: [
          { date: new Date("2024-02-28"), value: 8.3 },
          { date: new Date("2024-05-31"), value: 8.2 },
          { date: new Date("2024-08-31"), value: 8.5 },
          { date: new Date("2024-11-30"), value: 8.3 },
        ],
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 2.9 },
          { date: new Date("2024-04-30"), value: 2.8 },
          { date: new Date("2024-07-31"), value: 3.0 },
          { date: new Date("2024-10-31"), value: 2.9 },
        ],
      },
    ],
  },
];

export const INDUSTRIAL_FACILITIES_LAB_3: IndustrialFacilitiesDataLab3[] = [
  {
    id: 1,
    position: [50.45268, 30.441119],
    name: "ПАТ Науково-виробниче підприємство 'Більшовик'",
    description:
      "Машинобудівне підприємство. Викиди пилу та промислових газів.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      {
        name: AirConditionIndicators.CO2_EMISSIONS,
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 12.5 },
          { date: new Date("2024-04-30"), value: 12.1 },
          { date: new Date("2024-07-31"), value: 12.9 },
          { date: new Date("2024-10-31"), value: 12.3 },
        ],
      },
      {
        name: AirConditionIndicators.NOX_EMISSIONS,
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 3.3 },
          { date: new Date("2024-04-30"), value: 3.2 },
          { date: new Date("2024-07-31"), value: 3.5 },
          { date: new Date("2024-10-31"), value: 3.3 },
        ],
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 1.7 },
          { date: new Date("2024-04-30"), value: 1.8 },
          { date: new Date("2024-07-31"), value: 1.6 },
          { date: new Date("2024-10-31"), value: 1.8 },
        ],
      },
      {
        name: AirConditionIndicators.EFFICIENCY,
        unit: "%",
        values: [
          { date: new Date("2024-01-31"), value: 70 },
          { date: new Date("2024-04-30"), value: 72 },
          { date: new Date("2024-07-31"), value: 68 },
          { date: new Date("2024-10-31"), value: 71 },
        ],
      },
    ],
    slug: "ПАТ Науково-виробниче підприємство 'Більшовик'"
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-zа-яіїєґ0-9-]/gi, ""),
  },
  {
    id: 2,
    position: [50.390327, 30.662176],
    name: "Завод Енергія",
    description: "Спалює тверді побутові відходи. Викиди CO₂, NOₓ, діоксинів.",
    monitoringSubsystem: MonitoringSubsystem.AIR_CONDITION,
    indicators: [
      {
        name: AirConditionIndicators.CO2_EMISSIONS,
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 8.0 },
          { date: new Date("2024-04-30"), value: 4.2 },
          { date: new Date("2024-07-31"), value: 6.8 },
          { date: new Date("2024-10-31"), value: 8.6 },
        ],
      },
      {
        name: AirConditionIndicators.DIOXINS_EMISSIONS,
        unit: "кг/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 416.7 },
          { date: new Date("2024-04-30"), value: 420.0 },
          { date: new Date("2024-07-31"), value: 433.3 },
          { date: new Date("2024-10-31"), value: 408.3 },
        ],
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 4.2 },
          { date: new Date("2024-04-30"), value: 4.0 },
          { date: new Date("2024-07-31"), value: 4.3 },
          { date: new Date("2024-10-31"), value: 4.1 },
        ],
      },
      {
        name: AirConditionIndicators.EFFICIENCY,
        unit: "%",
        values: [
          { date: new Date("2024-01-31"), value: 85 },
          { date: new Date("2024-04-30"), value: 83 },
          { date: new Date("2024-07-31"), value: 86 },
          { date: new Date("2024-10-31"), value: 84 },
        ],
      },
    ],
    slug: "Завод Енергія"
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-zа-яіїєґ0-9-]/gi, ""),
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
        unit: "мкЗв/год",
        values: [
          { date: new Date("2024-01-31"), value: 0.12 },
          { date: new Date("2024-04-30"), value: 0.11 },
          { date: new Date("2024-07-31"), value: 0.13 },
          { date: new Date("2024-10-31"), value: 0.12 },
        ],
      },
      {
        name: RadiationBackgroundIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 2.5 },
          { date: new Date("2024-04-30"), value: 2.3 },
          { date: new Date("2024-07-31"), value: 2.7 },
          { date: new Date("2024-10-31"), value: 2.4 },
        ],
      },
      {
        name: RadiationBackgroundIndicators.EFFICIENCY,
        unit: "%",
        values: [
          { date: new Date("2024-01-31"), value: 90 },
          { date: new Date("2024-04-30"), value: 88 },
          { date: new Date("2024-07-31"), value: 91 },
          { date: new Date("2024-10-31"), value: 89 },
        ],
      },
    ],
    slug: "Інститут ядерних досліджень НАН України"
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-zа-яіїєґ0-9-]/gi, ""),
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
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 8.3 },
          { date: new Date("2024-03-31"), value: 7.9 },
          { date: new Date("2024-05-31"), value: 8.8 },
          { date: new Date("2024-08-31"), value: 8.2 },
          { date: new Date("2024-10-31"), value: 8.5 },
        ],
      },
      {
        name: AirConditionIndicators.CO2_EMISSIONS,
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 16.7 },
          { date: new Date("2024-03-31"), value: 16.3 },
          { date: new Date("2024-05-31"), value: 17.1 },
          { date: new Date("2024-08-31"), value: 16.5 },
        ],
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 3.3 },
          { date: new Date("2024-03-31"), value: 3.2 },
          { date: new Date("2024-05-31"), value: 3.5 },
          { date: new Date("2024-08-31"), value: 3.3 },
        ],
      },
      {
        name: AirConditionIndicators.EFFICIENCY,
        unit: "%",
        values: [
          { date: new Date("2024-01-31"), value: 75 },
          { date: new Date("2024-03-31"), value: 73 },
          { date: new Date("2024-05-31"), value: 76 },
          { date: new Date("2024-08-31"), value: 74 },
        ],
      },
    ],
    slug: "Київський картонно-паперовий комбінат"
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-zа-яіїєґ0-9-]/gi, ""),
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
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 1.7 },
          { date: new Date("2024-03-31"), value: 8.0 },
          { date: new Date("2024-05-31"), value: 6.3 },
          { date: new Date("2024-07-31"), value: 8.8 },
          { date: new Date("2024-09-30"), value: 5.5 },
          { date: new Date("2024-11-30"), value: 8.3 },
        ],
      },
      {
        name: AirConditionIndicators.SO2_EMISSIONS,
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 4.2 },
          { date: new Date("2024-03-31"), value: 4.0 },
          { date: new Date("2024-05-31"), value: 4.3 },
          { date: new Date("2024-07-31"), value: 4.1 },
        ],
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 5.0 },
          { date: new Date("2024-03-31"), value: 4.8 },
          { date: new Date("2024-05-31"), value: 5.2 },
          { date: new Date("2024-07-31"), value: 4.9 },
        ],
      },
      {
        name: AirConditionIndicators.EFFICIENCY,
        unit: "%",
        values: [
          { date: new Date("2024-01-31"), value: 80 },
          { date: new Date("2024-03-31"), value: 78 },
          { date: new Date("2024-05-31"), value: 81 },
          { date: new Date("2024-07-31"), value: 79 },
        ],
      },
    ],
    slug: "Станція теплопостачання №1 (СТ-1, раніше ТЕЦ-3)"
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-zа-яіїєґ0-9-]/gi, ""),
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
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 2.3 },
          { date: new Date("2024-02-28"), value: 8.7 },
          { date: new Date("2024-03-31"), value: 7.0 },
          { date: new Date("2024-04-30"), value: 8.5 },
          { date: new Date("2024-05-31"), value: 5.2 },
          { date: new Date("2024-07-31"), value: 7.9 },
          { date: new Date("2024-08-31"), value: 9.8 },
          { date: new Date("2024-09-30"), value: 5.1 },
          { date: new Date("2024-10-31"), value: 6.6 },
          { date: new Date("2024-11-30"), value: 9.3 },
        ],
      },
      {
        name: AirConditionIndicators.NOX_EMISSIONS,
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 8.3 },
          { date: new Date("2024-02-28"), value: 7.9 },
          { date: new Date("2024-03-31"), value: 8.8 },
          { date: new Date("2024-04-30"), value: 8.2 },
        ],
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 6.7 },
          { date: new Date("2024-02-28"), value: 6.5 },
          { date: new Date("2024-03-31"), value: 6.8 },
          { date: new Date("2024-04-30"), value: 6.6 },
        ],
      },
      {
        name: AirConditionIndicators.EFFICIENCY,
        unit: "%",
        values: [
          { date: new Date("2024-01-31"), value: 85 },
          { date: new Date("2024-02-28"), value: 83 },
          { date: new Date("2024-03-31"), value: 86 },
          { date: new Date("2024-04-30"), value: 84 },
        ],
      },
    ],
    slug: "Дарницька ТЕЦ"
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-zа-яіїєґ0-9-]/gi, ""),
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
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 6.3 },
          { date: new Date("2024-02-28"), value: 8.7 },
          { date: new Date("2024-03-31"), value: 6.0 },
          { date: new Date("2024-04-30"), value: 7.5 },
          { date: new Date("2024-05-31"), value: 8.2 },
          { date: new Date("2024-06-30"), value: 9.9 },
          { date: new Date("2024-07-31"), value: 5.8 },
        ],
      },
      {
        name: AirConditionIndicators.NOX_EMISSIONS,
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 12.5 },
          { date: new Date("2024-02-28"), value: 12.1 },
          { date: new Date("2024-04-30"), value: 12.9 },
          { date: new Date("2024-05-31"), value: 12.3 },
        ],
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 8.3 },
          { date: new Date("2024-02-28"), value: 8.2 },
          { date: new Date("2024-04-30"), value: 8.5 },
          { date: new Date("2024-05-31"), value: 8.3 },
        ],
      },
      {
        name: AirConditionIndicators.EFFICIENCY,
        unit: "%",
        values: [
          { date: new Date("2024-01-31"), value: 90 },
          { date: new Date("2024-02-28"), value: 88 },
          { date: new Date("2024-04-30"), value: 91 },
          { date: new Date("2024-05-31"), value: 89 },
        ],
      },
    ],
    slug: "ТЕЦ-6"
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-zа-яіїєґ0-9-]/gi, ""),
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
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 5.0 },
          { date: new Date("2024-03-31"), value: 6.3 },
          { date: new Date("2024-05-31"), value: 8.7 },
          { date: new Date("2024-07-31"), value: 8.2 },
          { date: new Date("2024-09-30"), value: 9.8 },
        ],
      },
      {
        name: AirConditionIndicators.NOX_EMISSIONS,
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 10.0 },
          { date: new Date("2024-03-31"), value: 9.6 },
          { date: new Date("2024-05-31"), value: 10.4 },
          { date: new Date("2024-07-31"), value: 9.8 },
          { date: new Date("2024-09-30"), value: 12.8 },
        ],
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 7.5 },
          { date: new Date("2024-03-31"), value: 7.3 },
          { date: new Date("2024-05-31"), value: 7.7 },
          { date: new Date("2024-07-31"), value: 7.4 },
          { date: new Date("2024-09-30"), value: 12.8 },
        ],
      },
      {
        name: AirConditionIndicators.EFFICIENCY,
        unit: "%",
        values: [
          { date: new Date("2024-01-31"), value: 88 },
          { date: new Date("2024-03-31"), value: 86 },
          { date: new Date("2024-05-31"), value: 89 },
          { date: new Date("2024-07-31"), value: 87 },
        ],
      },
    ],
    slug: "ТЕЦ-5. КП 'КИЇВТЕПЛОЕНЕРГО'"
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-zа-яіїєґ0-9-]/gi, ""),
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
        unit: "мкЗв/год",
        values: [
          { date: new Date("2024-01-10"), value: 0.15 },
          { date: new Date("2024-02-15"), value: 0.14 },
          { date: new Date("2024-03-20"), value: 0.16 },
          { date: new Date("2024-04-25"), value: 0.15 },
          { date: new Date("2024-05-30"), value: 0.14 },
          { date: new Date("2024-06-30"), value: 0.15 },
          { date: new Date("2024-07-31"), value: 0.16 },
          { date: new Date("2024-08-31"), value: 0.15 },
        ],
      },
      {
        name: RadiationBackgroundIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-01-10"), value: 2.1 },
          { date: new Date("2024-02-15"), value: 2.0 },
          { date: new Date("2024-03-20"), value: 2.2 },
          { date: new Date("2024-04-25"), value: 2.0 },
        ],
      },
      {
        name: RadiationBackgroundIndicators.EFFICIENCY,
        unit: "%",
        values: [
          { date: new Date("2024-01-10"), value: 92 },
          { date: new Date("2024-02-15"), value: 90 },
          { date: new Date("2024-03-20"), value: 93 },
          { date: new Date("2024-04-25"), value: 91 },
        ],
      },
    ],
    slug: "АТ 'Київський вітамінний завод'"
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-zа-яіїєґ0-9-]/gi, ""),
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
        unit: "кг/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 3.3 },
          { date: new Date("2024-03-31"), value: 5.7 },
          { date: new Date("2024-05-31"), value: 4.0 },
          { date: new Date("2024-07-31"), value: 2.7 },
          { date: new Date("2024-09-30"), value: 4.0 },
          { date: new Date("2024-11-30"), value: 5.0 },
        ],
      },
      {
        name: AirConditionIndicators.CO2_EMISSIONS,
        unit: "т/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 8.3 },
          { date: new Date("2024-03-31"), value: 8.2 },
          { date: new Date("2024-05-31"), value: 8.5 },
          { date: new Date("2024-11-30"), value: 8.3 },
        ],
      },
      {
        name: AirConditionIndicators.ENERGY_CONSUMPTION,
        unit: "МВт/місяць",
        values: [
          { date: new Date("2024-01-31"), value: 2.9 },
          { date: new Date("2024-03-31"), value: 2.8 },
          { date: new Date("2024-05-31"), value: 3.0 },
          { date: new Date("2024-11-30"), value: 2.9 },
        ],
      },
    ],
    slug: "Дарницький вагоноремонтний завод"
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-zа-яіїєґ0-9-]/gi, ""),
  },
];
