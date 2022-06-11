import Input from '../../ui/input';
import Button from '../../ui/button';
import { CardButton, Wrapper } from './upadate-user-style';
import { InpuGroup } from '../Forms/styles';
import { Card, CardBody } from '@components/common/card';
import { AiOutlineUpload } from 'react-icons/ai';
import { FormEvent, useContext, useState } from 'react';
import {  employQuery } from '@data/employee/employee-list';
import { AuthContext } from '@contexts/AuthContext';
import { UploadImage } from '@data/upload/upload';
import Loader from '@components/ui/loader/loader';
import ErrorMessage from '@components/ui/error-message';
export const ListAllUserProfile = () => {
  const [uploading, setUploading] = useState(false);
  const { user, userId } = useContext(AuthContext);
  const [profile, setProfile] = useState<any>('');
  const { data, isLoading:loading, error} = employQuery(userId);

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
      const resp = await UploadImage(user?.email!, file);
      setUploading(true);
      if (resp instanceof Error) {
        alert(`${resp.message}`);
      } else {
        console.log(resp.thumbnail);
      }
    }
  };

	if (loading) return <Loader />;
		if (error) return <ErrorMessage message={error.message} />;
	
  return (
    <>
      <div className="w-full  py-2 bg-gray-100">
        <Wrapper>
          <div className="w-full flex justify-between flex-row suport">
            <CardBody className="w-full sm:w-8/12 md:w-2/6 suport-card suport-cardbody">
              <div className="user">
                <div className="profile">
                  <img
                    src={
                      profile
                        ? profile
                        :user?.profile
                    }
                    alt="user"
                  />
                  <form onSubmit={handleFormUploadProfile}>
                    <div className="upload">
                      <input
                        type="file"
                        name="profile"
                        id="file"
                        accept="image/*"
                        onChange={previewImage}
                      />
                      {profile ? (
                        ''
                      ) : (
                        <label htmlFor="file">
                          Editar
                          <span>
                            {' '}
                            <AiOutlineUpload />
                          </span>
                        </label>
                      )}
                    </div>
                    {profile ? <button type="submit">Actualizar</button> : null}
                  </form>
                </div>

                <span>{user?.fullName}</span>
              </div>

              <div className="time-word">
                <h2>
                  <span>Acesso Diário</span> <span>20%</span>
                </h2>
                <div className="process-acess">
                  <div className="active-progress"></div>
                </div>
              </div>

              <div className="description">
                <h3>Descrição do usuário</h3>
                <p>
                 { data?.description}
                </p>
              </div>
            </CardBody>
            <Card className="w-full sm:w-8/12 md:w-4/4 ml-10 suport-card">
              <div className="mb-5 mt-5 title">
                <h3>Dados pessoas</h3>
              </div>
              <InpuGroup>
                <Input
                  label="Primeiro Nome"
                  type="text"
                  variant="outline"
                  className="mb-4 input"
                  value={data?.firstName}
                
                />
                <Input
                  label="Sobre nome"
                  type="text"
                  variant="outline"
                  className="mb-4 input"
                  value={data?.lastName}
                />
              </InpuGroup>
              <InpuGroup>
                <Input
                  label="Idade"
                  type="text"
                  variant="outline"
                  className="mb-4 input"
                  value={data?.birthDate}
                />
                <Input
                  label="Sexo"
                  type="text"
                  variant="outline"
                  className="mb-4 input"
                  value={data?.gender}
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
                value={user?.email}
              />
              <InpuGroup>
                <Input
                  label="Telefone 1"
                  type="text"
                  variant="outline"
                  className="mb-4 input"
                  value={data?.contact?.unitel}
                />
                <Input
                  label="Altenativo"
                  type="text"
                  variant="outline"
                  className="mb-4 input"
                  value={data?.contact?.movicel}
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
                  value={data?.address?.province}
                />
                <Input
                  label="Monicípio"
                  type="text"
                  variant="outline"
                  className="mb-4 input"
                  value={data?.address?.county}
                />
              </InpuGroup>
              <InpuGroup>
                <Input
                  label="Bairro"
                  type="text"
                  variant="outline"
                  className="mb-4 input"
                  value={data?.address?.neighborhood}
                />
                <Input
                  label="Rua"
                  type="text"
                  variant="outline"
                  className="mb-4 input"
                  value={data?.address?.country}
                />
              </InpuGroup>
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
