export const getHeatmapColor = (value: number | string, maxValue: number) => {
  if (typeof value === "string") {
    return "#6B7280";
  }

  const ratio = Math.min(Math.max(value / maxValue, 0), 1);

  // Розрахунок червоного та зеленого компонентів
  const red = Math.round(255 * (1 - ratio));
  const green = Math.round(255 * ratio);

  return `rgb(${red}, ${green}, 0)`; // Від червоного до зеленого
};
