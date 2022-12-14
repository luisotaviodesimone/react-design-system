import Checkbox from '../components/Checkbox';
import { Atom, Envelope, Lock } from 'phosphor-react';
import Button from '../components/Button';
import Heading from '../components/Heading';
import TextInput from '../components/TextInput';
import Text from '../components/Text';
import { useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';

interface FormData {
  email?: string;
  password?: string;
  isRememberMeChecked?: boolean | 'indeterminate';
}

const SignIn = () => {
  const [data, setData] = useState<FormData>({});
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // not enabled because of gh pages limitations
    // await axios.post('/sessions', data);

    setIsUserSignedIn(true);
  };

  const handleDataChange = (data: FormData) => {
    setData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8 px-4">
      <div className="w-full max-w-sm flex flex-col justify-center items-center gap-8">
        <header className="flex flex-col items-center">
          <Atom width={110} height={90} color="#9be1fb" />
          <Heading size="lg">Ignite Lab</Heading>
          <Text className="text-gray-400">Faça login e comece a usar</Text>
        </header>

        <form
          onSubmit={handleSignIn}
          className="flex flex-col justify-center items-center gap-8 w-full"
        >
          {isUserSignedIn && <Text>Login Realizado!</Text>}
          <div className="flex flex-col gap-4 w-full">
            <label htmlFor="email" className="flex flex-col gap-2">
              <Text className="font-semibold">Endereço de Email</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Envelope />
                </TextInput.Icon>
                <TextInput.Input
                  type="email"
                  placeholder="Digite o seu email"
                  onChange={(e) => handleDataChange({ email: e.target.value })}
                />
              </TextInput.Root>
            </label>

            <label htmlFor="password" className="flex flex-col gap-2">
              <Text className="font-semibold">Sua Senha</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Lock />
                </TextInput.Icon>
                <TextInput.Input
                  onChange={(e) =>
                    handleDataChange({ password: e.target.value })
                  }
                  type="password"
                  placeholder="********"
                />
              </TextInput.Root>
            </label>
          </div>

          <label
            htmlFor="remember"
            className="group flex gap-2 self-start cursor-pointer"
          >
            <Checkbox
              onCheckedChange={(isRememberMeChecked) =>
                handleDataChange({ isRememberMeChecked })
              }
              id="remember"
            />
            <Text
              size="sm"
              className="group-hover:text-cyan-300 transition-all"
            >
              Lembrar de mim por 30 dias
            </Text>
          </label>

          <div className="w-full">
            <Button className={clsx({
              'opacity-50 cursor-not-allowed': !(data.email && data.password),
            })} disabled={!(data.email && data.password)} type="submit">
              Entrar na plataforma
            </Button>
          </div>
        </form>

        <footer className="flex flex-col gap-4 items-center">
          <Text asChild size="sm">
            <a
              className="underline text-gray-400 hover:text-gray-200 transition-all"
              href="https://www.google.com/"
            >
              Esqueceu sua senha?
            </a>
          </Text>
          <Text asChild size="sm">
            <a
              className="underline text-gray-400 hover:text-gray-200 transition-all"
              href="https://www.google.com/"
            >
              Não possui conta? Crie uma agora!
            </a>
          </Text>
        </footer>
      </div>
    </div>
  );
};

export default SignIn;
