import styled from 'styled-components'

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
  
  export const WrapperBody = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  width: 100%;
  padding: 5px;
  background-color: #fff;
  width: 99%;
`

