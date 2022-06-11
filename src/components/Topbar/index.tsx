import React, { useContext, useEffect, useState } from 'react';
import * as C from './styles';
import { CgMenu } from 'react-icons/cg';
import { FaBell, FaEnvelopeOpenText } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import Link from 'next/link';
import Loader from '@components/ui/loader/loader';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { AuthContext } from '@contexts/AuthContext';
import { useUI } from '@contexts/ui.context';
export const TopBar = () => {
  const router = useRouter();
  const { user, menu, onSidebarMenu } = useContext(AuthContext);
  function SignOut() {
    Cookies.remove('auth_token');
    Cookies.remove('auth_permissions');
	Cookies.remove('auth_id');
    router.push('/login');
    return <Loader text="Saindo..." />;
  }

  return (
    <C.Container menu={menu}>
      <div className="tobar-option">
        <div className="toggle" onClick={()=>onSidebarMenu()}>
          <CgMenu className="icon-toggle"  onClick={()=>onSidebarMenu()} />
        </div>
        <div className="search">
          <label>
            <input name="nome" placeholder="Pesquisa" />
          </label>
        </div>
      </div>
      <C.MenusLeft>
        <div className="user">
        <img src={`${user?.profile}`} alt="user" />
         {console.log()}
          <span>{user?.userName}</span>
        </div>
        <div className="menus-left">
          <span>
            <Link as={'/notes'} href="/home">
              <FaEnvelopeOpenText className="icons" />
            </Link>
          </span>
          <span>
            <Link as={'/notes'} href="/home">
              <FaBell className="icons" />
            </Link>
          </span>
          <span onClick={() => SignOut()}>
            <FiLogOut className="icons" />
          </span>
        </div>
      </C.MenusLeft>
      <C.MenuMobile>
        <div className="user">
        <img src={`${user?.profile}`} alt="user" />
          <span>{user?.userName}</span>
        </div>
        <div className="menus-left">
          <span onClick={() => SignOut()}>
            <FiLogOut className="icons" />
          </span>
        </div>
      </C.MenuMobile>
    </C.Container>
  );
};
