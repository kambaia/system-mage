import BainnerFeature from '../../../components/BainnerFeature';
import React from 'react';
import Layout from '../../../Layout';
import { Chart } from "../../../components/Chart";
import * as C from "./styles";
import { withAuth } from 'src/pages/provider/AuthWith';
export const Dasboard: React.FC = () => {

	return (
		<Layout>
			<BainnerFeature />
			<div className="w-full flex shadow flex-wrap mb-6">
				<Chart />
			</div>
			<C.WrapperBody>
				<div className="table bg-white">
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



export const getServerSideProps = withAuth(
	async (ctx: any, cookies: any, payload: any) => {
	  return {
		props: {},
	  };
	}
  );
  