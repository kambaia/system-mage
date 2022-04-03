import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import { Dasboard } from '../pages/school';
export default function CompTabs() {
  return (
    <div>
        <WrapperBody>
        <Tabs className="wrapper">
          <TabList className="tab-item">
            <Tab className="item">Dashboard</Tab>
            <Tab  className="item">Usúario</Tab>
            <Tab  className="item">professor</Tab>
            <Tab  className="item">Funcionarios</Tab>
            <Tab  className="item">Gráficos</Tab>
            <Tab  className="item">Gráficos</Tab>
            <Tab  className="item">Definições</Tab>
            {/* <Tab>Rascunhos</Tab> */}
          </TabList>
        
          <TabPanel>
               <Dasboard />
          </TabPanel>
          <TabPanel>
            <span>Sem informação disponível</span>
          </TabPanel>
          {/* <TabPanel>
					<span>Sem informação disponível</span>
				</TabPanel> */}
         
        </Tabs>
      </WrapperBody>
    </div>
  )
}
const WrapperBody = styled.div`
width: 99%;
margin: 8% auto;
display: flex;
flex-direction: row;
align-content: center;
flex: 1;
z-index: 20;
position: absolute;

.wrapper{
  width: 100%;
  display: flex;
  flex-direction: column;

  .tab-item{
    display: flex;
    padding: 10px;
  }
  .item{
    padding: 10px;
    background-color: #FFF;
    border-left: 1px solid #DDD;
    outline: none;
    cursor: pointer;
  }
}
`;