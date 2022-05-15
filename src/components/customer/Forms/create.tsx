import { FormEvent, useState, useContext } from 'react';
import Button from '@components/ui/button';
import Input from '@components/ui/input';
import { Card } from '@components/common/card';
import Description from '@components/ui/description';
import Label from '@components/ui/label';
import Select from 'react-select';
import {
  WrapperContent,
  UploadUserProfileStyle,
  CardButton,
  InpuGroup
} from './styles';
import { AuthContext } from '@contexts/AuthContext';
import { UploadImage, useMeQuery } from '@data/user/use-me.query';
import { AiOutlineUpload } from 'react-icons/ai';
import Uploader from '@components/common/uploader';
import { useForm } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  password: string;
  permissionType: string;
};
const defaultValues = {
	firstName: "",
	lastName: "",
	email: "",
	contact: "",
	password: "",
	permissionType: "",
};

export const CustomerCreateForm = () => {
  const options:any = [
    { value: '1', label: 'Adiministrador de Sistema' },
    { value: '2', label: 'Direitor' },
    { value: '3', label: 'Secretário' },
    { value: '4', label: 'Tesouraria' },
    { value: '5', label: 'Professor' },
    { value: '6', label: 'Estudante' }
  ];

  const { user } = useContext(AuthContext);
  const [profileSave, setProfileSave] = useState<File | null>(null);
  const [profile, setProfile] = useState("");
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [permisotin, setPermisotin] = useState( { value: '1', label:""});
  

  const handleFormUploadProfile = async (profileSave: File) => {
	console.log(profileSave)
    if (profileSave && profileSave.size > 0) {
      setUploading(true);
      const resp = await UploadImage(profileSave);
      setUploading(true);
      if (resp instanceof Error) {
        alert(`${resp.message}`);
        console.log(resp.message);
      } else {
        console.log(resp.thumbnail);
      }
    }
  };

  const {
    register,
    handleSubmit,
	reset,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues
  });

  async function onSubmit(form: FormValues) {
	form.permissionType = permisotin.label;
    setLoading(true);
    handleFormUploadProfile(profileSave!);
    setLoading(false);
    console.log(form);
	reset(defaultValues);
	setProfile("");
	setPermisotin({value: "", label:""});
	
	
  }

  return (
    <WrapperContent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap my-5 sm:my-8">
          <Description
            title="Informação"
            details="Adicine útilizadores de sistema para sua escola a partir daqui, colocando as suas informações de acesso."
            className="w-full px-0 sm:pr-4 md:pr-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
          />

          <Card className="w-full sm:w-8/12 md:w-2/3">
            <UploadUserProfileStyle>
              <Uploader profile={profile} setProfile={setProfile} setProfileSave={setProfileSave} />
            </UploadUserProfileStyle>

            <InpuGroup>
              <Input
                label="Nome"
                type="text"
                variant="outline"
                className="mb-4 input"
                placeholder="Primeio nome usuário"
				{...register("firstName")}
              />
              <Input
			  {...register("lastName")}
                label="Nome"
                type="text"
                variant="outline"
                className="mb-4 input"
                placeholder="Último nome do usuário"
              />
            </InpuGroup>

            <Input
              label="Contato"
              type="text"
              variant="outline"
              className="mb-4"
              placeholder="contato 1"
			  {...register("contact")}
			
            />
            <Input
              label="Email"
              type="email"
              variant="outline"
              className="mb-4"
              placeholder="E-email de acesso"
			  {...register("email")}
			 
            />
            <Input
			  {...register("password")}
              label="Senha"
              type="password"
              variant="outline"
              className="mb-4"
              placeholder="Senha, de preferência uma padrão para todos os usuários"
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
				value={options.label} // this doesn't let me click options
				onChange={(option) => setPermisotin(option)} // this returns (option) => option.phaseText) as a string
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
