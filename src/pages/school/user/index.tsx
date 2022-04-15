import BainnerFeature from '../../../components/BainnerFeature';
import React from 'react';
import Layout from '../../../Layout';
import { Chart } from "../../../components/Chart";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import * as C from "./styles";
import Link from 'next/link';
import ListPanel from './list-user';

export default function UsersPanel() {
	return (
		<Layout>
			<C.WrapperContent>
				<Tabs className="wrapper">
					<TabList className="tab-item">
						<Tab className="item">Listar Todos os Usuários</Tab>
						<Tab className="item">Professore</Tab>
						<Tab className="item">Funcionários</Tab>
						<Tab className="item">Estudantes</Tab>
						{/* <Tab>Rascunhos</Tab> */}
					</TabList>
					<TabPanel className="content">
						<C.WrapperBody>
							<ListPanel />
						</C.WrapperBody>

					</TabPanel >
					<TabPanel className="content">
						<span>Sem informação disponível de professor</span>
					</TabPanel>
					<TabPanel className="content">
						<span>Sem informação disponível Funcionários
						</span>
					</TabPanel>
					<TabPanel className="content">
						<span>Sem informação disponível Gráficos Estudantil</span>
					</TabPanel>
					<TabPanel className="content">
						<span>Sem informação disponível Gráficos Monetário</span>
					</TabPanel>
					<TabPanel className="content">
						<span>Sem informação disponível de Definições</span>
					</TabPanel>
					{/* <TabPanel>
					<span>Sem informação disponível</span>
				</TabPanel> */}
				</Tabs>
			</C.WrapperContent>
		</Layout>
	);
};




