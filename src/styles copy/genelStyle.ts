import styled from "styled-components";


export const WrapperContainer= styled.main`
  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`


export const MainContent= styled.section`
  position: absolute;
  width: calc(100% - 300px);
  left: 300px;
  height: 100vh;
  background-color: var(--grey);
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  overflow: auto;
  .active{
    width: calc(100% - 80px);
    left: 80px;
  }
`
export const Container = styled.div`
  width: 98%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`