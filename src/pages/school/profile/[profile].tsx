import BainnerFeature from '../../../components/BainnerFeature';
import React from 'react';
import Layout from '../../../Layout';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import * as C from './styles';
import {
	ListAllSchoolProfile,
  ListAllUserPanel,
  ListAllUserProfile
} from '@components/customer/lists';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { withAuth } from 'src/pages/provider/AuthWith';
export default function Panel() {
  const router = useRouter();
  return (
    <Layout>
      <C.WrapperContent>
        <Tabs className="wrapper">
          <C.wrapperBody>
			  <h1>PERFIL DO USÚARIO</h1>
            <TabList className="tab-item">
              <Tab
                className={`${
                  router.query.profile === '1' ? 'item active' : 'item'
                }`}
              >
                <Link as={'/school/profile/1'} href="/school/profile/1">
                  Usuário
                </Link>
              </Tab>
              <Tab
                className={`${
                  router.query.profile === '2' ? 'item active' : 'item'
                }`}
              >
                <Link as={'/school/profile/2'} href="/school/profile/2">
                  Escola
                </Link>
              </Tab>
              {/* <Tab>Rascunhos</Tab> */}
            </TabList>
          </C.wrapperBody>

          <TabPanel className="content">
            <ListAllUserProfile />
          </TabPanel>
          <TabPanel className="content">
            <ListAllSchoolProfile />
          </TabPanel>
        </Tabs>
      </C.WrapperContent>
    </Layout>
  );
}

export const getServerSideProps = withAuth(
  async (ctx: any, cookies: any, payload: any) => {
    return {
      props: {}
    };
  }
);
