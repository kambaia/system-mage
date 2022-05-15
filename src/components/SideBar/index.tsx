import React, { useContext } from 'react';
import * as C from './styles';
import * as FiIcon from 'react-icons/fi';
import * as FaIcon from 'react-icons/fa';
import * as MdIcon from 'react-icons/md';
import * as AiIcon from 'react-icons/ai';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ROUTES } from '@utils/routes';
import { AuthContext } from '@contexts/AuthContext';

export const SideBar: React.FC<{}> = () => {
  const { asPath } = useRouter();
  const { user } = useContext(AuthContext);
  return (
    <aside
      style={{ overflowX: 'scroll' }}
      className="side-menu shadow w-72 xl:w-76 hidden lg:block overflow-y-auto bg-white fixed left-0 bottom-0 h-full"
    >
      <C.Container>
        <ul>
          <span className="logo">
            <img src={`${user?.school.schoolLogo}`}/>
            <div><h3>{user?.school.schoolName}</h3></div>
          </span>
         
          <div className="content-nav ">
            <li className={asPath === ROUTES.DASHBOARD ? 'active' : ''}>
              <Link as={ROUTES.DASHBOARD} href={ROUTES.DASHBOARD}>
                <a>
                  <span className="icon">
                    <FiIcon.FiHome className="color-icon" />
                  </span>
                  <span className="title">Dashboard</span>
                </a>
              </Link>
            </li>
            <li
              className={
                asPath === ROUTES.USER ||
                asPath === ROUTES.USER + '/1' ||
                asPath === ROUTES.USER + '/2' ||
                asPath === ROUTES.USER + '/3' ||
                asPath === ROUTES.USER + '/4' ||
                asPath === ROUTES.USER + '/create' ||
                asPath === ROUTES.USER + '/update'
                  ? 'active'
                  : ''
              }
            >
              <Link href={ROUTES.USER + '/1'}>
                <a>
                  <span className="icon">
                    <FaIcon.FaUsers className="color-icon" />
                  </span>
                  <span className="title">Usuários</span>
                </a>
              </Link>
            </li>
            <li className={asPath === ROUTES.EMPLOYEE ? 'active' : ''}>
              <Link href={ROUTES.EMPLOYEE}>
                <a>
                  <span className="icon">
                    <AiIcon.AiOutlineUsergroupAdd className="color-icon" />
                  </span>
                  <span className="title">Funcionários</span>
                </a>
              </Link>
            </li>

            <li className={asPath === ROUTES.STUDENT ? 'active' : ''}>
              <Link href={ROUTES.STUDENT}>
                <a>
                  <span className="icon">
                    <FaIcon.FaUserGraduate className="color-icon" />
                  </span>
                  <span className="title">Estudantes</span>
                </a>
              </Link>
            </li>

            <li className={asPath === ROUTES.REGISTRATIONANROL ? 'active' : ''}>
              <Link href={ROUTES.REGISTRATIONANROL}>
                <a>
                  <span className="icon">
                    <FaIcon.FaIdCard className="color-icon" />
                  </span>
                  <span className="title">Matriculas</span>
                </a>
              </Link>
            </li>
            <li className={asPath === ROUTES.REGISTRATIONANROL ? 'active' : ''}>
              <Link href={ROUTES.REGISTRATIONANROL}>
                <a>
                  <span className="icon">
                    <MdIcon.MdPayments className="color-icon" />
                  </span>
                  <span className="title">Plano de Aulas</span>
                </a>
              </Link>
            </li>

            <li>
              <a>
                <span className="icon">
                  <FaIcon.FaRegCalendarAlt className="color-icon" />
                </span>
                <span className="title">Notas & Planificaões</span>
              </a>
            </li>

            <li>
              <a>
                <span className="icon">
                  <MdIcon.MdPayments className="color-icon" />
                </span>
                <span className="title">Pagamentos</span>
              </a>
            </li>

            <li
              className={
                asPath === ROUTES.SETTINGS ||
                asPath === ROUTES.SETTINGS + '/1' ||
                asPath === ROUTES.SETTINGS + '/2' ||
                asPath === ROUTES.SETTINGS + '/3' ||
                asPath === ROUTES.SETTINGS + '/4' ||
                asPath === ROUTES.SETTINGS + '/create' ||
                asPath === ROUTES.SETTINGS + '/update'
                  ? 'active'
                  : ''
              }
            >
              <Link href={ROUTES.SETTINGS + '/1'}>
                <a>
                  <span className="icon">
                    <MdIcon.MdPayments className="color-icon" />
                  </span>
                  <span className="title">Configurações</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href={ROUTES.PROFILE + '/1'}>
                <a>
                  <span className="icon">
                    <MdIcon.MdPayments className="color-icon" />
                  </span>
                  <span className="title">Perfil</span>
                </a>
              </Link>
            </li>
            <li>
              <a>
                <span className="icon">
                  <FiIcon.FiHelpCircle className="color-icon" />
                </span>
                <span className="title">Ajuda</span>
              </a>
            </li>
          </div>
          <div className="footer-bar">
            <div className="checkbox">
              <input type="checkbox" className="checkbox-input" />
              <label htmlFor="checkbox-input"></label>
            </div>
          </div>
        </ul>
      </C.Container>
    </aside>
  );
};
