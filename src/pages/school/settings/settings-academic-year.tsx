import React from 'react';
import Layout from '../../../Layout';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import * as C from './styles';
import {ListAllAcademicYearPanel } from '@components/configuration/settings-actions';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { withAuth } from 'src/pages/provider/AuthWith';
export default function EmployeePanel() {
  const router = useRouter();
  return (
    <Layout>
      <C.WrapperContent>
        <Tabs className="wrapper">
          <h1>Definição do ano lectivo</h1>
          <TabPanel className="content">
            <ListAllAcademicYearPanel/>
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
