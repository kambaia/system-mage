import Input from '../../ui/input';
import Button from '../../ui/button';
import { Wrapper, SessionInputFildUser } from './upadate-user-style';
import { InpuGroup, CardButton } from '../Forms/styles';
import { Card, CardBody } from '@components/common/card';
import { AiOutlineUpload } from 'react-icons/ai';
import { FormEvent, useContext, useState } from 'react';
import { UploadImage, useMeQuery, userListQuery } from '@data/user/use-me.query';
import { AuthContext } from '@contexts/AuthContext';
import { Label } from 'recharts';
import { IUser } from '@ts-types/generated';
export const EmployeeCreateForm = () => {
	const [uploading, setUploading] = useState(false);
	const { user } = useContext(AuthContext);
	const [profile, setProfile] = useState<any>('');
	const [searcUser, setSearcUser] = useState('');
	const [userData, setUserData] = useState<IUser>();
	const [filterData, setFilterData] = useState<IUser[]>();

	const { data, isLoading } = userListQuery(user?.school._id);

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
	if (isLoading) {
		(
			<h2>Carregando</h2>
		)
	}
	return (
		<>
			<div className="w-full  py-2 bg-gray-100">
				<SessionInputFildUser>
					<Input
						name='firstName'

						type="text"
						variant="outline"
						className="mb-4 input w-full"
						placeholder='Pesquisa a baixo o usuário associado com o funcionário a cadastrar'
						value={searcUser}
						onChange={(e) => {
							if (e.target.value) {
								setSearcUser(e.target.value);
								const searched = data?.filter((item: IUser) => {
									return (item.fullName.toLowerCase().indexOf(e.target.value) !== -1 || item.email.toUpperCase().indexOf(e.target.value) !== -1);
								})
								setFilterData(searched)
							} else {
								setSearcUser("");
							}

						}}
					/>
					{
						searcUser ?

							<div className='content-card-users'>
								<div className='header-card'>
									<h2>Todos os usuários cadastrados</h2>
								</div>
								<div>
									<ul className='data-user-list'>
										{
											filterData?.map((item, index) => (
												<li key={index} className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer hover:bg-gray-100"
												onClick={()=>{
													setUserData(item);
													console.log(item._id)
													setSearcUser("");
												}}
												>
													<div className='user-profile'>
														<img className='rounded-full' src={item?.profile} />
													</div>
													<div className='user-name'>
														{item.fullName}
													</div>
												</li>
											))
										}


									</ul>
								</div>
							</div>
							:
							""
					}
					<label>Localizar o usuário</label>
				</SessionInputFildUser>

				<Wrapper>
					<div className="w-full flex justify-between flex-row suport">


						<CardBody className="w-full sm:w-8/12 md:w-2/6 suport-card suport-cardbody">
							<div className="user">
								<div className="profile">
									<img
										src={
											profile
												? profile
												: userData?.profile
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

								<span>{userData?.fullName}</span>
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

								</p>
							</div>
						</CardBody>
						<form>
						<Card className="w-full sm:w-8/12 md:w-4/4 ml-10 suport-card">
							<div className="mb-5 mt-5 title">
								<h3>Dados pessoas</h3>
							</div>
							<InpuGroup>
								<Input
									name='firstName'
									label="Primeiro Nome"
									type="text"
									variant="outline"
									className="mb-4 input"
									value={userData?.fullName}
									
								/>
								<Input
									name='lastName'
									label="Sobre nome"
									type="text"
									variant="outline"
									className="mb-4 input"


								/>
							</InpuGroup>
							<InpuGroup>
								<Input
									name='birthDate'
									label="Idade"
									type="date"
									variant="outline"
									className="mb-4 input"


								/>
								<Input
									name='gender'
									label="Sexo"
									type="text"
									variant="outline"
									className="mb-4 input"


								/>
							</InpuGroup>

							<div className="mb-5 mt-5">
								<h3>Contacto</h3>
							</div>

							<Input
								name='email'
								label="Email"
								type="email"
								variant="outline"
								className="mb-4"
								value={userData?.email}
							/>
							<InpuGroup>
								<Input
									name='unitel'
									label="Telefone 1"
									type="text"
									variant="outline"
									className="mb-4 input"
								/>
								<Input
									name='movicel'
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
									name='province'
									label="Provincia"
									type="text"
									variant="outline"
									className="mb-4 input"
								/>
								<Input
									name='county'
									label="Monicípio"
									type="text"
									variant="outline"
									className="mb-4 input"

								/>
							</InpuGroup>
							<InpuGroup>
								<Input
									name='neighborhood'
									label="Bairro"
									type="text"
									variant="outline"
									className="mb-4 input"

								/>
								<Input
									name='country'
									label="Rua"
									type="text"
									variant="outline"
									className="mb-4 input"

								/>
							</InpuGroup>
							<div className="mb-4 text-right">
								<CardButton>
									<Button>Registrar</Button>
								</CardButton>
							</div>
						</Card>

					</div>
				</Wrapper>
			</div>
		</>
	);
};
