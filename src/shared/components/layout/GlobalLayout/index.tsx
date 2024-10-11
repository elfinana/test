import { ReactNode } from 'react';

interface GlobalLayoutProps {
  children: ReactNode;
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return <div className="max-w-[600px] w-full h-screen overflow-y-auto m-auto shadow-lg">{children}</div>;
}
