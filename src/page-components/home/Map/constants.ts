import { IndustrialFacilitiesData } from "src/@types/industrial-facilities";

// Kyiv
export const CENTER_MAP: [number, number] = [50.45466, 30.5238];
export const ZOOM = 13;

export const IndustrialFacilities: IndustrialFacilitiesData[] = [
  {
    id: 1,
    position: [50.45268, 30.441119],
    name: "ПАТ Науково-виробниче підприємство 'Більшовик '",
    description:
      "Машинобудівне підприємство. Викиди пилу та промислових газів.",
    monitoringSubsystem: "Стан повітря",
    indicators: [
      { name: "Викиди CO₂", value: "150 т/рік" },
      { name: "Викиди NOₓ", value: "40 т/рік" },
      { name: "Енергоспоживання", value: "20 МВт/рік" },
      { name: "Ефективність", value: "70%" },
    ],
  },
  {
    id: 2,
    position: [50.390327, 30.662176],
    name: "Завод Енергія",
    description: "Спалює тверді побутові відходи. Викиди CO₂, NOₓ, діоксинів.",
    monitoringSubsystem: "Стан повітря",
    indicators: [
      { name: "Викиди CO₂", value: "300 т/рік" },
      { name: "Викиди діоксинів", value: "5 т/рік" },
      { name: "Енергоспоживання", value: "50 МВт/рік" },
      { name: "Ефективність", value: "85%" },
    ],
  },
  {
    id: 3,
    position: [50.386374, 30.531646],
    name: "Інститут ядерних досліджень НАН України",
    description:
      "Виконує дослідження з ядерної енергетики, потребує контролю радіаційного фону.",
    monitoringSubsystem: "Радіаційний фон",
    indicators: [
      { name: "Фонова доза", value: "0.12 мкЗв/год" },
      { name: "Енергоспоживання", value: "30 МВт/рік" },
      { name: "Ефективність", value: "90%" },
    ],
  },
  {
    id: 4,
    position: [50.135675, 30.668116],
    name: "Київський картонно-паперовий комбінат",
    description: "Переробка макулатури, значні викиди пилу в атмосферу.",
    monitoringSubsystem: "Стан повітря",
    indicators: [
      { name: "Викиди пилу", value: "100 т/рік" },
      { name: "Викиди CO₂", value: "200 т/рік" },
      { name: "Енергоспоживання", value: "40 МВт/рік" },
      { name: "Ефективність", value: "75%" },
    ],
  },
  {
    id: 5,
    position: [50.440586, 30.496291],
    name: "Станція теплопостачання №1 (СТ-1, раніше ТЕЦ-3)",
    description: "Забезпечує теплопостачання, викиди парникових газів.",
    monitoringSubsystem: "Стан повітря",
    indicators: [
      { name: "Викиди CO₂", value: "500 т/рік" },
      { name: "Викиди SO₂", value: "50 т/рік" },
      { name: "Енергоспоживання", value: "60 МВт/рік" },
      { name: "Ефективність", value: "80%" },
    ],
  },
  {
    id: 6,
    position: [50.446859, 30.642501],
    name: "Дарницька ТЕЦ",
    description: "Теплова електростанція. Основні викиди – CO₂, SO₂, NOₓ.",
    monitoringSubsystem: "Стан повітря",
    indicators: [
      { name: "Викиди CO₂", value: "700 т/рік" },
      { name: "Викиди NOₓ", value: "100 т/рік" },
      { name: "Енергоспоживання", value: "80 МВт/рік" },
      { name: "Ефективність", value: "85%" },
    ],
  },
  {
    id: 7,
    position: [50.529794, 30.66726],
    name: "ТЕЦ-6",
    description:
      "Найбільша ТЕЦ Києва, споживає природний газ, значні викиди CO₂.",
    monitoringSubsystem: "Стан повітря",
    indicators: [
      { name: "Викиди CO₂", value: "1000 т/рік" },
      { name: "Викиди NOₓ", value: "150 т/рік" },
      { name: "Енергоспоживання", value: "100 МВт/рік" },
      { name: "Ефективність", value: "90%" },
    ],
  },
  {
    id: 8,
    position: [50.397113, 30.567504],
    name: "ТЕЦ-5. КП 'КИЇВТЕПЛОЕНЕРГО'",
    description: "Забезпечує теплом Київ. Основні викиди – CO₂, NOₓ, SO₂.",
    monitoringSubsystem: "Стан повітря",
    indicators: [
      { name: "Викиди CO₂", value: "900 т/рік" },
      { name: "Викиди NOₓ", value: "120 т/рік" },
      { name: "Енергоспоживання", value: "90 МВт/рік" },
      { name: "Ефективність", value: "88%" },
    ],
  },
  {
    id: 9,
    position: [50.491009, 30.461835],
    name: "АТ 'Київський вітамінний завод'",
    description:
      "Хімічне виробництво, контроль викидів у повітря та можливих радіаційних матеріалів.",
    monitoringSubsystem: "Радіаційний фон",
    indicators: [
      { name: "Фонова доза", value: "0.15 мкЗв/год" },
      { name: "Енергоспоживання", value: "25 МВт/рік" },
      { name: "Ефективність", value: "92%" },
    ],
  },
  {
    id: 10,
    position: [50.449734, 30.682962],
    name: "Дарницький вагоноремонтний завод",
    description:
      "Виробництво та ремонт вагонів. Викиди важких металів та аерозолів у повітря.",
    monitoringSubsystem: "Стан повітря",
    indicators: [
      { name: "Викиди важких металів", value: "10 т/рік" },
      { name: "Викиди CO₂", value: "100 т/рік" },
      { name: "Енергоспоживання", value: "35 МВт/рік" },
      { name: "Ефективність", value: "78%" },
    ],
  },
];
