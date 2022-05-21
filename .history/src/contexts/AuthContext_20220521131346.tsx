import { createContext, useEffect, useState } from 'react';
import { parseCookies, getCookie, setCookie } from '../util/cookies';
import Router, { useRouter } from 'next/router';
import { recoverUserInformation, useMeQuery } from '@data/user/use-me.query';
import { LoginUser as TUser } from '@ts-types/generated';
import { useLoginMutation } from '@data/user/use-login.mutation';
import { ROUTES } from '@utils/routes';
import { SUPER_ADMIN } from '@utils/constants';

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
export  const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }:AuthProps) {
  const [user, setUser] = useState<TUser | null>(null);
  const router = useRouter();
  const isAuthenticated = !!user;
  const { mutate: login } = useLoginMutation();

  useEffect(() => {
    const  auth_token = getCookie("auth_token");
    const  auth_id = getCookie("auth_id");
    if (auth_token && auth_id) {
      recoverUserInformation(auth_id).then(response => {
         console.log(response.data)
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
        onSuccess: ({ da }) => {
         
          if (data?.token) {
            if (
              data?.user.permissions?.length
            ) {
              setCookie('auth_token', data?.token);
              setCookie('auth_permissions', data?.user.permissions);
              setCookie('auth_id', data?.user.id);
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
