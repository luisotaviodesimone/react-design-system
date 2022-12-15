import React from 'react';
import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputProps {}

const TextInput = ({}: TextInputProps) => {
  return (
    <>
      <input className={clsx('py-4 px-3 rounded bg-gray-800 text-gray-100 text-xs placeholder:text-gray-400')}></input>
    </>
  );
};

export default TextInput;
