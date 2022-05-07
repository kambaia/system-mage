import Button from '@components/ui/button';
import Input from '@components/ui/input';
import Card from '@components/common/card';
import Description from '@components/ui/description';
import Label from '@components/ui/label';
import Select from 'react-select';
import { WrapperContent, CardButton, InpuGroup } from './styles';

type FormValues = {
  name: string;
  email: string;
  contact: string;
  password: string;
  permission: string;
  permissionType: string;
};
const defaultValues = {
  permissionType: 'client',
  email: '',
  password: ''
};

export const CustomerCreateForm = () => {
  const options = [
    { value: '1', label: 'Adiministrador de Sistema' },
    { value: '2', label: 'Direitor' },
    { value: '3', label: 'Secretário' },
    { value: '4', label: 'Tesouraria' },
    { value: '5', label: 'Professor' },
    { value: '6', label: 'Estudante' }
  ];
  async function onSubmit({
    name,
    email,
    contact,
    permission,
    password
  }: FormValues) {}
  return (
    <WrapperContent>
      <form>
        <div className="flex flex-wrap my-5 sm:my-8">
          <Description
            title="Informação"
            details="Adicine útilizadores de sistema para sua escola a partir daqui, colocando as suas informações de acesso."
            className="w-full px-0 sm:pr-4 md:pr-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
          />

          <Card className="w-full sm:w-8/12 md:w-2/3">
            <InpuGroup>
              <Input
                label="Nome"
                type="text"
                variant="outline"
                className="mb-4 input"
              />
              <Input
                label="Nome"
                type="text"
                variant="outline"
                className="mb-4 input"
              />
            </InpuGroup>

            <Input
              label="Email"
              type="email"
              variant="outline"
              className="mb-4"
            />
            <Input
              label="Contato"
              type="text"
              variant="outline"
              className="mb-4"
            />
            <Input
              label="Email"
              type="email"
              variant="outline"
              className="mb-4"
            />
            <Input
              label="Senha"
              type="password"
              variant="outline"
              className="mb-4"
            />
            <div className="mb-5 mt-5">
              <Label>Tipo de Utilizador</Label>

              <Select
                className="input-selet"
                options={options}
                defaultValue="Seleciona o usuário"
                defaultInputValue="Seleciona o usuário"
                aria-label="Seleciona o usuário"
                placeholder="Seleciona o usuário"
              />
            </div>
            <div className="mb-4 text-right">
              <CardButton>
                <Button>Criar a conta</Button>
              </CardButton>
            </div>
          </Card>
        </div>
      </form>
    </WrapperContent>
  );
};
