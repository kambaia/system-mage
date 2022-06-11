import styled from "styled-components";


export const WrapperContainer= styled.main`
  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`

export const Content= styled.main`
  position: absolute;
  padding-top:20px;
  width: 100%;
  top: 8%;
  height: 100vh;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
    width: calc(100% - 300px);
    left: 300px;


`
export const MainContent= styled.main<{menu:boolean}>`
  position: absolute;
  height: 100vh;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  width: ${p => p.menu? 'calc(100% - 300px)' : 'calc(100% - 80px)'};
  left: ${p => p.menu? '300px': '80px'};
  @media(max-width:1024px) {
	width: calc(100% - 90px);
    left: 80px;
    }
  z-index: 0;
`
export const Container = styled.div`
  width: 98%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
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