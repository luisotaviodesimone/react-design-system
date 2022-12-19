import React from 'react';
import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

const Text = ({ children, size = 'md', asChild, className }: TextProps) => {
  const Comp = asChild ? Slot : 'span';

  return (
    <>
      <Comp
        className={clsx(
          'text-gray-100 font-sans',
          {
            'text-xs': size === 'sm',
            'text-sm': size === 'md',
            'text-md': size === 'lg',
          },
          className
        )}
      >
        {children}
      </Comp>
    </>
  );
};

export default Text;
