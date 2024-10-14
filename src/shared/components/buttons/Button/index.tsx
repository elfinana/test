import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  width?: string;
  height?: string;
  radius?: string;
}

export default function Button({ text, width, height, radius, ...props }: ButtonProps) {
  return (
    <button
      style={{
        width: width ? width : '100%',
        height: height ? height : '48px',
        borderRadius: radius ? radius : '8px',
      }}
      className="disabled:bg-bgDisabled disabled:border-borderDisabled disabled:text-textDisabled border border-primary bg-primary text-16 font-semibold text-white"
      {...props}
    >
      회원가입
    </button>
  );
}
