import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  height: 100%;
  background: ${({ theme }) => theme.backgroundBlue};
  border-left: 10px solid ${({ theme }) => theme.backgroundBlue};
  transition: 0.5s;
  overflow: hidden;
  width: 300px;
  background: ${({ theme }) => theme.backgroundBlue};
  z-index: 999;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    padding: 20px 0;
    position: relative;
    width: 100%;
    box-shadow: 0px 0px 10px rgba(1, 0, 0, 0.3);
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }

  .content-nav {
    width: 300px;
    height: 65vh;
    overflow-x: hidden;
    overflow-y: auto;
	padding: 10px 15px;
    ::-webkit-scrollbar {
      width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 2px grey;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #555;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #1111;
    }
  }
  .active {
    width: 60px;
  }
  ul {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  ul li {
    position: relative;
    width: 200%;
    list-style: none;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
  ul .active{
	background: ${({ theme }) => theme.backgroundLight}; 
	position: relative;
    width: 200%;
    list-style: none;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
	background: ${({ theme }) => theme.backgroundLight};
	.color-icon{
	 color: ${({ theme }) => theme.backgroundBlue}
	}
     span{
		color: ${({ theme }) => theme.backgroundBlue}
	}
  }
  ul li:hover {
	background: ${({ theme }) => theme.backgroundLight};
  opacity: .3;
	.color-icon{
	 color: ${({ theme }) => theme.backgroundBlue}
	}
     span{
		color: ${({ theme }) => theme.backgroundBlue}
	}
  }

  .primary-nav {
    margin-bottom: 40px;
    pointer-events: none;
    padding: 20px;
  }
  ul li a {
    position: relative;
    width: 100%;
    display: block;
    display: flex;
	display: flex;
	  align-items: center;
    text-decoration: none;
	color: ${({ theme }) => theme.backgroundLight};
  }
  ul li:hover a {
    color: var(--blue);
  }
  ul li a .icon {
    position: relative;
    display: block;
    min-width: 60px;
    height: 60px;
    line-height: 70px;
    text-align: center;
	display: flex;
	align-items: center;
	padding: 0 10px;
  }
  ul li .color-icon{
	color: ${({ theme }) => theme.backgroundLight};
  }
  ul li a .title {
    position: relative;
    display: block;
    height: 60px;
    line-height: 60px;
    padding: 0px 10px;
    text-align: center;
  }

  /******************curve outside */

  ul li:hover a::before {
    content: "";
    position: absolute;
    right: 0;
    top: -50px;
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 35px 35px 0px 10px ${({ theme }) => theme.backgroundLight};
    pointer-events: none;
  }

  ul li:hover a::after {
    content: "";
    position: absolute;
    right: 0;
    top: -50px;
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 35px 35px 0px 10px ${({ theme }) => theme.backgroundLight};
    pointer-events: none;
  }

  .footer-bar {
    padding: 10px;
    position: absolute;
    width: 100%;
    bottom: 0;
  }

  .checkbox {
    height: 28px;
    width: 100px;
    background: #ddd;
    border-radius: 30px;
    position: relative;
    margin-left: 20px;
  }
  .checkbox::before,
  .checkbox::after {
    position: absolute;
    font-size: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-weight: bold;
    outline: none;
  }
  .checkbox::before {
    content: "BLUE";
    color: #031a3a;
    left: 12px;
    outline: none;
  }
  .checkbox::after {
    content: "DARK";
    color: #0c0d0d;
    right: 12px;
    outline: none;
    color: ${({ theme }) => theme.backgroundBlue};
  }
  .checkbox-input {
    position: absolute;
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    z-index: 2;
    -webkit-appearance: none;
	

    :focus {
      outline: none;
      border: none;
	  
    }
  }
  .checkbox label {
    position: absolute;
    height: 85%;
    width: 50px;

    background: linear-gradient(
      to bottom,
      #fcfff4 0%,
      #dfe5d7 40%,
      #b3bead 100%
    );
    border-radius: 40px;
    top: 50%;
    transform: translateY(-50%);
    left: 4px;
    transition: 0.2s linear;
    z-index: 1;
  }
  .checkbox-input:checked + label {
    left: calc(100% - 54px);
  }
`;
