import BainnerFeature from '../../../components/BainnerFeature';
import React from 'react';
import Layout from '../../../Layout';
import { Chart } from "../../../components/Chart";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import * as C from "./styles";
import {  ListAllUserPanel, ListAllStudentPanel, ListAllSystemUserPanel, ListAllTeacherUserPanel} from '@components/customer/lists';

export default function UsersPanel() {
	return (
		<Layout>
			<C.WrapperContent>
				<Tabs className="wrapper">
					<TabList className="tab-item">
						<Tab className="item active">Todos Usuários</Tab>
						<Tab className="item ">Todos Usuário Estudantes</Tab>
						<Tab className="item ">Todos Usuário Professores</Tab>
						<Tab className="item ">Todos Usuário Interno</Tab>
						
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
					
					

				</Tabs>
			</C.WrapperContent>
		</Layout>
	);
};




