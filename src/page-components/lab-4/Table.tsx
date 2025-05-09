import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { INDUSTRIAL_FACILITIES_LAB_3 } from "src/components/Map/constants";
import { MapSelectDropdownList } from "src/components/MapSelectDropdownList";
import {
  ALL_COMPANIES,
  TYPE_MONITORING,
} from "src/components/MapSelectDropdownList/constants";
import { QueryParamKeys } from "src/components/MapSelectDropdownList/types";
import { useQueryParams } from "src/hooks/useQueryParams";
import { MonitoringSubsystem } from "src/@types/industrial-facilities";
import { IOptionSelect } from "src/@types/option-select";

const CLASNAME_FILED = "flex gap-5 items-center";

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

  // Форма для додавання заходу
  const initialValues = {
    name: "",
    type: MonitoringSubsystem.RADIATION_BACKGROUND,
    company: "",
    amount: "",
    date: "",
    effect: "",
    source: "",
    executor: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Це поле обов'язкове"),
    amount: Yup.string().required("Це поле обов'язкове"),
    date: Yup.date().required("Це поле обов'язкове"),
    effect: Yup.string().required("Це поле обов'язкове"),
    source: Yup.string().required("Це поле обов'язкове"),
    executor: Yup.string().required("Це поле обов'язкове"),
  });

  const onSubmit = (values: typeof initialValues) => {
    console.log(values);
    // Логіка для додавання заходу
  };

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
            className="grid grid-cols-8 gap-4 border-t border-gray-300 bg-white px-5 py-3 text-sm text-gray-800 last:rounded-b-xl"
          >
            <span>{project.name}</span>
            <span>
              <span className="rounded-xl bg-green-100 px-2 py-1 text-xs text-green-700">
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

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="grid grid-cols-2 gap-4 rounded-lg border border-gray-400 bg-white p-5">
          <div className={CLASNAME_FILED}>
            <label htmlFor="name">Назва заходу</label>
            <Field
              id="name"
              name="name"
              className="rounded-lg border border-gray-300 p-2"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className={CLASNAME_FILED}>
            <label htmlFor="type">Тип</label>
            <Field
              as="select"
              id="type"
              name="type"
              className="rounded-lg border border-gray-300 p-2"
            >
              <option value={MonitoringSubsystem.RADIATION_BACKGROUND}>
                Радіаційний фон
              </option>
              <option value={MonitoringSubsystem.AIR_CONDITION}>
                Стан повітря
              </option>
            </Field>
            <ErrorMessage
              name="type"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className={CLASNAME_FILED}>
            <label htmlFor="company">Підприємство</label>
            <Field
              as="select"
              id="company"
              name="company"
              className="rounded-lg border border-gray-300 p-2"
            >
              {INDUSTRIAL_FACILITIES_LAB_3.map(({ id, slug, name }) => (
                <option key={id} value={slug}>
                  {name}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="company"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className={CLASNAME_FILED}>
            <label htmlFor="amount">Сума</label>
            <Field
              id="amount"
              name="amount"
              className="rounded-lg border border-gray-300 p-2"
            />
            <ErrorMessage
              name="amount"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className={CLASNAME_FILED}>
            <label htmlFor="date">Дата проведення</label>
            <Field
              type="date"
              id="date"
              name="date"
              className="rounded-lg border border-gray-300 p-2"
            />
            <ErrorMessage
              name="date"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className={CLASNAME_FILED}>
            <label htmlFor="effect">Ефект</label>
            <Field
              id="effect"
              name="effect"
              className="rounded-lg border border-gray-300 p-2"
            />
            <ErrorMessage
              name="effect"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className={CLASNAME_FILED}>
            <label htmlFor="source">Джерело</label>
            <Field
              id="source"
              name="source"
              className="rounded-lg border border-gray-300 p-2"
            />
            <ErrorMessage
              name="source"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className={CLASNAME_FILED}>
            <label htmlFor="executor">Виконавець</label>
            <Field
              id="executor"
              name="executor"
              className="rounded-lg border border-gray-300 p-2"
            />
            <ErrorMessage
              name="executor"
              component="div"
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            className="col-span-1 mt-4 rounded-lg bg-blue-500 p-2 text-white hover:cursor-pointer hover:opacity-70"
          >
            Додати захід
          </button>
        </Form>
      </Formik>
    </section>
  );
};
