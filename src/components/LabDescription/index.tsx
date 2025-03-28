import React, { FC } from "react";

interface Props {
  name: string;
  theme: string;
  goal: string;
  task: string;
}

export const LabDescription: FC<Props> = ({ name, theme, goal, task }) => (
  <div className="flex flex-col gap-10">
    <h1 className="text-center">{name}</h1>

    <h2 className="text-center">{theme}</h2>

    <p className="rounded-lg bg-white p-4">
      <strong>Мета роботи:</strong> {goal}
      <br />
      <br />
      <strong> Завдання:</strong> {task}
    </p>
  </div>
);
