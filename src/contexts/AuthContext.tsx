import { createContext, useEffect, useState } from 'react';
import { getCookie } from '../util/cookies';
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';
import { recoverUserInformation } from '@data/user/use-me.query';
import { LoginUser as TUser } from '@ts-types/generated';
import { useLoginMutation } from '@data/user/use-login.mutation';
import { ROUTES } from '@utils/routes';
import theme from 'src/styles/theme';
type SignInData = {
	email: string;
	password: string;
};

type AuthContextType = {
	isAuthenticated: boolean;
	user: TUser | null;
	userId:string,
	signIn: (data: SignInData) => Promise<void>;
	onSidebarMenu: ()=>void;
	onSetTheme: (value:string)=>void;
	menu:boolean;
	darkTheme:string;
};

type AuthProps = {
	children: React.ReactNode
};
export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProps) {
	const [user, setUser] = useState<TUser | null>(null);
	const [userId, setUserId] = useState<string>('');
	const [menu, setMenu] = useState(true);
	const [darkTheme, setDarkTheme] = useState('');
	
	const router = useRouter();
	const isAuthenticated = !!user;
	const { mutate: login } = useLoginMutation();

	const verifyAuth =()=>{
		const auth_token = getCookie("auth_token");
		const auth_id = getCookie("auth_id");
		if (auth_token && auth_id) {
			recoverUserInformation(auth_id).then(response => {
				setUser(response.data)
			})
			setUserId(auth_id)
		}
	}
	
	useEffect(() => {
		verifyAuth();
	}, [])
	const onSidebarMenu = () => {
		setMenu(!menu);
	  };
	  const onSetTheme = (theme1:string) => {
		  if(theme1 === 'dark'){
			  console.log(theme1)
			setDarkTheme(theme1)
			theme.backgroundBlue = "#013466";
		  }else{
			setDarkTheme(theme1);
			theme.backgroundBlue = "#141414";
			setDarkTheme(theme1)
		  }
	  };
  
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
							recoverUserInformation(data?.user.id).then(response => {
								setUser(response.data)
								setCookie(undefined, 'auth_token', data?.token,
								{
									maxAge: 3600
								});
							setCookie(undefined, 'auth_permissions', data?.user.permissions, { maxAge: 3600 });
							setCookie(undefined, 'auth_id', data?.user.id, { maxAge: 3600 });
							router.push(ROUTES.DASHBOARD);
							
							})
							
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
		<AuthContext.Provider value={{onSetTheme, darkTheme, onSidebarMenu, menu, userId:userId, user, isAuthenticated, signIn }}>
			{children}
		</AuthContext.Provider>
	);
}
