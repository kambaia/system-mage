import React, { useState } from 'react';
import Layout from '../../../Layout';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import * as C from "./styles";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { withAuth } from 'src/pages/provider/AuthWith';
import Modal from '@components/common/Modal/ModalSettings';
import { ListAllClassPanel, ListAllCoursePanel, ListAllDisciplinePanel, ListAllschoolGroupPanel } from '@components/configuration/lists';

export default function Panel() {
	const [openModal, setOpenModal] = useState(false);
	const router = useRouter();
	return (
		<>
			<Layout>
				<C.WrapperContent>
					<Tabs className="wrapper">
						<TabList className="tab-item">
							<div className="menu-option-setting">
								<Tab className={`${router.query.settings === "1" ? 'item active' : 'item'}`}><Link as={'/school/settings/1'} href="/school/settings/1">Cursos</Link></Tab>
								<Tab className={`${router.query.settings === "2" ? 'item active' : 'item'}`}><Link as={'/school/settings/2'} href="/school/settings/2">Propina</Link></Tab>
								<Tab className={`${router.query.settings === "3" ? 'item active' : 'item'}`}><Link as={'/school/settings/3'} href="/school/settings/3">Classes</Link></Tab>
								<Tab className={`${router.query.settings === "4" ? 'item active' : 'item'}`}><Link as={'/school/settings/4'} href="/school/settings/4">Turmas</Link></Tab>
								<Tab className={`${router.query.settings === "5" ? 'item active' : 'item'}`}><Link as={'/school/settings/5'} href="/school/settings/5">Disciplinas</Link></Tab>

							</div>
							<div className="menu-option-setting">
								<Tab className={`${router.query.settings === "5" ? 'conf active' : 'conf'}`} onClick={() => openModal} >Configurações de Pagamento</Tab>
							</div>

							{/* <Tab>Rascunhos</Tab> */}
						</TabList>
						<TabPanel className="content">

							<ListAllCoursePanel />
						</TabPanel >
						<TabPanel className="content">
							<ListAllClassPanel />
						</TabPanel >
						<TabPanel className="content">
							<ListAllClassPanel />
						</TabPanel >
						<TabPanel className="content">
							<ListAllschoolGroupPanel />
						</TabPanel >
						<TabPanel className="content">
							<ListAllDisciplinePanel />
						</TabPanel >
					</Tabs>
				</C.WrapperContent>
			</Layout>
			<Modal
				open={openModal}
				onClose={() => setOpenModal(false)} />
		</>
	);
};

export const getServerSideProps = withAuth(
	async (ctx: any, cookies: any, payload: any) => {
		return {
			props: {},
		};
	}
);



