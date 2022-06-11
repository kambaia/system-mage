import Input from '../../ui/input';
import Button from '../../ui/button';
import { Wrapper, SessionInputFildUser, GroupCard } from './styles/upadate-user-style';
import { InpuGroup, CardButton } from './styles/styles';
import { Card, CardBody } from '@components/common/card';
import { AiOutlineUpload } from 'react-icons/ai';
import { FormEvent, useContext, useState } from 'react';
import { userSchoolListQuery } from '@data/user/use-me.query';
import { AuthContext } from '@contexts/AuthContext';
import { yupResolver } from '@hookform/resolvers/yup';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { InputError } from './validate/InputError';
import { employeeValidationSchema } from './validate/customer-validation-schema';
import { useRouter } from 'next/router';
import { ROUTES } from '@utils/routes';
import { useCreateEmployeeMutation } from '@data/employee/create-employee';
import { UploadImage } from '@data/upload/upload';
import Select from '@components/ui/select/select';

type FormValues = {
	id: string;
	profile: string;
	firstName: string;
	lastName: string;
	position: string,
	email: string;
	description: string;
	gender: string;
	birthDate: string;
	employeeBiFile: string;
	employeeIdentity: string;
	street: string;
	city: string;
	province: string;
	country: string;
	county: string;
	neighborhood: string;
	unitel: string;
	movicel: string;
	active: boolean,
	schoolId: string,
	userId: string,

}
const defaultValues = {
	id: "",
	profile: "/users/profile.jpg",
	firstName: "",
	lastName: "",
	email: "",
	description: "",
	gender: "",
	birthDate: "",
	employeeBiFile: "",
	employeeIdentity: "",
	street: "",
	city: "",
	province: "",
	country: "",
	county: "",
	neighborhood: "",
	unitel: "",
	movicel: "",
	schoolId: "",
	userId: "",
	position: "",
	active: true
};

const options = [
	{
		label: "Professor",
		value: "Professor"
	},
	{
		label: "Diretor Geral",
		value: "Diretor Geral"
	},
	{
		label: "diretor administrativo",
		value: "Diretor Geral"
	},
	{
		label: "Diretor Geral Pedagógico",
		value: "Diretor Geral Pedagógico"
	},
	{
		label: "Coordenador ",
		value: "Coordenador"
	},
	{
		label: "Tesoureiro",
		value: "Tesoureiro"
	},
	{
		label: "Inspetor",
		value: "Inspetor"
	},

]


export const EmployeeCreateForm = () => {
	const [uploading, setUploading] = useState(false);
	const { user } = useContext(AuthContext);
	const [profile, setProfile] = useState<any>('');
	const [position, setPosition] = useState<string>('');
	const [searcUser, setSearcUser] = useState('');
	const [userData, setUserData] = useState<FormValues>(defaultValues);
	const [filterData, setFilterData] = useState<FormValues[]>();

	const { data, isLoading } = userSchoolListQuery(user?.school._id);
	/***********************register user */
	const router = useRouter();
	const { mutate: saveEmployee, isLoading: loadingUser } = useCreateEmployeeMutation();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue
	} = useForm<FormValues>({
		defaultValues,
		resolver: yupResolver(employeeValidationSchema)
	});
	/*<-------------------------------------------------------------------> */
	/***********************Pre-visualização da foto de perfil */
	const previewImage = async (e: any) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setProfile(reader.result);
			}
		};
		reader.readAsDataURL(e.target.files[0]);
	};
	/*<-------------------------------------------------------------------> */
	/***********************Carregar a foto ao banco */
	const handleFormUploadProfile = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		let file = formData.get('profile') as File;
		if (file && file.size > 0) {
			setUploading(true);
			const resp = await UploadImage(user?.email!, file);
			setUploading(true);
			if (resp instanceof Error) {
				alert(`${resp.message}`);
			} else {
				//profile: { thumbnail, name },
				console.log(resp.thumbnail);
			}
		}
	};
	if (isLoading) {
		(
			<h2>Carregando</h2>
		)
	}
	/***********************Preencher os dados do usuário caso existá */
	const setInformation = (info: FormValues) => {
		setValue('firstName', info.firstName);
		setValue("email", info.email!);
		setValue("unitel", info.unitel!);
		setUserData(info)

		console.log(info.id);

	}
	/***********************Inseriri as informações */
	async function onSubmit(employee: FormValues) {
		console.log(employee);
		saveEmployee(
			{
				variables: {
					firstName: employee.firstName,
					lastName: employee.lastName,
					position: position,
					contact: {
						unitel: employee.unitel,
						movicel: employee.movicel
					},
					birthDate: employee.birthDate,
					description: employee.description,
					gender: employee.gender,
					employeeIdentity: employee.employeeIdentity,
					employeeBiFile: employee.employeeBiFile,
					address: {
						province: employee.province,
						country: employee.country,
						neighborhood: employee.neighborhood,
						street: employee.street,
						county: employee.county
					},
					schoolId: user?.school?._id!,
					userId: userData.id,
					active: true
				}

			},
			{
				onSuccess: ({ data }) => {
					const { success, profile, fullName } = data;
					console.log(data);
					if (success) {
						toast.custom(t => (
							<div
								className={`${t.visible ? 'animate-enter' : 'animate-leave'
									} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
							>

								<div className="flex-1 w-0 p-4">
									<div className="flex items-start">
										<div className="flex-shrink-0 pt-0.5">
											<img
												className="h-10 w-10 rounded-full"
												src={profile}
												alt=""
											/>
										</div>
										<div className="ml-3 flex-1">
											<p className="text-sm font-medium text-gray-900">
												{fullName}
											</p>
											<p className="mt-1 text-sm text-gray-500">{success}</p>
										</div>
									</div>
								</div>
								<div className="flex border-l border-gray-200">
									<button
										onClick={() => toast.dismiss(t.id)}
										className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
									>
										Close
									</button>
								</div>
							</div>
						));

						router.push(`${ROUTES.EMPLOYEE}/1`);
					}
				},
				onError: data => {

					toast.error(
						'Aconteceu um erro ao registrar as informações. Certifica se não há uma informação semelhante já cadastrada',
						{ duration: 8000 });
				}
			}
		);
	}

	function onError(error: any) {
		console.log(error);
		toast.error('Confira os campos e tente novamente!', { duration: 8000 });
	}

	return (
		<>
			<div className="w-full  py-2 bg-gray-100">
				<Toaster position="top-right" />
				<SessionInputFildUser>
					<Input
						style={{ fontSize: '15pt' }}
						name='firstName'
						type="text"
						variant="outline"
						className="mb-4 input w-full"
						placeholder='Pesquisa a baixo o usuário associado com o funcionário a cadastrar'
						value={searcUser}
						onChange={(e) => {
							if (e.target.value) {
								setSearcUser(e.target.value);
								const searched = data?.filter((item: FormValues) => {
									return (item.firstName.toLowerCase().indexOf(e.target.value) !== -1 || item.email.toUpperCase().indexOf(e.target.value) !== -1);
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
													onClick={() => {
														setInformation(item);
														setSearcUser("");
													}}
												>
													<div className='user-profile'>
														<img className='rounded-full' src={item?.profile!} />
													</div>
													<div className='user-name'>
														{item.firstName}
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

								<span>{userData?.firstName}</span>
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

						<Card className="w-full sm:w-8/12 md:w-4/4 ml-10 suport-card">
							<form onSubmit={handleSubmit(onSubmit, onError)}>
								<GroupCard className="mb-5 mt-5 title">
									<h3>Dados pessoas</h3>

									<InpuGroup>
										<div className="mb-4 input">
											<Input
												label="Primeiro Nome"
												type="text"
												variant="outline"
												placeholder='Primeiro nome'
												{...register('firstName')}
											/>
											{errors?.firstName?.type && (
												<InputError type={errors.firstName.type} field="firstName" />
											)}
										</div>
										<div className="mb-4 input">
											<Input

												label="Sobre nome"
												type="text"
												variant="outline"
												{...register('lastName')}

											/>
											{errors?.gender?.type && (
												<InputError type={errors.gender.type} field="gender" />
											)}
										</div>

									</InpuGroup>

									<InpuGroup>
										<div className="mb-4 input">
											<Input
												label="Idade"
												type="date"
												variant="outline"
												{...register('birthDate')}
											/>
											{errors?.birthDate?.type && (
												<InputError type={errors.birthDate.type} field="birthDate" />
											)}
										</div>
										<div className="mb-4 input">
											<Input
												label="Sexo"
												type="text"
												variant="outline"
												{...register('gender')}
											/>
											{errors?.gender?.type && (
												<InputError type={errors.gender.type} field="gender" />
											)}
										</div>

									</InpuGroup>
									<Input
										label="Nº de Identificação(BI)"
										type="text"
										variant="outline"
										className="mb-4"
										placeholder='Entroduza aqui o número do BI do funcionário'
										{...register('employeeIdentity')}
									/>
									{errors?.employeeIdentity?.type && (
										<InputError type={errors.employeeIdentity.type} field="employeeIdentity" />
									)}
									<GroupCard className="mb-5 mt-5 title">
										<div className="mb-5 mt-5 title">
											<h3>Posição </h3>
										</div>
										<Select
											options={options}
											defaultValue={"Cargo do funcionario"}
											className="mb-4"
											placeholder='Entroduza aqui o número do BI do funcionário'
											onChange={(e: any) => {
												setPosition(e.value);
											}}
										/>
									</GroupCard>

									{errors?.employeeIdentity?.type && (
										<InputError type={errors.employeeIdentity.type} field="employeeIdentity" />
									)}
									<Input
										label="Carrega um documento em PDF com o BI do funcionário"
										type="file"
										variant="outline"
										className="mb-4"
										{...register('email')}

									/>

								</GroupCard>
								<GroupCard className="mb-5 mt-5 title">
									<div className="mb-5 mt-5 title">
										<h3>Contacto</h3>

									</div>

									<Input
										label="Email"
										type="email"
										variant="outline"
										className="mb-4"
										{...register('email')}
									/>
									{errors?.email?.type && (
										<InputError type={errors.email.type} field="email" />
									)}
									<InpuGroup>
										<div className="mb-4 input">
											<Input
												label="Telefone 1"
												type="text"
												variant="outline"
												{...register('unitel')}
											/>
											{errors?.unitel?.type && (
												<InputError type={errors.unitel.type} field="unitel" />
											)}
										</div>
										<div className="mb-4 input">
											<Input
												label="Altenativo"
												type="text"
												variant="outline"
												{...register('movicel')}
											/>
										</div>
									</InpuGroup>
								</GroupCard>
								<GroupCard className="mb-5 mt-5 title">
									<h3>Enderço</h3>

									<InpuGroup>
										<div className="mb-4 input">
											<Input
												label="Provincia"
												type="text"
												variant="outline"
												{...register('province')}
											/>
											{errors?.province?.type && (
												<InputError type={errors.province.type} field="province" />
											)}
										</div>
										<div className="mb-4 input">
											<Input
												label="Monicípio"
												type="text"
												variant="outline"
												{...register('county')}
											/>
											{errors?.county?.type && (
												<InputError type={errors.county.type} field="county" />
											)}
										</div>
									</InpuGroup>
									<InpuGroup>
										<div className="mb-4 input">
											<Input
												label="Bairro"
												type="text"
												variant="outline"
												{...register('neighborhood')}
											/>
											{errors?.neighborhood?.type && (
												<InputError type={errors.neighborhood.type} field="neighborhood" />
											)}
										</div>
										<div className="mb-4 input">
											<Input
												{...register('street')}
												label="Rua"
												type="text"
												variant="outline"
											/>
											{errors?.street?.type && (
												<InputError type={errors.street.type} field="street" />
											)}
										</div>
									</InpuGroup>
								</GroupCard>
								<div className="mb-4 text-right">
									<CardButton>
										<CardButton>
											{isLoading ? 'Enviando...' : <Button>Registrar</Button>}
										</CardButton>
									</CardButton>
								</div>
							</form>
						</Card>
					</div>
				</Wrapper>
			</div>
		</>
	);
};
