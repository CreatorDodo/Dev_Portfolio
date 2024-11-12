import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const PortfolioPageLayout: FC<Props> = ({ children }) => {
  return <div className="min-h-screen bg-gray-50">{children}</div>;
};

export default PortfolioPageLayout;
