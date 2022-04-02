import styled from "styled-components";

export const Container = styled.nav`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
  .right {
    flex: 1;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #000;
    background: url("/back-bainner.jpg") no-repeat left top,
      linear-gradient(#000, #000);
    background-image: linear-gradient(
        to bottom,
        rgba(6, 92, 149, 0.32),
        rgba(0, 0, 0, 0.9)
      ),
      url("/back-bainner.jpg");
    background-size: cover;
    color: white;
    padding: 20px;
    background-position: 50%;
    -webkit-box-shadow: 0px 0px 11px -1px #ddd;
    box-shadow: 0px 0px 11px -1px #ddd;
    @media (max-width: 730px) {
      display: none;
    }
  }

  .logo {
    box-sizing: border-box;
    margin-bottom: 50px;
    text-align: left;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-right: 70px;
    .logo-title {
      font-size: 30pt;
      color: #ddd;
    }
  }
  .logo span,
  p {
    padding: 10px 0px;
    font-size: 15pt;
    color: #ddd;
  }
  .logo span {
    font-size: 18pt;
    font-weight: bold;
    color: #000;
  }

  .left {
    flex: 1;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .content-form {
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 450px;
      width: 500px;
      border-radius: 10px;
      border: 1px solid #ddd;
      box-shadow: 0 0 10px #ccc;
      background: #fff;
      padding: 10px 0px;

      form div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 10px 10px;
        h3 {
          text-align: center;
          font-size: 1.3em;
          color: #555;
          padding-bottom: 1.5em;
        }
        .groups-input {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          align-items: center;
          padding: 10px;
          margin-top: 15px;
          border-radius: 5px;

          border: 1px solid #ddd;
          font-size: 13pt;
          .icon {
            padding-right: 10px;
            font-size: 18pt;
            color: #555;
          }
          input {
            flex: 1;
            outline: none;
            border: none;
            font-size: 15pt;
            color: #333;
          }
        }

        .b-acess {
          margin-top: 30px;
          text-align: center;
        }
        .b-acess button {
          padding: 10px 0px;
          border-radius: 5px;
          outline: none;
          border: 1px solid #ddd;
          font-size: 13pt;
          background-color: #1877f2;
          color: #fff;
          cursor: pointer;
        }

        .b-acess a {
          color: #1877f2;
          margin-top: 5px;
          text-decoration: none;
        }
        .b-acess a:hover {
          text-decoration: underline;
        }
      }

      .b-create-count {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }

      .b-create-count button {
        padding: 10px 0px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #ddd;
        font-size: 13pt;
        background-color: #36a420;
        color: #fff;
        cursor: pointer;
        width: 60%;
      }
    }
  }
`;
