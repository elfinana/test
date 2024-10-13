import { LabelHTMLAttributes } from 'react';

interface RequireTextProps extends LabelHTMLAttributes<HTMLLabelElement> {
  title: string;
  require?: boolean;
}

export default function Label({ title, require, ...props }: RequireTextProps) {
  return (
    <label className="relative text-16 font-semibold text-textSecondary" {...props}>
      {title}
      {require && <span className="text-warning absolute -right-11 top-1 text-14 font-medium">*</span>}
    </label>
  );
}
