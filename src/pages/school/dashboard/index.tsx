import BainnerFeature from '../../../components/BainnerFeature';
import React from 'react';
import Layout from '../../../Layout';
import { Chart } from "../../../components/Chart";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import * as C from "./styles";
import UsersPanel from '../user';
import Link from 'next/link';

export const Dasboard: React.FC = () => {
	return (
		<Layout>
		
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
										Ver todos
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
			
		</Layout>
	);
};

export default Dasboard;
