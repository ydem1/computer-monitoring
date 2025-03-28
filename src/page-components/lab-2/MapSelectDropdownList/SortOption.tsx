import React, { FC } from "react";
import { IOptionSelect, SetOptionSelect } from "src/@types/option-select";

interface Props {
  option: IOptionSelect;
  setOption: SetOptionSelect;
}

export const SortOption: FC<Props> = ({ option, setOption }) => {
  const onClick = () => setOption(option);

  return (
    <li
      className=" hover:bg-gray-200 cursor-pointer rounded-xl px-2 py-2 text-lg"
      onClick={onClick}
    >
      {option.label}
    </li>
  );
};
