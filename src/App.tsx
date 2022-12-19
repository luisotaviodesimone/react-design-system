import './styles/global.css';
import { Atom, Envelope, Lock } from 'phosphor-react';
import Heading from './components/Heading';
import Text from './components/Text';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Button from './components/Button';

function App() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-8 px-4">
      <div className="w-full max-w-[400px] flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col items-center">
          <Atom width={110} height={90} color="#9be1fb" />
          <Heading size="lg">Ignite Lab</Heading>
          <Text>
            <h3 className="text-gray-400">Faça login e comece a usar</h3>
          </Text>
        </div>

        <form
          action="submit"
          className="flex flex-col justify-center items-center gap-8 w-full"
        >
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2">
              <Text>Endereço de Email</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Envelope />
                </TextInput.Icon>
                <TextInput.Input
                  type="email"
                  placeholder="Digite o seu email"
                />
              </TextInput.Root>
            </div>
            <div className="flex flex-col gap-2">
              <Text>Sua Senha</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Lock />
                </TextInput.Icon>
                <TextInput.Input
                  type="password"
                  placeholder="Digite a sua senha"
                />
              </TextInput.Root>
            </div>
          </div>

          <div className="flex gap-2 self-start">
            <Checkbox />
            <Text size="sm">Lembrar de mim por 30 dias</Text>
          </div>

          <div className="w-full">
            <Button>Entrar na plataforma</Button>
          </div>
        </form>

        <div className="flex flex-col gap-4 items-center">
          <Text asChild>
            <a
              className="underline text-gray-400"
              href="https://www.google.com/"
            >
              Esqueceu sua senha?
            </a>
          </Text>
          <Text asChild>
            <a
              className="underline text-gray-400"
              href="https://www.google.com/"
            >
              Não possui conta? Crie uma agora!
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
}

export default App;
