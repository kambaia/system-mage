import BainnerFeature from '../../../components/BainnerFeature';
import React, { useContext, useState } from 'react';
import Layout from '../../../Layout';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import * as C from "./styles";
import {  ListAllUserPanel, ListAllStudentPanel, ListAllSystemUserPanel, ListAllTeacherUserPanel} from '@components/customer/lists';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ROUTES } from '@utils/routes';
import {SUPER_ADMIN } from '@utils/constants';
import { GetServerSideProps } from "next";
import { parseContextCookie } from "@utils/parse-cookie";
import { isTokenExpired } from 'src/util/auth';
import { AuthContext } from '@contexts/AuthContext';
import Loader from '@components/ui/loader/loader';
import ErrorMessage from '@components/ui/error-message';
import { useUsersQuery } from '@data/user/use-users.query';

export default function UserPanel() {
    const router = useRouter();
		const [searchTerm, setSearchTerm] = useState("");
		const [page, setPage] = useState(1);
		const { user } = useContext(AuthContext);
	
		const { data, isLoading: loading, error } = useUsersQuery({
			limit: 20,
			page,
			text: searchTerm,
			schoolId: user?.school._id!
		});
		if (loading) return <Loader />;
		if (error) return <ErrorMessage message={error.message} />;
	
		function handleSearch({ searchText }: { searchText: string }) {
			setSearchTerm(searchText);
			setPage(1);
		}

		function handlePagination(current: any) {
		  setPage(current);
		}


	return (
		<Layout>
			<C.WrapperContent>
				<Tabs className="wrapper">
					<TabList className="tab-item">
						<Tab className={`${router.query.panel === "1"? 'item active': 'item'}`}><Link as={'/school/user/1'} href="/school/user/1">Todos Usuários</Link></Tab>
						<Tab className={`${router.query.panel === "2"? 'item active': 'item'}`}><Link as={'/school/user/2'} href="/school/user/1">Todos Usuário Estudantes</Link></Tab>
						<Tab className={`${router.query.panel === "3"? 'item active': 'item'}`}><Link as={'/school/user/3'} href="/school/user/1">Todos Usuário Professores</Link></Tab>
						<Tab className={`${router.query.panel === "4"? 'item active': 'item'}`}><Link as={'/school/user/4'} href="/school/user/1">Todos Usuário Interno</Link></Tab>

						{/* <Tab>Rascunhos</Tab> */}
					</TabList>
					<TabPanel className="content">
							<ListAllUserPanel customers={data?.users} onPagination={handlePagination}/>
					</TabPanel >
					<TabPanel className="content">
							<ListAllStudentPanel/>
					</TabPanel >
					<TabPanel className="content">
							<ListAllTeacherUserPanel  />
					</TabPanel >
					<TabPanel className="content">
							<ListAllSystemUserPanel/>
					</TabPanel >
					
					

				</Tabs>
			</C.WrapperContent>
		</Layout>
	);
};


export const getServerSideProps: GetServerSideProps = async (context: any) => {
	const cookies = parseContextCookie(context?.req?.headers?.cookie);
	if (cookies?.auth_token  || !isTokenExpired(cookies?.auth_token)) {
		if (!cookies?.auth_permissions?.includes(SUPER_ADMIN)) {
			return {
				redirect: { destination: ROUTES.DASHBOARD, permanent: false },
			};
		}
    return {
      props: {},
    };
	}
  return {
    redirect: { destination: "/login", permanent: false },
  };
};




