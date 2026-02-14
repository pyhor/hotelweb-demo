import { ReactNode } from 'react';

export default function RoomsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="rooms-layout">
      <main className="rooms-main">
        {children}
      </main>
    </div>
  );
}
