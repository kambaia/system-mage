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

  .border {
    border: none;
    background-color: #f00;
  }
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

`;


export const InpuGroup = styled.div`
display: flex;
  width: 100%;
  justify-content: space-between;

  .input {
    width: 48%;
  }
`;


