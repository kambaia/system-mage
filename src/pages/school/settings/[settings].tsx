import React, { useState } from 'react';
import Layout from '../../../Layout';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import * as C from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { withAuth } from 'src/pages/provider/AuthWith';
import Modal from '@components/common/Modal/ModalSettings';
import {
  ListAllClassPanel,
  ListAllCoursePanel,
  ListAllDisciplinePanel,
  ListAllschoolGroupPanel
} from '@components/configuration/settings-actions';
import StickerCard from '@components/Cards/StickerCard';
import { AiOutlineArrowDown, AiOutlineArrowRight } from 'react-icons/ai';
import { MdPayment, MdOutlineDateRange } from 'react-icons/md';
import * as FaIcon from 'react-icons/fa';
import * as FiIcon from 'react-icons/fi';
import * as RiIcon from 'react-icons/ri';

import theme from 'src/styles/theme';
import StickerCardOption from '@components/Cards/StickerCardOption';
import { ROUTES } from '@utils/routes';
export default function Panel() {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  return (
    <>
      <Layout>
        <div className="w-full bg-white p-6">
          <h2>ÁREA DE CONTROLO Administrativo</h2>
        </div>
        <C.MenuBodyOption>
          <div className="flex flex-wrap mb-6 card">
            <Link
              href={ROUTES.SETTINGS_ACADEMICYEAR}
              className="w-full sm:w-2/4 xl:w-1/4 sm:px-3 sm:pr-0 xl:pr-3 mb-6 xl:mb-0 card-menu"
            >
              <a className="card-menu">
                <StickerCardOption
                  title="Definir ano lectivo"
                  icon={<FiIcon.FiSettings color={theme.backgroundBlue} />}
				  graphic={<AiOutlineArrowRight  color={theme.backgroundBlue} />}
                  classIcon={'icon-decrease'}
                />
              </a>
            </Link>

            <Link
              href={ROUTES.SCHOOL_SETTINGS}
              className="w-full sm:w-2/4 xl:w-1/4 sm:px-3 sm:pr-0 xl:pr-3 mb-6 xl:mb-0 card-menu"
            >
              <a className="card-menu">
                <StickerCardOption
                  title="Configurações Escolares"
                  icon={
                    <RiIcon.RiFileSettingsLine color={theme.backgroundBlue} />
                  }
                   graphic={<AiOutlineArrowRight  color={theme.backgroundBlue} />}
                  classIcon={'icon-decrease'}
                />
              </a>
            </Link>
            <Link
              href={ROUTES.PAYMENT_SETTINGS}
              className="w-full sm:w-2/4 xl:w-1/4 sm:px-3 sm:pr-0 xl:pr-3 mb-6 xl:mb-0 card-menu"
            >
              <a className="card-menu">
                <StickerCardOption
                  title="Definições de Pagamento"
                  icon={<MdPayment color={theme.backgroundBlue} />}
                   graphic={<AiOutlineArrowRight  color={theme.backgroundBlue} />}
                  classIcon={'icon-decrease'}
                />
              </a>
            </Link>

            <Link
              href={ROUTES.SERVICE_SETTINGS}
              className="w-full sm:w-2/4 xl:w-1/4 sm:px-3 sm:pr-0 xl:pr-3 mb-6 xl:mb-0 card-menu"
            >
              <a className="card-menu">
                <StickerCardOption
                  title="Serviços"
                  icon={<MdOutlineDateRange color={theme.backgroundBlue} />}
                   graphic={<AiOutlineArrowRight  color={theme.backgroundBlue} />}
                  classIcon={'icon-decrease'}
                />
              </a>
            </Link>
            <Link
              href={ROUTES.REGISTRATIONANROL_SETTINGS}
              className="w-full sm:w-2/4 xl:w-1/4 sm:px-3 sm:pr-0 xl:pr-3 mb-6 xl:mb-0 card-menu"
            >
              <a className="card-menu">
                <StickerCardOption
                  title="Matricular"
                  icon={<FaIcon.FaIdCard color={theme.backgroundBlue} />}
                  graphic={<AiOutlineArrowRight  color={theme.backgroundBlue} />}
                  classIcon={'icon-decrease'}
                />
              </a>
            </Link>
            <Link
              href={ROUTES.CONFIRMATIONS_SETTINGS}
              className="w-full sm:w-2/4 xl:w-1/4 sm:px-3 sm:pr-0 xl:pr-3 mb-6 xl:mb-0 card-menu"
            >
              <a className="card-menu">
                <StickerCardOption
                  title="Confirmação"
                  icon={<FaIcon.FaRegIdBadge color={theme.backgroundBlue} />}
                   graphic={<AiOutlineArrowRight  color={theme.backgroundBlue} />}
                  classIcon={'icon-decrease'}
                />
              </a>
            </Link>

            <Link
              href={ROUTES.GROUPS_SETTINGS}
              className="w-full sm:w-2/4 xl:w-1/4 sm:px-3 sm:pr-0 xl:pr-3 mb-6 xl:mb-0 card-menu"
            >
              <a className="card-menu">
                <StickerCardOption
                  title="Turmas"
                  subtitle="Descei mais de"
                  icon={<FaIcon.FaLayerGroup color={theme.backgroundBlue} />}
                  graphic={<AiOutlineArrowRight  color={theme.backgroundBlue} />}
                  classIcon={'icon-decrease'}
                />
              </a>
            </Link>
            <Link
              href={ROUTES.STUDENT_SETTINGS}
              className="w-full sm:w-2/4 xl:w-1/4 sm:px-3 sm:pr-0 xl:pr-3 mb-6 xl:mb-0 card-menu"
            >
              <a className="card-menu">
                <StickerCardOption
                  title="Estudantes"
                  subtitle="Descei mais de"
                  icon={<FaIcon.FaUserGraduate />}
                  graphic={<AiOutlineArrowRight  color={theme.backgroundBlue} />}
                  classIcon={'icon-decrease'}
                  status={'-10'}
                />
              </a>
            </Link>
           
          </div>
        </C.MenuBodyOption>
        {/* <C.WrapperContent>
          <Tabs className="wrapper">
            <TabList className="tab-item">
              <div className="menu-option-setting">
                <Tab
                  className={`${
                    router.query.settings === '1' ? 'item active' : 'item'
                  }`}
                >
                  <Link as={'/school/settings/1'} href="/school/settings/1">
                    Cursos
                  </Link>
                </Tab>
                <Tab
                  className={`${
                    router.query.settings === '2' ? 'item active' : 'item'
                  }`}
                >
                  <Link as={'/school/settings/2'} href="/school/settings/2">
                    Propina
                  </Link>
                </Tab>
                <Tab
                  className={`${
                    router.query.settings === '3' ? 'item active' : 'item'
                  }`}
                >
                  <Link as={'/school/settings/3'} href="/school/settings/3">
                    Classes
                  </Link>
                </Tab>
                <Tab
                  className={`${
                    router.query.settings === '4' ? 'item active' : 'item'
                  }`}
                >
                  <Link as={'/school/settings/4'} href="/school/settings/4">
                    Turmas
                  </Link>
                </Tab>
                <Tab
                  className={`${
                    router.query.settings === '5' ? 'item active' : 'item'
                  }`}
                >
                  <Link as={'/school/settings/5'} href="/school/settings/5">
                    Disciplinas
                  </Link>
                </Tab>
              </div>
              <div className="menu-option-setting">
                <Tab
                  className={`${
                    router.query.settings === '5' ? 'conf active' : 'conf'
                  }`}
                  onClick={() => openModal}
                >
                  Configurações de Pagamento
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
        </C.WrapperContent> */}
      </Layout>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}

export const getServerSideProps = withAuth(
  async (ctx: any, cookies: any, payload: any) => {
    return {
      props: {}
    };
  }
);
