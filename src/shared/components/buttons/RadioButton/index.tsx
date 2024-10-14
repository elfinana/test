import { ButtonHTMLAttributes } from 'react';

interface RadioButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  width?: string;
  height?: string;
  active?: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick: () => void;
}

export default function RadioButton({ text, width, height, type, onClick, active }: RadioButtonProps) {
  return (
    <button
      type={type ? type : 'button'}
      style={{ width: width ? width : '100%', height: height ? height : '100%' }}
      className={`${active ? 'border-primary bg-bgPrimary' : 'border-borderSecondary bg-white'} rounded-12 border`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
