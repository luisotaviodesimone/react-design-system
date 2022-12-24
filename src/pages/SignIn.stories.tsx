import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import SignIn from './SignIn';

export default {
  title: 'Pages/Sign In',
  component: SignIn,
  args: {},
  argTypes: {},
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.type(
      canvas.getByPlaceholderText('Digite o seu email'),
      'luis.teste@teste.com'
    );

    userEvent.type(canvas.getByPlaceholderText('********'), 'password');

    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      return expect(canvas.getByText('Login Realizado!')).toBeInTheDocument();
    });
  },
};
