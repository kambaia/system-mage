import Input from '../../ui/input';
import Button from '../../ui/button';
import { CardButton, Wrapper } from './upadate-user-style';
import { InpuGroup } from '../Forms/styles';
import { Card, CardBody } from '@components/common/card';
import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '@contexts/AuthContext';
import { UploadImage } from '@data/user/use-me.query';

export const ListAllSchoolProfile = () => {
  const [uploading, setUploading] = useState(false);
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState<any>('');
  const previewImage = async (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const handleFormUploadProfile = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Ficheior');
    alert(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    let file = formData.get('profile') as File;
    if (file && file.size > 0) {
      setUploading(true);
      const resp = await UploadImage(file);
      setUploading(true);
      if (resp instanceof Error) {
        alert(`${resp.message}`);
      } else {
        console.log(resp.thumbnail);
      }
    }
  };

  return (
    <>
      <div className="w-full  py-2 bg-gray-100">
        <Wrapper>
          <div className="w-full flex justify-between flex-row suport">
            <CardBody className="w-full sm:w-8/12 md:w-2/6 suport-card">
              <div className="user">
                <div className="profile">
                  <span className="logo">
                  <img
                    src={
                      profile
                        ? profile
                        :user?.school.schoolLogo
                    }
                    alt="user"
                  />
                  </span>
                  <div className="upload">
                    <label>Editar</label>
                  </div>
                </div>

                <span>Logotipo da instituição</span>
              </div>

              <div className="time-word">
                <h2>
                  <span>Armazenamento</span> <span>3%</span>
                </h2>
                <div className="process-acess">
                  <div className="active-drive"></div>
                </div>
              </div>

              <div className="description">
                <h3>História da instituição</h3>
                <p>
                  A experiência profissional e os impasses enfrentados no
                  cotidiano de trabalho atual, quando se trata de crianças com
                  algum diagnóstico a serem incluídas na escola regular,
                  instigaramnos a realizar o presente estudo. Partindo do
                  princípio de que a inclusão implica no trabalho de toda
                  instituição esco...
                </p>
              </div>
            </CardBody>
            <Card className="w-full sm:w-8/12 md:w-4/4 ml-10 suport-card">
              <div className="mb-5 mt-5 title">
                <h3>Dados pessoas</h3>
              </div>
              <Input
                label="Nome da instituição"
                type="text"
                variant="outline"
                className="mb-4 input"
              />
              <InpuGroup>
                <Input
                  label="Ano de fundação"
                  type="text"
                  variant="outline"
                  className="mb-4 input"
                />
                <Input
                  label="Ano de abertura da conta"
                  type="text"
                  variant="outline"
                  className="mb-4 input"
                />
              </InpuGroup>

              <div className="mb-5 mt-5">
                <h3>Contacto</h3>
              </div>

              <Input
                label="Email"
                type="email"
                variant="outline"
                className="mb-4"
              />
              <InpuGroup>
                <Input
                  label="Telefone 1"
                  type="text"
                  variant="outline"
                  className="mb-4 input"
                />
                <Input
                  label="Altenativo"
                  type="text"
                  variant="outline"
                  className="mb-4 input"
                />
              </InpuGroup>

              <div className="mb-5 mt-5">
                <h3>Enderço</h3>
              </div>
              <InpuGroup>
                <Input
                  label="Provincia"
                  type="text"
                  variant="outline"
                  className="mb-4 input"
                />
                <Input
                  label="Monicípio"
                  type="text"
                  variant="outline"
                  className="mb-4 input"
                />
              </InpuGroup>
              <InpuGroup>
                <Input
                  label="Bairro"
                  type="text"
                  variant="outline"
                  className="mb-4 input"
                />
                <Input
                  label="Rua"
                  type="text"
                  variant="outline"
                  className="mb-4 input"
                />
              </InpuGroup>
              <Input
                label="Representante da instuição"
                type="text"
                variant="outline"
                className="mb-4 input"
              />
              <div className="mb-2 text-right">
                <CardButton>
                  <Button>Atualizar os meus dados</Button>
                </CardButton>
              </div>
            </Card>
          </div>
        </Wrapper>
      </div>
    </>
  );
};
