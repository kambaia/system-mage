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
    .tab-item {
      display: flex;
      outline: none;
    }
    .item {
      display: flex;
      align-items: center;
      padding: 10px 30px;
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
      padding: 10px 30px;
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

`;

export const CardBody = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.backgroundBlue};
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


export const wrapperBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  margin: auto;
  h1{
    font-size: 1.5em;
  }
`;

