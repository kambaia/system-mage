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
    border-radius: 10px;
    box-shadow: 0px 0px px ${({ theme }) => theme.backgroundBlue};
    .tab-item {
      display: flex;
      outline: none;

      justify-content:space-between;
      .menu-option-setting{
        display:flex;
        
      }
    }
    .conf{
      display: flex;
      align-items: center;
      padding: 10px;
      outline: none;
      cursor: pointer;
      background-color: #fff;
      border: 2px solid ${({ theme }) => theme.backgroundBlue};
      border-radius: 5px;
    }
    .item {
      display: flex;
      align-items: center;
      padding: 15px;
      outline: none;
      cursor: pointer;
      background-color: #fff;
      border-left: 1px solid #fff;
      border-bottom: 2px solid ${({ theme }) => theme.backgroundBlue};
      a {
        color:${({ theme }) => theme.backgroundBlue};
      }
    }
    .active {
      padding: 10px;
      outline: none;
      cursor: pointer;
      background-color: #fff;
      background: #fff;
      background: ${({ theme }) => theme.backgroundBlue};
      border-top-left-radius: 10px;
      a {
        color: #fff;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      width: 98%;
      margin: auto;
      
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

export const CardBody = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 10px;
`;

export const CardGroup = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-end;
  width: 100%;
`;
export const ModalSetting = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #f00;
  z-index:1000;
  width: 100%;
  overflow-y:hidden;

`;


export const MenuBodyOption = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  width: 100%;
  height:80vh;
  align-items: center;

  .card{
    display: flex;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;


    .card-menu{
      cursor: pointer;
      margin: 10px;
      width: 22%;
      height: 180px;
    }
  }
  
`;



