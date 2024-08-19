export interface InputProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  isError?: boolean;
  onChange: (value: string) => void;
  onFocus: () => void;
}
