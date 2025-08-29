import React from 'react';

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className=' min-h-[500px] h-full flex flex-col items-center justify-start bg-gray-900 backdrop-blur-sm border hover:shadow-2xl 0 transform-border p-6 w-[60%] rounded-xl transition-all duration-300 '>
      {children}
    </div>
  );
};

export { Card };
