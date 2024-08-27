import { ReactNode } from 'react';

export interface IBrandIconsProps {
  children?: ReactNode;
}

export const BrandIcon = ({
  children = <div className={`bg-grey-100 shadow w-2 h-4 animate-park-car`} />,
}: IBrandIconsProps) => {
  return (
    <div className="inline-block overflow-hidden">
      <div
        className={`flex items-center justify-center border-2 border-primary-500 w-5 h-7`}
      >
        {children}
      </div>
    </div>
  );
};
