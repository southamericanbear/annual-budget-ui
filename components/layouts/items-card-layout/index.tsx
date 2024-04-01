"use client";

interface ItemsCardLayoutProps {
  className?: string;
  children: React.ReactNode;
}

const ItemsCardLayout = ({ children, className }: ItemsCardLayoutProps) => {
  return (
    <div
      className={` bg-white p-3 rounded-md shadow-sm ${className ?? className}`}
    >
      {children}
    </div>
  );
};

export default ItemsCardLayout;
