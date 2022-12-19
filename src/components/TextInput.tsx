import React, { Children } from 'react';
import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import {} from 'phosphor-react';

export interface TextInputInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}
export interface TextInputRootProps {
  children: React.ReactNode;
}

export interface TextInputIconProps {
  children: React.ReactNode;
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div className="h-12 flex items-center rounded bg-gray-800 outline-none focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
};

const TextInputIcon = ({ children }: { children: React.ReactNode }) => (
  <Slot className="w-6 h-6 ml-4 text-gray-400">{children}</Slot>
);

const TextInputInput = (props: TextInputInputProps) => {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs outline-none py-4 pl-4 placeholder:text-gray-400"
      {...props}
    />
  );
};

export default {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
