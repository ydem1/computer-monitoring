import React, { FC, useState } from "react";
import { PageWrapper } from "src/components/Layouts/PageWrapper";
import { MapSelectDropdownList } from "src/components/MapSelectDropdownList";
import {
  ALL_COMPANIES,
  TYPE_MONITORING,
} from "src/components/MapSelectDropdownList/constants";

const projects = [
  {
    name: "Встановлення сонячних панелей",
    type: "Забруднення атмосферного повітря",
    company: "Фокстрот",
    amount: "2,000,000 грн",
    date: "2025-12-31",
    effect: "Зниження викидів CO₂ на 20%",
    source: "Європейський грант",
    executor: "ТОВ «ЕкоБуд»",
  },
  {
    name: "Очищення стічних вод",
    type: "Забруднення водних ресурсів",
    company: "МХП",
    amount: "1,200,000 грн",
    date: "2025-06-19",
    effect: "Поліпшення якості води до санітарних норм",
    source: "Фонд охорони довкілля",
    executor: "КП «Водоканал»",
  },
];

const Lab4: FC = () => {
  const [activeCompany, setActiveCompany] = useState(ALL_COMPANIES[0]);
  const [activeType, setActiveType] = useState(TYPE_MONITORING[0]);

  return (
    <PageWrapper mainClassName="pt-25 pb-10">
      <section className="container !overflow-visible">
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
          <div className="grid grid-cols-8 gap-4 p-5 text-lg font-semibold text-gray-500">
            <span>Назва</span>
            <span>Тип</span>
            <span>Підприємство</span>
            <span>Сума</span>
            <span>Дата проведення</span>
            <span>Ефект</span>
            <span>Джерело</span>
            <span>Виконавець</span>
          </div>
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-8 gap-4 border-t border-gray-300 px-5 py-3 text-sm text-gray-800"
            >
              <span>{project.name}</span>
              <span>
                <span className="rounded-xl bg-blue-100 px-2 py-1 text-xs text-blue-700">
                  {project.type}
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
    </PageWrapper>
  );
};

export default Lab4;
