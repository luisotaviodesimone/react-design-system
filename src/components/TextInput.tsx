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

const TextInputIcon = ({ children }: { children: React.ReactNode }) => (
  <Slot className="w6 h6 text-gray-400"></Slot>
);

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div className="flex items-center gap-3 rounded bg-gray-800 outline-none focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
};

const TextInputInput = (props: TextInputInputProps) => {
  return (
    <input
      className="bg-transparent flex-1 outline-none py-4 px-3 text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  );
};

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
