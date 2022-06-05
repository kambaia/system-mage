import styled from 'styled-components';

export const WrapperContent = styled.div`
padding: 20px 0px;
.input-selet{
    font-size: "1.75rem";
    :focus{
      border:none;
    }
}
`;

export const WrapperBody = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  width: 100%;
  padding: 5px;
  background-color: #fff;
  width: 99%;
`;


export const CardButton = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-end;
  width: 100%;
  button {
	background-color: ${({ theme }) => theme.greanButton};
	height: 40px;
	opacity: 1;
	:hover{
		background-color: ${({ theme }) => theme.greanButton};
		opacity: 0.8;
	}
  }
`;


export const CardGroup = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-end;
  width: 100%;

  .border {
    border: none;
	border: 1px solid #ddd;
  }

  .suport-cardbody {
    height: 480px;
  }

`;


export const InpuGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;
  .input {
    width: 48%;
  }

`;
export const UploadUserProfileStyle = styled.div`
 .user {
    box-shadow: 0px 2px 5px #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;


    .profile {
      width: 140px;
      height: 140px;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
	  border: 1px dotted;
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

`;

