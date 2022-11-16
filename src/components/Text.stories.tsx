import Text from './Text';
import { Meta, StoryObj } from '@storybook/react';
import { TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Hello World from Storybook',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    asChild: {
      table: { disable: true },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  },
};

export const CustomText: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <a href="https://google.com">Hello World from React Storybook</a>,
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
  },
};
