import styled from 'styled-components';

export const WrapperContent = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  flex: 1;
  position: relative;

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;

    .tab-item {
      display: flex;
      outline: none;
    }
    .item {
      display: flex;
      align-items: center;
      padding: 15px;
      outline: none;
      cursor: pointer;
      background-color: #fff;
      background: #dee3e1;
      color: ${({ theme }) => theme.backgroundBlue};

      a {
        color: #555;
      }
    }
    .active {
      padding: 10px;
      outline: none;
      cursor: pointer;
      background-color: #fff;
      border-bottom: 2px solid ${({ theme }) => theme.backgroundBlue};
      background: #fff;
      border-top-left-radius: 10px;
      a {
        color: #555;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      width: 100%;
      margin: auto;
    }
  }
`;

export const WrapperBody = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 5px;
  background-color: #fff;
  width: 100%;

  .border {
    border: none;
  }
`;

export const SessionInputFildUser = styled.div`
  border-top: 2px solid ${({ theme }) => theme.backgroundBlue};
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: #fff;
  width: 100%;
  border-bottom: 2px solid #ddd;
  position: relative;

  .border {
    border: none;
  }
  label{
	  font-size: 1.12em;
	  color: #555;
	  padding: 0px 20px;

  }

  .content-card-users{
	  width: 100%;
	  height: 400px;
	  background-color: #fafafa;
	  position: absolute;
	  top: 80%;
	  flex-direction: column;
	  box-shadow: 0px 0px 10px #ddd;
	  z
	
	

	  .header-card{
		  padding: 20px;
		  border: 1px solid #ddd;
		  width: 100%;
		  height: 60px;
	  }
	  .user-profile{
		  width: 50px;
		  height: 50px;
		  img{
			  width: 100%;
			  height: 100%;
		  }
	  }
	  .data-user-list{
		  width: 100%;
		  display: flex;
		  flex-direction: column;
		  padding: 10px;
		  border: 1px solid #ddd; 
		  overflow-y:auto;
		  overflow-x: hidden;
		  height: 300px;

		  li{
			display: flex;
			align-items: center;
			padding: 10px;
			.user-name{
				padding: 10px;
				font-size: 15pt;
			}
		  }
	  }
  }
`;




export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  width: 100%;

  padding: 10px;

  .suport-cardbody {
    height: 480px;
  }

  .user {
    width: 100%;
    border-bottom: 1px solid #ddd;
    box-shadow: 0px 2px 5px #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
	max-height: 300px;
	min-height: 300px;
    .profile {
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      button{
            cursor: pointer;  
            background-color: green;
            padding: 5px 10px;
            color: #fff;
            border-radius: 4px;
        }
      .upload {
        color: #1c6abd;
        padding: 5px;
        #file {
          display: none;
        }
       
        label {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          span{
              padding-left:5px;
          }
        }
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  .time-word {
    border: 1px solid #ddd;
    height: 50px;
    margin-top: 2px;
    padding: 10px;

    h2 {
      display: flex;
      justify-content: space-between;
    }
    .process-acess {
      height: 4px;
      background-color: #ddd;
      border-radius: 20px;
      margin-top: 5px;
      position: relative;

      .active-progress {
        background-color: ${({ theme }) => theme.backgroundBlue};
        position: absolute;
        width: 20%;
        border-radius: 20px;
        height: 4px;
      }

      .active-drive {
        background-color: ${({ theme }) => theme.backgroundBlue};
        position: absolute;
        width: 3%;
        border-radius: 20px;
        height: 4px;
      }
    }
  }
  .description {
    padding: 15px;
    h3 {
      padding-bottom: 20px;
      font-weight: bold;
      color: #333;
    }
    p {
      font-size: 15px;
      text-align: justify;
    }
  }

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;

    .suport {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: space-between;
    }

    .suport-card {
      margin: 10px;
      width: 100%;
    }
  }
`;
export const CardButton = styled.div`
  button {
    background-color: ${({ theme }) => theme.backgroundBlue};
    :hover {
      opacity: 0.8;
      background-color: ${({ theme }) => theme.backgroundBlue};
    }
  }
`;
