import { ReactNode } from 'react';

interface GlobalLayoutProps {
  children: ReactNode;
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return <div className="m-auto h-screen w-full max-w-[600px] overflow-y-auto shadow-lg">{children}</div>;
}
