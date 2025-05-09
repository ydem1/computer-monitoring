import React from "react";
import { MapSelectDropdownList } from "src/components/MapSelectDropdownList";
import {
  ALL_COMPANIES,
  TYPE_MONITORING,
} from "src/components/MapSelectDropdownList/constants";
import { QueryParamKeys } from "src/components/MapSelectDropdownList/types";
import { useQueryParams } from "src/hooks/useQueryParams";
import { MonitoringSubsystem } from "src/@types/industrial-facilities";
import { IOptionSelect } from "src/@types/option-select";

export const Table = () => {
  const ecoMeasures = [
    {
      name: "Встановлення сонячних панелей",
      type: MonitoringSubsystem.RADIATION_BACKGROUND,
      company: "Фокстрот",
      slug_company: "завод-енергія",
      amount: "2,000,000 грн",
      date: "2025-12-31",
      effect: "Зниження викидів CO₂ на 20%",
      source: "Європейський грант",
      executor: "ТОВ «ЕкоБуд»",
    },
    {
      name: "Очищення стічних вод",
      type: MonitoringSubsystem.AIR_CONDITION,
      company: "МХП",
      slug_company: "пат-науково-виробниче-підприємство-більшовик",
      amount: "1,200,000 грн",
      date: "2025-06-19",
      effect: "Поліпшення якості води до санітарних норм",
      source: "Фонд охорони довкілля",
      executor: "КП «Водоканал»",
    },
  ];

  const { getQueryParam, setQueryParam } = useQueryParams();

  const activeCompany =
    ALL_COMPANIES.find(
      (company) => company.value === getQueryParam(QueryParamKeys.COMPANY)
    ) || ALL_COMPANIES[0];

  const setActiveCompany = (option: IOptionSelect) => {
    setQueryParam(QueryParamKeys.COMPANY, option.value);
  };

  const activeType =
    TYPE_MONITORING.find(
      (company) =>
        company.value === getQueryParam(QueryParamKeys.TYPE_MONITORING)
    ) || TYPE_MONITORING[0];

  const setActiveType = (option: IOptionSelect) => {
    setQueryParam(QueryParamKeys.TYPE_MONITORING, option.value);
  };

  const visibleEcoMeasures = ecoMeasures.filter((measure) => {
    const matchesCompany =
      activeCompany.value === "" ||
      measure.slug_company === activeCompany.value;

    const matchesType =
      activeType.value === "" || measure.type === activeType.value;

    return matchesCompany && matchesType;
  });

  return (
    <section className="container flex flex-col gap-10 !overflow-visible">
      <div className="flex gap-5">
        <MapSelectDropdownList
          options={ALL_COMPANIES}
          activeOption={activeCompany}
          setOption={setActiveCompany}
        />

        <MapSelectDropdownList
          options={TYPE_MONITORING}
          activeOption={activeType}
          setOption={setActiveType}
        />
      </div>

      <div className="rounded-xl border border-gray-400">
        <div className="rounded-x-xl grid grid-cols-8 gap-4 rounded-t-xl bg-gray-200 p-5 text-lg font-semibold">
          <span>Назва</span>
          <span>Тип</span>
          <span>Підприємство</span>
          <span>Сума</span>
          <span>Дата проведення</span>
          <span>Ефект</span>
          <span>Джерело</span>
          <span>Виконавець</span>
        </div>

        {visibleEcoMeasures.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-8 gap-4 border-t border-gray-300 px-5 py-3 text-sm text-gray-800"
          >
            <span>{project.name}</span>
            <span>
              <span className="rounded-xl bg-green-100 px-2 py-1 text-xs text-green-700">
                {project.type === MonitoringSubsystem.RADIATION_BACKGROUND
                  ? "Радіаційний фон"
                  : "Стан повітря"}
              </span>
            </span>
            <span>{project.company}</span>
            <span>{project.amount}</span>
            <span>{project.date}</span>
            <span>{project.effect}</span>
            <span>{project.source}</span>
            <span>{project.executor}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
