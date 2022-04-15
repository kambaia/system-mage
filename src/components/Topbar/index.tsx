import React, { useEffect } from "react";
import * as C from "./styles";
import { CgMenu } from "react-icons/cg";
import userLogo from "../../assets/users/client5.png";
import { FaBell, FaEnvelopeOpenText } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/useAuth";

export const TopBar = () => {
  const { logout, user, schoolAccess} = useAuth();
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
            <input name="nome" placeholder="pesquisa" />
          </label>
        </div>
      </div>
      <C.MenusLeft>
        <div className="user">
          <img src={userLogo} alt="user" />
          <span>{schoolAccess?.shoolRepresentative.userName}</span>
        </div>
        <div className="menus-left">
          <span>
            <Link to="#" className="link">
              <FaEnvelopeOpenText className="icons"/>
            </Link>
          </span>
          <span>
            <Link to="#" className="link">
              <FaBell  className="icons"/>
            </Link>
          </span>
          <span onClick={()=>logout()}>
            <Link to="#" className="link">
              <FiLogOut  className="icons" />
            </Link>
          </span>
        </div>
      </C.MenusLeft>
    </C.Container>
  );
};
