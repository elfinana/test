import ErrorIcon from '@/shared/components/icons/ErrorIcon';
import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  height?: string;
  className?: string;
  error?: boolean;
}

// forwardRef를 사용하여 ref를 명시적으로 처리
const Input = forwardRef<HTMLInputElement, InputProps>(({ width, height, className, error, ...props }, ref) => {
  return (
    <div style={{ width: width ? width : '100%', height: height ? height : '38px' }} className="relative">
      <input
        {...props}
        ref={ref}
        className={clsx(
          `h-full w-full rounded-8 border text-15 font-normal text-textPrimary placeholder:text-textPlaceholder ${
            error ? 'border-borderError' : 'border-borderSecondary'
          } focus:border-current`,
          className
        )}
      />
      {error && (
        <div className="absolute right-10 top-1/2 -translate-y-1/2">
          <ErrorIcon />
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
