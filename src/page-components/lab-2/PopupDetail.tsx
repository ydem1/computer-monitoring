import React, { FC, useState } from "react";
import cn from "classnames";
import "leaflet/dist/leaflet.css";
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
import {
  AirConditionIndicators,
  IndustrialFacilitiesDataLab2,
  MonitoringSubsystem,
  RadiationBackgroundIndicators,
} from "src/@types/industrial-facilities";

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

  const selectedIndicator = indicators.find(
    (item) => item.name === selectedIndicatorName
  );

  const handleSelectIndicatorName = (
    name: AirConditionIndicators | RadiationBackgroundIndicators
  ) => {
    setSelectedIndicatorName(name);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("uk-UA", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const chartData = selectedIndicator?.values.map((item) => ({
    ...item,
    date: formatDate(item.date.toString()),
    formattedValue: `${item.value} ${selectedIndicator?.unit}`,
  }));

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

      <div className="mt-4">
        <span className="font-semibold">Обраний показник:</span>{" "}
        {selectedIndicatorName} ({selectedIndicator?.unit})
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <CartesianGrid stroke="#E0E0E0" strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            label={{ value: "Дата", position: "insideBottomRight", offset: -5 }}
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
    </div>
  );
};
