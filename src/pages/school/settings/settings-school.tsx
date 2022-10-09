import React from 'react';
import Layout from '../../../Layout';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import * as C from './styles';
import {
  ListAllAcademicYearPanel,
  ListAllClassPanel,
  ListAllCoursePanel,
  ListAllDisciplinePanel,
  ListAllschoolGroupPanel
} from '@components/configuration/settings-actions';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { withAuth } from 'src/pages/provider/AuthWith';
export default function EmployeePanel() {
  const router = useRouter();
  return (
    <Layout>
      <C.WrapperContent>
        <Tabs className="wrapper">
          <C.WrapperContent>
            <Tabs className="wrapper">
              <TabList className="tab-item">
                <div className="menu-option-setting">
                  <Tab className="item">
                      Cursos
                  </Tab>
                  <Tab className="item">
                      Propina
                  </Tab>
                  <Tab className="item">
                      Classes
                 
                  </Tab>
                  <Tab className="item">
                      Turmas
                  </Tab>
                  <Tab className="item">
                      Disciplinas
                  </Tab>
                </div>
              </TabList>
              <TabPanel className="content">
                <ListAllCoursePanel />
              </TabPanel>
              <TabPanel className="content">
                <ListAllClassPanel />
              </TabPanel>
              <TabPanel className="content">
                <ListAllClassPanel />
              </TabPanel>
              <TabPanel className="content">
                <ListAllschoolGroupPanel />
              </TabPanel>
              <TabPanel className="content">
                <ListAllDisciplinePanel />
              </TabPanel>
            </Tabs>
          </C.WrapperContent>
          <TabPanel className="content">
            <ListAllAcademicYearPanel />
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
