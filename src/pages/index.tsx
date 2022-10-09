import { useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';
import Login from './login';
import { ROUTES } from '@utils/routes';
import { SUPER_ADMIN } from '@utils/constants';
import { GetServerSideProps } from "next";
import { parseContextCookie } from "@utils/parse-cookie";
import { isTokenExpired } from 'src/helper/auth';
import { parseCookies } from 'nookies';
export default function Home() {
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);
	return (
		<>
			<Login />
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
	const cookies = parseContextCookie(context?.req?.headers?.cookie);
	if (cookies?.auth_token && !isTokenExpired(cookies?.auth_token)) {
		return {
			redirect: { destination: ROUTES.DASHBOARD, permanent: false },
		};
	} else {
		return {
			redirect: { destination: "/", permanent: false },
		};
	}
};