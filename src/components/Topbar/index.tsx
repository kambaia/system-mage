import React, { useEffect } from "react";
import * as C from "./styles";
import { CgMenu } from "react-icons/cg";
import userLogo from "../../assets/users/client5.png";
import { FaBell, FaEnvelopeOpenText } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Link from 'next/link';
export const TopBar = () => {
  //const navigate = useNavigate();
  // let toggle = document.querySelector(".toggle");
  // let navigation = document.querySelector(".navigation");
  // let main = document.querySelector(".main");
  // toggle.onclick = function () {
  // 	navigation.classList.toggle('active');
  // 	main.classList.toggle('active');
  // }

  return (
    <C.Container>
      <div className="tobar-option">
        <div className="toggle">
          <CgMenu className="icon-toggle" />
        </div>
        <div className="search">
          <label>
            <input name="nome" placeholder="Pesquisa" />
          </label>
        </div>
      </div>
      <C.MenusLeft>
        <div className="user">
          <img src={userLogo} alt="user" />
          <span>K.A</span>
        </div>
        <div className="menus-left">
          <span>
            <Link as={'/notes'} href="/home">
              <FaEnvelopeOpenText className="icons"/>
            </Link>
          </span>
          <span>
		  <Link as={'/notes'} href="/home">
              <FaBell  className="icons"/>
            </Link>
          </span>
          <span>
		  <Link as={'/notes'} href="/home">
              <FiLogOut  className="icons" />
            </Link>
          </span>
        </div>
      </C.MenusLeft>
    </C.Container>
  );
};
