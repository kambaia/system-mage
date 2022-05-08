import { useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';
import Login from './login';
import { ROUTES } from '@utils/routes';
import { SUPER_ADMIN } from '@utils/constants';
import { GetServerSideProps } from "next";
import { parseContextCookie } from "@utils/parse-cookie";
import { isTokenExpired } from 'src/util/auth';

interface IProjeto {
	slug: string;
	title: string;
	type: string;
	description: string;
	link: string;
	thumbnail: string;
}

interface HomeProps {
	projetos: IProjeto[];
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
	const cookies = parseContextCookie(context?.req?.headers?.cookie);
	
	if (cookies?.auth_token && !isTokenExpired(cookies?.auth_token)) {
		if (cookies?.auth_permissions?.includes(SUPER_ADMIN)) {
			return {
				redirect: { destination: ROUTES.DASHBOARD, permanent: false },
			};
		}
	}
	return {
		props: {},
	};
};

export default function Home({ projetos }: HomeProps) {
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/static/favicon.png" />
				<title>Sistema de Gestão PIA</title>
				<meta
					name="description"
					content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
				/>
				<meta property="og:image" content="/ogimage.png" />
				<meta property="og:image:secure_url" content="/ogimage.png" />
				<meta name="twitter:image" content="/ogimage.png" />
				<meta name="twitter:image:src" content="/ogimage.png" />
				<meta
					property="og:description"
					content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
				/>
			</Head>
			<Login />
		</>
	);
}
