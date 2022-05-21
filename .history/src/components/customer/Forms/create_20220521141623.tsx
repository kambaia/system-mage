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
import { UploadImage } from '@data/user/use-me.query';
import { useCreateUserMutation } from '@data/user/use-user-create.mutation';
import Uploader from '@components/common/uploader';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputError } from '@components/common/InputError';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/router";
import { ROUTES } from '@utils/routes';
type FormValues = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	phoneNumber?: string;
};
const defaultValues = {
	firstName: '',
	lastName: '',
	email: '',
	phoneNumber: '',
	password: '',
	permission: ''
};

export const CustomerCreateForm = () => {
	const { mutate: saveUser } = useCreateUserMutation();
	const router = useRouter();
	const validationSchema = yup.object({
		firstName: yup.string().required(),
		lastName: yup.string().required(),
		email: yup.string().email().required(),
		phoneNumber: yup.string().required(),
		password: yup.string().required(),
		avatar: yup.string()
	});

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormValues>({
		defaultValues,
		resolver: yupResolver(validationSchema)
	});

	const options: any = [
		{ value: '6287efb7ee7c139f17cd881c', label: 'Adiministrador de Sistema' },
		{ value: '2', label: 'Direitor' },
		{ value: '3', label: 'Secretário' },
		{ value: '62880b2d7d0ae15fe4242691', label: 'Tesouraria' },
		{ value: '5', label: 'Professor' },
		{ value: '6', label: 'Estudante' }
	];

	const { user } = useContext(AuthContext);
	const [profileSave, setProfileSave] = useState<File | null>(null);
	const [profile, setProfile] = useState('');
	const [uploading, setUploading] = useState(false);
	const [permisotin, setPermisotin] = useState({ value: '1', label: '' });

	const handleFormUploadProfile = async (profileSave: File) => {
		if (profileSave && profileSave.size > 0) {
			setUploading(true);
			const resp = await UploadImage(profileSave);
			if (resp instanceof Error) {
				alert(`${resp.message}`);
			} else {
				return resp.thumbnail;
			}
			setUploading(false);
		}
	};

	function onError(error: any) {
		toast.error('Confira os campos e tente novamente!');
	}

	async function onSubmit({
		firstName,
		lastName,
		email,
		phoneNumber,
		password
	}: FormValues) {
		if (!uploading) {
			let thumbnail: any = await handleFormUploadProfile(profileSave!);
			saveUser(
				{	variables: {
					profile: thumbnail,
					userName: `${firstName.charAt(0).toUpperCase()}${lastName
						.charAt(0)
						.toUpperCase()}`,
					phoneNumber,
					fullName: `${firstName} ${lastName}`,
					permission: permisotin.value,
					email,
					password,
					active: true,
					schoolId: user?.school._id
				}
				},
				{
				  onSuccess: ({ data }) => {
				  }
				}
			  );

	
			
			/*if  (status) {
				toast.custom((t) => (
					<div
						className={`${t.visible ? 'animate-enter' : 'animate-leave'
							} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
					>
						<div className="flex-1 w-0 p-4">
							<div className="flex items-start">
								<div className="flex-shrink-0 pt-0.5">
									<img
										className="h-10 w-10 rounded-full"
										src={thumbnail}
										alt=""
									/>
								</div>
								<div className="ml-3 flex-1">
									<p className="text-sm font-medium text-gray-900">
										Emilia Gates
									</p>
									<p className="mt-1 text-sm text-gray-500">
										Sure! 8:30pm works great!
									</p>
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

				router.push(`${ROUTES.USER}/1`);
			}
			 */

		}
	}

	return (
		<WrapperContent>
			<Toaster position='top-right' />
			<form onSubmit={handleSubmit(onSubmit, onError)}>
				<div className="flex flex-wrap my-5 sm:my-8">
					<Description
						title="Informação"
						details="Adicine útilizadores de sistema para sua escola a partir daqui, colocando as suas informações de acesso."
						className="w-full px-0 sm:pr-4 md:pr-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
					/>

					<Card className="w-full sm:w-8/12 md:w-2/3">
						<UploadUserProfileStyle>
							<Uploader
								profile={profile}
								setProfile={setProfile}
								setProfileSave={setProfileSave}
							/>
						</UploadUserProfileStyle>

						<InpuGroup>
							<div className="mb-4 input">
								<Input
									label="Nome"
									type="text"
									variant="outline"
									placeholder="Primeio nome usuário"
									{...register('firstName')}
								/>
								{errors?.firstName?.type && (
									<InputError type={errors.firstName.type} field="firstName" />
								)}
							</div>
							<div className="mb-4 input">
								<Input
									{...register('lastName')}
									label="Nome"
									type="text"
									variant="outline"
									placeholder="Último nome do usuário"
								/>
								{errors?.lastName?.type && (
									<InputError type={errors.lastName?.type} field="lastName" />
								)}
							</div>
						</InpuGroup>

						<Input
							label="Contacto"
							type="text"
							variant="outline"
							className="mb-4"
							placeholder="Contacto pessoal do usuário"
							{...register('phoneNumber')}
						/>
						{errors?.phoneNumber?.type && (
							<InputError type={errors.phoneNumber?.type} field="phoneNumber" />
						)}
						<Input
							label="Email"
							type="email"
							variant="outline"
							className="mb-4"
							placeholder="E-email de acesso"
							{...register('email')}
						/>
						{errors?.email?.type && (
							<InputError type={errors.email.type} field="email" />
						)}

						<Input
							{...register('password')}
							label="Senha"
							type="password"
							variant="outline"
							className="mb-4"
							placeholder="Senha, de preferência uma padrão para todos os usuários"
						/>
						{errors?.password?.type && (
							<InputError type={errors.password.type} field="password" />
						)}
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
								onChange={option => setPermisotin(option)} // this returns (option) => option.phaseText) as a string
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
