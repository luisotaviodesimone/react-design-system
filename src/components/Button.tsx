import React from 'react';
import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
}

const Button = ({ children, asChild }: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <>
      <Comp
        className={clsx(
          'text-gray-900 font-sans text-sm w-full transition-colors focus:ring-2 ring-white bg-cyan-500 px-3 py-4 hover:bg-cyan-300 rounded font-bold'
        )}
      >
        {children}
      </Comp>
    </>
  );
};

export default Button;
