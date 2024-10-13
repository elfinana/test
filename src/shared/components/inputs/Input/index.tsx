import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  height?: string;
  className?: string;
  error?: boolean;
}
export default function Input({ width, height, className, error, ...props }: InputProps) {
  return (
    <input
      style={{ width: width ? width : '100%', height: height ? height : '38px' }}
      {...props}
      className={clsx(
        `placeholder:text-textPlaceholder rounded-8 border text-15 font-normal text-textPrimary ${error ? 'border-borderError' : 'border-borderSecondary'} focus:border-current`,
        className
      )}
    />
  );
}
