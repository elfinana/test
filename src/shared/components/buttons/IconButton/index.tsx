import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  onClick: () => void;
}

export default function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <button
      className="flex h-48 w-48 items-center justify-center rounded-16 bg-white-54 shadow-sns-btn backdrop-blur-10"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
