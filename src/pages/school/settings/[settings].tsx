import BainnerFeature from '../../../components/BainnerFeature';
import React from 'react';
import Layout from '../../../Layout';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import * as C from "./styles";
import {  ListAllUserPanel, ListAllStudentPanel, ListAllSystemUserPanel, ListAllTeacherUserPanel} from '@components/customer/lists';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Panel() {
     
    const router = useRouter();
    console.log(router.query.settings);
	return (
		<Layout>
			<C.WrapperContent>
				<Tabs className="wrapper">
					<TabList className="tab-item">
						<Tab className={`${router.query.settings === "1"? 'item active': 'item'}`}><Link as={'/school/settings/1'} href="/school/settings/1">Classes</Link></Tab>
						<Tab className={`${router.query.settings === "2"? 'item active': 'item'}`}><Link as={'/school/settings/2'} href="/school/settings/2">Propinas</Link></Tab>
						<Tab className={`${router.query.settings === "3"? 'item active': 'item'}`}><Link as={'/school/settings/3'} href="/school/settings/3">Lista de todas os cursos</Link></Tab>
						<Tab className={`${router.query.settings === "4"? 'item active': 'item'}`}><Link as={'/school/settings/4'} href="/school/settings/4">Disciplinas</Link></Tab>
						<Tab className={`${router.query.settings === "5"? 'item active': 'item'}`}><Link as={'/school/settings/5'} href="/school/settings/5">Turmas</Link></Tab>
					

						{/* <Tab>Rascunhos</Tab> */}
					</TabList>
					<TabPanel className="content">
							<ListAllUserPanel/>
					</TabPanel >
					<TabPanel className="content">
							<ListAllStudentPanel/>
					</TabPanel >
					<TabPanel className="content">
							<ListAllTeacherUserPanel/>
					</TabPanel >
					<TabPanel className="content">
							<ListAllSystemUserPanel/>
					</TabPanel >
					<TabPanel className="content">
							<ListAllSystemUserPanel/>
					</TabPanel >
					
					

				</Tabs>
			</C.WrapperContent>
		</Layout>
	);
};




