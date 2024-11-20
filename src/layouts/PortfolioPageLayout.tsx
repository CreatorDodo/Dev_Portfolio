import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function PortfolioPageLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="min-h-screen bg-white">
        <main className="container mx-auto max-w-6xl px-4 py-16">{children}</main>
      </div>
    </div>
  );
}

export default PortfolioPageLayout;
