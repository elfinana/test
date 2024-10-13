import { ButtonHTMLAttributes } from 'react';

interface RadioButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  width?: string;
  height?: string;
  active?: boolean;
}

export default function RadioButton({ text, width, height, active }: RadioButtonProps) {
  return (
    <button
      style={{ width: width ? width : '100%', height: height ? height : '100%' }}
      className={`${active ? 'bg-bgPrimary border-primary' : 'border-borderSecondary bg-white'} rounded-12 border`}
    >
      {text}
    </button>
  );
}
