import React, { FC, useEffect, useMemo, useState } from "react";
import cn from "classnames";
import "leaflet/dist/leaflet.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getHeatmapColor } from "src/utils/getHeatmapColor";
import {
  AirConditionIndicators,
  AllIndicatorLimits,
  AllIndicators,
  IndicatorLab2,
  IndustrialFacilitiesDataLab2,
  MonitoringSubsystem,
  RadiationBackgroundIndicators,
} from "src/@types/industrial-facilities";

const MIN_RANGE_DISTANCE = 10;

export const PopupDetail: FC<IndustrialFacilitiesDataLab2> = ({
  name,
  description,
  monitoringSubsystem,
  indicators,
}) => {
  const chartColor =
    monitoringSubsystem === MonitoringSubsystem.RADIATION_BACKGROUND
      ? "#FF5733"
      : "#4CAF50";

  const [selectedIndicatorName, setSelectedIndicatorName] = useState(
    indicators[0].name
  );
  const [dateRange, setDateRange] = useState<[number, number]>([0, 100]);

  const selectedIndicator = indicators.find(
    (item) => item.name === selectedIndicatorName
  );

  const allDates = useMemo(() => {
    if (!selectedIndicator) return [];
    return selectedIndicator.values
      .map((item) => new Date(item.date).getTime())
      .sort((a, b) => a - b);
  }, [selectedIndicator]);

  useEffect(() => {
    if (allDates.length > 0) {
      setDateRange([0, 100]);
    }
  }, [selectedIndicatorName, allDates]);

  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      const [start, end] = value;

      if (end - start < MIN_RANGE_DISTANCE) {
        if (dateRange[0] !== start) {
          setDateRange([start, start + MIN_RANGE_DISTANCE]);
        } else {
          setDateRange([end - MIN_RANGE_DISTANCE, end]);
        }
      } else {
        setDateRange([start, end]);
      }
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("uk-UA", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Filter data based on selected date range
  const filteredData = useMemo(() => {
    if (!selectedIndicator || allDates.length === 0) return [];

    const minDate = allDates[0];
    const maxDate = allDates[allDates.length - 1];
    const rangeStart = minDate + (dateRange[0] / 100) * (maxDate - minDate);
    const rangeEnd = minDate + (dateRange[1] / 100) * (maxDate - minDate);

    return selectedIndicator.values
      .filter((item) => {
        const itemDate = new Date(item.date).getTime();
        return itemDate >= rangeStart && itemDate <= rangeEnd;
      })
      .map((item) => ({
        ...item,
        date: formatDate(item.date.toString()),
        formattedValue: `${item.value} ${selectedIndicator?.unit}`,
      }));
  }, [selectedIndicator, dateRange, allDates]);

  const handleSelectIndicatorName = (
    name: AirConditionIndicators | RadiationBackgroundIndicators
  ) => {
    setSelectedIndicatorName(name);
  };

  const formatSliderDate = (percent: number) => {
    if (allDates.length === 0) return "";
    const minDate = allDates[0];
    const maxDate = allDates[allDates.length - 1];
    const date = new Date(minDate + (percent / 100) * (maxDate - minDate));
    return formatDate(date.toString());
  };

  function normalize(name: AllIndicators, values: number[]): number[] {
    const { min, max } = AllIndicatorLimits[name];
    return values.map((value) => (value - min) / (max - min));
  }

  function calculateIndexesByDate(indicators: IndicatorLab2[]) {
    const result: { date: Date; index: number | string }[] = [];

    const allDates = Array.from(
      new Set(
        indicators.flatMap((indicator) =>
          indicator.values.map((v) => v.date.toISOString())
        )
      )
    ).map((dateStr) => new Date(dateStr));

    allDates.forEach((date) => {
      const normalizedValues: number[] = [];

      indicators.forEach((indicator) => {
        const value = indicator.values.find(
          (v) => v.date.getTime() === date.getTime()
        );

        if (value !== undefined) {
          const normalized = normalize(indicator.name as AllIndicators, [
            value.value,
          ]);
          normalizedValues.push(normalized[0]);
        }
      });

      if (normalizedValues.length === indicators.length) {
        const index =
          normalizedValues.reduce((sum, val) => sum + val, 0) /
          normalizedValues.length;
        result.push({ date, index });
      } else {
        result.push({ date, index: "Неможливо обчислити" });
      }
    });

    return result;
  }

  const indexes = calculateIndexesByDate(indicators);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-lg font-bold">{name}</span>
      <span className="text-sm text-gray-600">{description}</span>
      <span className="text-sm">
        <strong>Підсистема моніторингу:</strong> {monitoringSubsystem}
      </span>

      <div className="mt-2">
        <span className="font-semibold">Показники:</span>
        <ul className="flex list-disc flex-col gap-2 pl-4">
          {indicators.map(({ name, unit }, index) => (
            <li key={index} className="flex justify-between text-sm">
              <div>
                <strong>{name}</strong> ({unit})
              </div>
              <button
                className={cn(
                  "rounded-md bg-blue-300 px-1 py-0.5 text-white transition duration-300 hover:cursor-pointer hover:bg-blue-400",
                  {
                    "bg-blue-400 hover:!cursor-auto":
                      selectedIndicatorName === name,
                  }
                )}
                onClick={() => handleSelectIndicatorName(name)}
                disabled={selectedIndicatorName === name}
              >
                Обрати
              </button>
            </li>
          ))}
        </ul>
      </div>
      <li className="flex items-center justify-between text-lg">
        <span>Дата</span>
        <span>Індекс</span>
      </li>

      {indexes.map(({ date, index }) => {
        return (
          <li
            key={date.toISOString()}
            className="flex items-center justify-between text-sm"
          >
            <span>{date.toLocaleDateString()}</span>

            <span
              className="p-2 text-white"
              style={{
                background: getHeatmapColor(index, 1),
              }}
            >
              {typeof index === "number" ? index.toFixed(2) : index}
            </span>
          </li>
        );
      })}

      <div className="mt-4">
        <span className="font-semibold">Обраний показник:</span>
        {selectedIndicatorName} ({selectedIndicator?.unit})
      </div>

      {allDates.length > 0 && (
        <div className="mt-4">
          <div className="mb-2 flex justify-between text-xs text-gray-600">
            <span>{formatSliderDate(dateRange[0])}</span>
            <span>{formatSliderDate(dateRange[1])}</span>
          </div>
          <Slider
            range
            min={0}
            max={100}
            value={dateRange}
            onChange={handleSliderChange}
            allowCross={false}
            pushable={MIN_RANGE_DISTANCE}
          />
        </div>
      )}

      {filteredData.length !== 0 ? (
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={filteredData}>
            <CartesianGrid stroke="#E0E0E0" strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12 }}
              label={{
                value: "Дата",
                position: "insideBottomRight",
                offset: -5,
              }}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              label={{
                value: selectedIndicator?.unit || "",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#fff", borderRadius: "5px" }}
              formatter={(value) => [
                `${value} ${selectedIndicator?.unit}`,
                selectedIndicatorName,
              ]}
              labelFormatter={(date) => `Дата: ${date}`}
            />
            <Legend
              formatter={() =>
                `${selectedIndicatorName} (${selectedIndicator?.unit})`
              }
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={chartColor}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name={selectedIndicatorName}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex items-center justify-center rounded-lg bg-gray-50">
          <p className="text-center">
            Немає даних для обраного періоду <br />
            {formatSliderDate(dateRange[0])} - {formatSliderDate(dateRange[1])}
          </p>
        </div>
      )}
    </div>
  );
};
