import React, { FC } from "react";
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
  IndustrialFacilitiesDataLab2,
  MonitoringSubsystem,
} from "src/@types/industrial-facilities";

export const PopupDetail: FC<IndustrialFacilitiesDataLab2> = ({
  name,
  description,
  monitoringSubsystem,
  indicators,
  statistics,
}) => {
  const chartColor =
    monitoringSubsystem === MonitoringSubsystem.RADIATION_BACKGROUND
      ? "#FF5733"
      : "#4CAF50";

  return (
    <div className="flex flex-col gap-2">
      <span className="text-lg font-bold">{name}</span>
      <span className="text-sm text-gray-600">{description}</span>
      <span className="text-sm">
        <strong>Підсистема моніторингу:</strong> {monitoringSubsystem}
      </span>

      <div className="mt-2">
        <span className="font-semibold">Показники:</span>
        <ul className="list-disc pl-4">
          {indicators.map((indicator, index) => (
            <li key={index} className="text-sm">
              <strong>{indicator.name}:</strong> {indicator.value}{" "}
              {indicator.unit}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <span className="font-semibold">
          {monitoringSubsystem === MonitoringSubsystem.RADIATION_BACKGROUND
            ? "Рівень радіації (мкЗв/год)"
            : "Якість повітря (умовні одиниці)"}
        </span>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={statistics}>
          <CartesianGrid stroke="#E0E0E0" strokeDasharray="3 3" />
          <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#fff", borderRadius: "5px" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke={chartColor}
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
