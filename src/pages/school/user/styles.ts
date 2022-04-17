import styled from 'styled-components';

export const WrapperContent = styled.div`
  width: 99%;
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
	  border-left:1px solid #fff;

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


