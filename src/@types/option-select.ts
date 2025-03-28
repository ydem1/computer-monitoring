export interface IOptionSelect {
  value: string | number;
  label: string;
}

export type SetOptionSelect = (option: IOptionSelect) => void;
