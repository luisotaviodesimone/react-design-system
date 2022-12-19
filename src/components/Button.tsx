import React from 'react';
import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

const Button = ({ children, asChild, className, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <>
      <Comp
        className={clsx(
          'text-gray-900 font-sans text-sm w-full transition-colors focus:ring-2 ring-white bg-cyan-500 px-4 py-3 hover:bg-cyan-300 rounded font-bold',
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    </>
  );
};

export default Button;
