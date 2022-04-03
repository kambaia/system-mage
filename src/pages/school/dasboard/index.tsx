import React from "react";
import { Link } from "react-router-dom";
import BainnerFeature from "../../../components/BainnerFeature";
import { Chart } from "../../../components/Chart";
import { Container } from "../../../styles/genelStyle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import * as C from "./styles";

// import { Container } from './styles';

export const Dasboard: React.FC = () => {
  return (
    <Container>
      <C.WrapperContent>
        <Tabs className="wrapper">
          <TabList className="tab-item">
            <Tab className="item"><Link to="/dashboad-school">Dashboard</Link></Tab>
            <Tab className="item"><Link to="/users">Usúario </Link></Tab>
            <Tab className="item"><Link to="/dashboad-school">professor </Link></Tab>
            <Tab className="item"><Link to="/dashboad-school">Funcionários </Link></Tab>
            <Tab className="item"><Link to="/dashboad-school">Gráficos Estudantil </Link></Tab>
            <Tab className="item"><Link to="/dashboad-school">Gráficos Monetário</Link></Tab>
            <Tab className="item"><Link to="/dashboad-school">Definições </Link></Tab>
            {/* <Tab>Rascunhos</Tab> */}
          </TabList>

          <TabPanel className="content">
            <C.WrapperBody>
              <BainnerFeature />
            </C.WrapperBody>

            <C.WrapperBody>
              <Chart />
            </C.WrapperBody>
            <C.WrapperBody>
              <div className="table">
                <div className="table-read">
                  <h3>Pagamentos desta semana</h3>
                  <span>
                    <Link to="/see-all">Ver todos</Link>
                  </span>
                </div>
                <table id="customers">
                  <tr>
                    <th>T. por</th>
                    <th>Tipo</th>
                    <th>Quant meses</th>
                    <th>Valor</th>
                    <th>Total</th>
                    <th>Data</th>
                  </tr>
                  <tr>
                    <td>Maria José</td>
                    <td>Encarregada</td>
                    <td>4</td>
                    <td>15.191,09</td>
                    <td>19.191,00</td>
                    <td>12-05-2022</td>
                  </tr>
                  <tr>
                    <td>Manuel Alberto</td>
                    <td>Encarregado</td>
                    <td>4</td>
                    <td>29.191,09</td>
                    <td>129.191,00</td>
                    <td>12-05-2022</td>
                  </tr>
                  <tr>
                    <td>Márcio Francisco</td>
                    <td>Encarregado</td>
                    <td>4</td>
                    <td>25.191,09</td>
                    <td>819.191,00</td>
                    <td>12-05-2022</td>
                  </tr>
                  <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Estudante</td>
                    <td>4</td>
                    <td>22.191,09</td>
                    <td>89.191,00</td>
                    <td>12-05-2022</td>
                  </tr>
                  <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Estudante</td>
                    <td>4</td>
                    <td>40.191,09</td>
                    <td>102.191,00</td>
                    <td>12-05-2022</td>
                  </tr>
                </table>
              </div>
            </C.WrapperBody>
          </TabPanel>
          <TabPanel className="content">
            <span>Sem informação disponível de professor</span>
          </TabPanel >
          <TabPanel className="content">
            <span>Sem informação disponível de professor</span>
          </TabPanel>
          <TabPanel className="content">
            <span>Sem informação disponível Funcionários
</span>
          </TabPanel>
          <TabPanel className="content">
            <span>Sem informação disponível Gráficos Estudantil</span>
          </TabPanel>
          <TabPanel className="content">
            <span>Sem informação disponível Gráficos Monetário</span>
          </TabPanel>
          <TabPanel className="content">
            <span>Sem informação disponível de Definições</span>
          </TabPanel>
          {/* <TabPanel>
					<span>Sem informação disponível</span>
				</TabPanel> */}
        </Tabs>
      </C.WrapperContent>
    </Container>
  );
};
