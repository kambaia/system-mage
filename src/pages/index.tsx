import { useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';
import Login from './login';
import { ROUTES } from '@utils/routes';
import { SUPER_ADMIN } from '@utils/constants';
import { GetServerSideProps } from "next";
import { parseContextCookie } from "@utils/parse-cookie";
import { isTokenExpired } from 'src/util/auth';
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
