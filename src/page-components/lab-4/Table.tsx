import React, { useEffect, useState } from "react";
import {
  AlignmentType,
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";
import { saveAs } from "file-saver";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as XLSX from "xlsx";
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

const CLASSNAME_FILED = "flex gap-5 items-center";
const STORAGE_KEY = "eco_measures";

interface IEcoMeasure {
  company: string;
  slug_company: string;
  name: string;
  type: string;
  amount: string;
  date: string;
  effect: string;
  source: string;
  executor: string;
}

export const EcoMeasureTable = () => {
  const [ecoMeasures, setEcoMeasures] = useState<IEcoMeasure[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [isAddFromShown, setIsAddFromShown] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ecoMeasures));
  }, [ecoMeasures]);

  const { getQueryParam, setQueryParam, setMultipleQueryParams } =
    useQueryParams();

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

  const handlResetFilter = () => {
    setMultipleQueryParams({
      [QueryParamKeys.TYPE_MONITORING]: TYPE_MONITORING[0].value,
      [QueryParamKeys.COMPANY]: ALL_COMPANIES[0].value,
    });
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
    type: "",
    company: "",
    amount: "",
    date: "",
    effect: "",
    source: "",
    executor: "",
  };

  const [currentFormValues, setCurrentFormValues] =
    useState<typeof initialValues>(initialValues);

  const [editedIndex, setEditedIndex] = useState<number>(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Це поле обов'язкове"),
    amount: Yup.string().required("Це поле обов'язкове"),
    date: Yup.date().required("Це поле обов'язкове"),
    effect: Yup.string().required("Це поле обов'язкове"),
    source: Yup.string().required("Це поле обов'язкове"),
    executor: Yup.string().required("Це поле обов'язкове"),
    type: Yup.string().required("Це поле обов'язкове"),
    company: Yup.string().required("Це поле обов'язкове"),
  });

  const onSubmit = (values: typeof initialValues, { resetForm }) => {
    const companyData = INDUSTRIAL_FACILITIES_LAB_3.find(
      (c) => c.slug === values.company
    );

    const newMeasure = {
      ...values,
      company: companyData?.name || "",
      slug_company: values.company,
    };

    let updated;

    if (editedIndex !== null) {
      // редагування
      updated = ecoMeasures.map((item, index) =>
        index === editedIndex ? newMeasure : item
      );
    } else {
      // додавання
      updated = [...ecoMeasures, newMeasure];
    }

    setEcoMeasures(updated);
    resetForm();
    setIsAddFromShown(false);
    setEditedIndex(null);
  };

  const handleExportWord = async () => {
    const tableRows = [
      // Заголовки таблиці
      new TableRow({
        tableHeader: true,
        children: [
          new TableCell({ children: [new Paragraph("№")] }),
          new TableCell({ children: [new Paragraph("Назва")] }),
          new TableCell({ children: [new Paragraph("Тип")] }),
          new TableCell({ children: [new Paragraph("Підприємство")] }),
          new TableCell({ children: [new Paragraph("Сума")] }),
          new TableCell({ children: [new Paragraph("Дата")] }),
          new TableCell({ children: [new Paragraph("Ефект")] }),
          new TableCell({ children: [new Paragraph("Джерело")] }),
          new TableCell({ children: [new Paragraph("Виконавець")] }),
        ],
      }),

      // Дані з ecoMeasures
      ...ecoMeasures.map(
        (measure, i) =>
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph(String(i + 1))] }),
              new TableCell({ children: [new Paragraph(measure.name)] }),
              new TableCell({ children: [new Paragraph(measure.type)] }),
              new TableCell({ children: [new Paragraph(measure.company)] }),
              new TableCell({
                children: [new Paragraph(String(measure.amount))],
              }),
              new TableCell({ children: [new Paragraph(measure.date)] }),
              new TableCell({
                children: [new Paragraph(String(measure.effect))],
              }),
              new TableCell({
                children: [new Paragraph(String(measure.source))],
              }),
              new TableCell({
                children: [new Paragraph(String(measure.executor))],
              }),
            ],
          })
      ),
    ];

    const doc = new Document({
      sections: [
        {
          children: [
            // Заголовок по центру
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "Еко заходи",
                  bold: true,
                  size: 32,
                }),
              ],
            }),
            new Paragraph({ text: "", spacing: { after: 200 } }), // Відступ перед таблицею

            // Таблиця
            new Table({
              rows: tableRows,
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "eco_measures.docx");
  };

  const handleExportExcel = () => {
    const renamedData = ecoMeasures.map((item) => ({
      Назва: item.name,
      Тип: item.type,
      Підприємство: item.company,
      Сума: item.amount,
      Дата: item.date,
      Ефект: item.effect,
      Джерело: item.source,
      Виконавець: item.executor,
    }));

    const ws = XLSX.utils.json_to_sheet(renamedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "EcoMeasures");

    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([wbout], { type: "application/octet-stream" });

    saveAs(blob, "eco_measures.xlsx");
  };

  const handleOpenAddForm = () => {
    setIsAddFromShown(true);
  };

  const handleDelete = (index: number) => {
    const updated = ecoMeasures.filter((_, i) => i !== index);
    setEcoMeasures(updated);
  };

  const handleEdit = (index: number) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { company, slug_company, ...ecoMeasure } = ecoMeasures[index];
    setEditedIndex(index);
    setCurrentFormValues({ company: slug_company, ...ecoMeasure });
    handleOpenAddForm();
  };

  return (
    <section className="container flex flex-col gap-10 !overflow-visible">
      <div className="flex justify-between">
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

          <button
            className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-lg hover:cursor-pointer"
            onClick={handlResetFilter}
          >
            Скинути фільтри
          </button>
        </div>

        <div className="flex gap-5">
          <button
            className="flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-600 px-3.5 py-2 text-lg text-white hover:cursor-pointer"
            onClick={handleExportWord}
          >
            <i className="fas fa-file-word text-white" />
            Word
          </button>
          <button
            className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-600 px-3.5 py-2 text-lg text-white hover:cursor-pointer"
            onClick={handleExportExcel}
          >
            <i className="fas fa-file-excel text-white" />
            Excel
          </button>

          <button
            className="flex items-center gap-2 rounded-xl border border-cyan-200 bg-cyan-600 px-3.5 py-2 text-lg text-white hover:cursor-pointer"
            onClick={handleOpenAddForm}
          >
            <i className="fas fa-plus text-white" />
            Додати захід
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-gray-400">
        <div className="rounded-x-xl grid grid-cols-9 gap-4 rounded-t-xl bg-gray-200 p-5 text-lg font-semibold">
          <span>Назва</span>
          <span>Тип</span>
          <span>Підприємство</span>
          <span>Сума</span>
          <span>Дата проведення</span>
          <span>Ефект</span>
          <span>Джерело</span>
          <span>Виконавець</span>
        </div>

        {visibleEcoMeasures.length !== 0 ? (
          visibleEcoMeasures.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-9 gap-4 border-t border-gray-300 bg-white px-5 py-3 text-sm text-gray-800 last:rounded-b-xl"
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
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleEdit(index)}
                  className="h-max rounded bg-yellow-500 px-2 py-1 text-white hover:cursor-pointer hover:bg-yellow-600"
                  title="Редагувати"
                >
                  ✏️
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(index)}
                  className="h-max rounded bg-red-500 px-2 py-1 text-white hover:cursor-pointer hover:bg-red-600"
                  title="Видалити"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="grid grid-cols-9 gap-4 border-t border-gray-300 bg-white px-5 py-3 text-sm text-gray-800 last:rounded-b-xl">
            <div className="col-span-9 flex items-center justify-center py-6 text-center text-sm text-gray-500 italic">
              Немає доданих заходів для відображення
            </div>
          </div>
        )}
      </div>

      {isAddFromShown && (
        <Formik
          initialValues={currentFormValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize={true}
        >
          <Form className="grid grid-cols-2 gap-4 rounded-lg border border-gray-400 bg-white p-5">
            <div className={CLASSNAME_FILED}>
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

            <div className={CLASSNAME_FILED}>
              <label htmlFor="type">Тип</label>
              <Field
                as="select"
                id="type"
                name="type"
                className="rounded-lg border border-gray-300 p-2"
              >
                <option value="" disabled hidden>
                  -- Оберіть тип моніторингу --
                </option>
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

            <div className={CLASSNAME_FILED}>
              <label htmlFor="company">Підприємство</label>
              <Field
                as="select"
                id="company"
                name="company"
                className="rounded-lg border border-gray-300 p-2"
              >
                <option value="" disabled hidden>
                  -- Оберіть підприємство --
                </option>
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

            <div className={CLASSNAME_FILED}>
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

            <div className={CLASSNAME_FILED}>
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

            <div className={CLASSNAME_FILED}>
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

            <div className={CLASSNAME_FILED}>
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

            <div className={CLASSNAME_FILED}>
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
              {editedIndex !== null ? "Редагувати захід" : "Додати захід"}
            </button>
          </Form>
        </Formik>
      )}
    </section>
  );
};
