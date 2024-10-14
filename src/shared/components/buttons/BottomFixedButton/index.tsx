import { ReactNode } from 'react';

interface BottomFixedButtonProps {
  buttonComponent: ReactNode;
}

export default function BottomFixedButton({ buttonComponent }: BottomFixedButtonProps) {
  return <div className="fixed bottom-16 w-full px-16">{buttonComponent}</div>;
}
