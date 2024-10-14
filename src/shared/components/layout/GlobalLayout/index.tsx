import { ReactNode } from 'react';

interface GlobalLayoutProps {
  children: ReactNode;
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return <div className="max-w-screen m-auto h-screen w-full overflow-y-auto shadow-lg">{children}</div>;
}
