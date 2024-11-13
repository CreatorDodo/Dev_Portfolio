import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function PortfolioPageLayout({ children }: Props) {
  return <div className="min-h-screen bg-gray-50">{children}</div>;
}

export default PortfolioPageLayout;
