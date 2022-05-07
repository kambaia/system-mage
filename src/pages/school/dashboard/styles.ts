import styled from 'styled-components'
export const WrapperBody = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  width: 100%;
  padding: 5px;
  background-color: #fff;
  width: 99%;

  .table {
    -webkit-box-shadow: 0px 0px 11px -1px #ddd;
    box-shadow: 0px 0px 11px -1px #ddd;
    padding: 20px;
    flex: 1;
    max-height: 400px;
    margin-top: 20px;
    border-radius: 10px;
    
    .table-read {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #414141;
      h3 {
        padding: 10px 0;
        font-size: 1.5;
      }
      span a {
        color: #287bff;
        :hover {
          text-decoration: underline;
          opacity: 0.7;
        }
      }
    }

    #customers {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 100%;
      max-height: 400px;
      border: none;
      overflow-x: auto;
      overflow-y: hidden;
    }

    #customers td,
    #customers th {
      border: none;
      padding: 8px;
      cursor: pointer;
    }

    #customers tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    #customers tr:hover {
      background-color: #ddd;
    }

    #customers th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
	  background: ${({ theme }) => theme.backgroundBlue};
      color: white;
    }
  }
`

export const WrapperContent = styled.div`
  width: 99%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  flex: 1;
  position: relative;

  .wrapper{
    width: 100%;
    display: flex;
    flex-direction: column;

    .tab-item{
      display: flex;
      padding: 10px;
      outline: none;
     
    }
    .item{
      padding: 10px;
      outline: none;
      cursor: pointer;
      a {
        color: #555;
      }

    }
   .content{
     display: flex;
     flex-direction: column;
     overflow-x: hidden;
   } 
  }
  `
