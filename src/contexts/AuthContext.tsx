import { createContext, useEffect, useState } from 'react';
import { getCookie } from '../util/cookies';
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';
import { recoverUserInformation, useMeQuery } from '@data/user/use-me.query';
import { LoginUser as TUser } from '@ts-types/generated';
import { useLoginMutation } from '@data/user/use-login.mutation';
import { ROUTES } from '@utils/routes';
type SignInData = {
	email: string;
	password: string;
};

type AuthContextType = {
	isAuthenticated: boolean;
	user: TUser | null;
	signIn: (data: SignInData) => Promise<void>;
};

type AuthProps = {
	children: React.ReactNode
};
export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProps) {
	const [user, setUser] = useState<TUser | null>(null);
	const router = useRouter();
	const isAuthenticated = !!user;
	const { mutate: login } = useLoginMutation();

	useEffect(() => {
		const auth_token = getCookie("auth_token");
		const auth_id = getCookie("auth_id");
		if (auth_token && auth_id) {
			recoverUserInformation(auth_id).then(response => {
				setUser(response.data)
			})
		}
	}, [])

	async function signIn({ email, password }: SignInData) {
		login(
			{
				variables: {
					email,
					password
				}
			},
			{
				onSuccess: ({ data }) => {
					if (data?.token) {
						if (
							data?.user.permissions?.length
						) {
							setCookie(undefined, 'auth_token', data?.token,
								{
									maxAge: 3600
								});
							setCookie(undefined, 'auth_permissions', data?.user.permissions, { maxAge: 3600 });
							setCookie(undefined, 'auth_id', data?.user.id, { maxAge: 3600 });
							router.push(ROUTES.DASHBOARD);
						} else {
							console.log(data)
							return data.message;
						}
					} else {
						console.log(data)
						return data.message;
					}
				}
			}
		);
	}
	return (
		<AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
			{children}
		</AuthContext.Provider>
	);
}
